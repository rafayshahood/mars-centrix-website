'use client'

import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import NewsletterPopup from '../ui/NewsletterPopup'
import { useNewsletterPopup } from '../../hooks/useNewsletterPopup'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { isOpen, closePopup } = useNewsletterPopup()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
      <NewsletterPopup isOpen={isOpen} onClose={closePopup} />
    </div>
  )
}
