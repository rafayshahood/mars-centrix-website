'use client'

import { useState, useEffect } from 'react'

export function useNewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has already subscribed
    const hasSubscribed = localStorage.getItem('newsletter_emails')
    
    // Don't show if user has already subscribed
    if (hasSubscribed && JSON.parse(hasSubscribed).length > 0) {
      return
    }

    // Show popup after 3 seconds on initial page load
    const initialTimer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    // Set up recurring timer to show popup every 5 minutes (300,000ms)
    const recurringTimer = setInterval(() => {
      // Check again if user has subscribed before showing
      const currentSubscriptions = localStorage.getItem('newsletter_emails')
      if (!currentSubscriptions || JSON.parse(currentSubscriptions).length === 0) {
        setIsOpen(true)
      }
    }, 300000) // 5 minutes = 300,000 milliseconds

    return () => {
      clearTimeout(initialTimer)
      clearInterval(recurringTimer)
    }
  }, [])

  const closePopup = () => {
    setIsOpen(false)
  }

  return {
    isOpen,
    closePopup
  }
}
