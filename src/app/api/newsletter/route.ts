import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { email, source = 'popup' } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Insert email into newsletter_subscribers table
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([
        {
          email,
          source,
          subscribed_at: new Date().toISOString(),
          is_active: true
        }
      ])
      .select()

    if (error) {
      // Handle duplicate email error
      if (error.code === '23505') {
        return NextResponse.json({ error: 'Email already subscribed' }, { status: 409 })
      }
      console.error('Newsletter subscription error:', error)
      return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
    }

    return NextResponse.json({ 
      message: 'Successfully subscribed to newsletter',
      data: data[0]
    }, { status: 201 })

  } catch (error) {
    console.error('Newsletter API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    // Get newsletter subscriber count (for admin/stats)
    const { count, error } = await supabase
      .from('newsletter_subscribers')
      .select('*', { count: 'exact', head: true })
      .eq('is_active', true)

    if (error) {
      console.error('Newsletter count error:', error)
      return NextResponse.json({ error: 'Failed to get subscriber count' }, { status: 500 })
    }

    return NextResponse.json({ 
      subscriber_count: count 
    })

  } catch (error) {
    console.error('Newsletter GET API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
