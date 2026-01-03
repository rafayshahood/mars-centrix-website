import { createClient } from '@supabase/supabase-js'

// These will be your environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types (will be generated from your schema)
export interface Template {
  id: string
  name: string
  description: string
  price: number
  image_url?: string
  platform: 'Make' | 'n8n' | 'Zapier' | 'Custom' | 'HubSpot' | 'Buffer' | 'Monday.com' | 'Airtable' | 'Typeform'
  category: 'Sales' | 'Support' | 'HR' | 'Finance' | 'Marketing' | 'Operations' | 'E-commerce'
  features: string[]
  integrations: string[]
  setup_time: string
  complexity: 'Beginner' | 'Intermediate' | 'Advanced' | 'Easy' | 'Medium' | 'Complex'
  is_popular: boolean
  is_featured: boolean
  display_on_homepage: boolean
  created_at: string
  updated_at: string
  media?: TemplateMedia[]
}

export interface TemplateMedia {
  id: string
  template_id: string
  media_url: string
  media_type: 'image' | 'video'
  display_order: number
  thumbnail_url?: string
  alt_text?: string
  created_at: string
  updated_at: string
}

export interface NewsletterSubscriber {
  id: string
  email: string
  subscribed_at: string
  source: string
  is_active: boolean
}

export interface Order {
  id: string
  user_email: string
  template_id: string
  amount: number
  currency: string
  stripe_payment_intent_id: string
  status: 'pending' | 'completed' | 'failed' | 'refunded'
  created_at: string
  updated_at: string
}

export interface Package {
  id: string
  name: string
  description: string
  price: number
  features: string[]
  is_popular: boolean
  display_on_homepage: boolean
  created_at: string
  updated_at: string
}
