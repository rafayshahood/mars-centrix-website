import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Zap, Shield, CheckCircle, Users, BookOpen, Settings } from 'lucide-react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to convert Google Drive URLs to direct image URLs
export function getDirectImageUrl(url: string | null | undefined): string | null {
  if (!url) return null
  
  // If it's already a direct Google Drive URL, return as is
  if (url.includes('drive.google.com/uc?export=view&id=')) {
    return url
  }
  
  // Check if it's a Google Drive sharing URL
  const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
  if (driveMatch) {
    const fileId = driveMatch[1]
    return `https://drive.google.com/uc?export=view&id=${fileId}`
  }
  
  return url
}

// Helper function to get category icon
export function getCategoryIcon(category: string) {
  switch (category) {
    case 'Support':
      return Shield
    case 'Sales':
      return Zap
    case 'Operations':
      return CheckCircle
    case 'Marketing':
      return Users
    case 'HR':
      return Users
    case 'Finance':
      return Settings
    case 'E-commerce':
      return BookOpen
    default:
      return Zap
  }
}
