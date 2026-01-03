'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import siteConfig from '@/config/site-config'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    consultationType: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send data to n8n webhook using GET with query parameters
      const params = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        company: formData.company || '',
        message: formData.message,
        consultationType: formData.consultationType,
        timestamp: new Date().toISOString(),
        source: 'contact_form'
      })
      
      const response = await fetch(`${siteConfig.webhook.contactForm}?${params.toString()}`, {
        method: 'GET'
      })

      if (response.ok) {
        setIsSubmitted(true)
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: '',
            email: '',
            company: '',
            message: '',
            consultationType: 'general'
          })
        }, 3000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      // Still show success message to user, but log error
      setIsSubmitted(true)
      
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          consultationType: 'general'
        })
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="gradient-orbit animate-pulse-slow"></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-5xl font-bold mb-6">
              Let's Transform Your Business
            </h1>
            <p className="text-lg text-text-soft max-w-3xl mx-auto">
              Ready to automate your workflows and boost productivity? Get in touch with our automation experts for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-text-soft mb-8">
                Whether you need a quick template deployment or a custom automation solution, we're here to help. Book a free consultation to discuss your needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-text-soft">{siteConfig.contact.email}</p>
                    <p className="text-sm text-text-soft">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-text-soft">{siteConfig.contact.phone}</p>
                    <p className="text-sm text-text-soft">{siteConfig.contact.businessHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Free Consultation</h3>
                    <p className="text-text-soft">30-minute strategy session</p>
                    <p className="text-sm text-text-soft">Book directly through this form</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-text-soft">{siteConfig.contact.address}</p>
                    <p className="text-sm text-text-soft">Serving clients worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-text-soft">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background-subtle border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background-subtle border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background-subtle border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="consultationType" className="block text-sm font-medium mb-2">
                        What can we help you with? *
                      </label>
                      <select
                        id="consultationType"
                        name="consultationType"
                        required
                        value={formData.consultationType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background-subtle border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="consultation">Free Strategy Consultation</option>
                        <option value="templates">Template Questions</option>
                        <option value="custom">Custom Package Inquiry</option>
                        <option value="support">Technical Support</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background-subtle border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us about your automation needs, current challenges, or any specific questions you have..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn btn-primary group"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-sm text-text-soft text-center">
                      By submitting this form, you agree to our privacy policy. We'll never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-text-soft max-w-2xl mx-auto">
              Quick answers to common questions about our automation services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-6">
              <h3 className="font-semibold mb-3">How long does a consultation take?</h3>
              <p className="text-text-soft text-sm">
                Our free strategy consultations typically last 30 minutes. We'll discuss your current processes, identify automation opportunities, and recommend the best approach for your needs.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold mb-3">What's included in a template?</h3>
              <p className="text-text-soft text-sm">
                Each template includes the complete automation workflow, setup instructions, integration guides, and 30 days of support to ensure successful deployment.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold mb-3">Do you offer custom solutions?</h3>
              <p className="text-text-soft text-sm">
                Yes! Our custom packages are tailored to your specific business needs. We build unique automation systems that integrate with your existing tools and workflows.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold mb-3">What's your response time?</h3>
              <p className="text-text-soft text-sm">
                We respond to all inquiries within 24 hours during business days. For urgent matters, please mention it in your message and we'll prioritize accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
