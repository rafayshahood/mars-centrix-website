'use client'

import { useState, useEffect } from 'react'
import { X, Mail, Gift, Zap, ArrowRight } from 'lucide-react'

interface NewsletterPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isSubmitting) return

    setIsSubmitting(true)
    
    try {
      // Call our newsletter API
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'popup'
        }),
      })

      const result = await response.json()

      if (response.ok) {
        // Success - also store in localStorage for popup logic
        const existingEmails = JSON.parse(localStorage.getItem('newsletter_emails') || '[]')
        existingEmails.push({
          email,
          timestamp: new Date().toISOString(),
          source: 'popup'
        })
        localStorage.setItem('newsletter_emails', JSON.stringify(existingEmails))
        
        setIsSubmitted(true)
        
        // Auto-close after success
        setTimeout(() => {
          onClose()
          setIsSubmitted(false)
          setEmail('')
        }, 2000)
      } else {
        // Handle errors
        console.error('Newsletter subscription failed:', result.error)
        alert(result.error === 'Email already subscribed' 
          ? 'You are already subscribed to our newsletter!' 
          : 'Failed to subscribe. Please try again.')
      }
    } catch (error) {
      console.error('Newsletter submission error:', error)
      alert('Failed to subscribe. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup */}
      <div className="relative w-full max-w-md bg-background rounded-2xl shadow-2xl border border-border-subtle overflow-hidden animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-surface/80 hover:bg-surface flex items-center justify-center transition-colors"
        >
          <X className="h-4 w-4 text-text-soft" />
        </button>

        {/* Header with gradient */}
        <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-6 pb-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-primary/30 rounded-lg flex items-center justify-center">
                <Gift className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary">Exclusive Offer</span>
            </div>
            <h3 className="text-xl font-bold text-text mb-2">
              Get 25% Off Your First Template
            </h3>
            <p className="text-sm text-text-soft">
              Join 500+ businesses automating smarter with our proven templates and custom solutions.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-4 bg-background">
          {!isSubmitted ? (
            <>
              {/* Benefits */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm text-text-soft">25% discount on all automation templates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm text-text-soft">Weekly automation tips & case studies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm text-text-soft">Early access to new templates & packages</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-surface border border-border-subtle rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-text placeholder-text-soft"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="w-full btn btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Subscribing...</span>
                  ) : (
                    <>
                      <span>Claim 25% Discount</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-text-soft text-center mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-text mb-2">Welcome to Mars Centrix!</h4>
              <p className="text-sm text-text-soft mb-4">
                Check your email for your 25% discount code and automation guide.
              </p>
              <div className="text-xs text-text-soft">
                Closing automatically...
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
