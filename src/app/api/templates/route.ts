import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const platform = searchParams.get('platform')
    const featured = searchParams.get('featured')
    const popular = searchParams.get('popular')
    const homepage = searchParams.get('homepage')

    let query = supabase.from('templates').select(`
      *,
      media:template_media(*)
    `)

    // Apply filters
    if (category) {
      query = query.eq('category', category)
    }
    if (platform) {
      query = query.eq('platform', platform)
    }
    if (featured === 'true') {
      query = query.eq('is_featured', true)
    }
    if (popular === 'true') {
      query = query.eq('is_popular', true)
    }
    if (homepage === 'true') {
      query = query.eq('display_on_homepage', true)
    }

    // Order by created_at desc
    query = query.order('created_at', { ascending: false })

    const { data, error } = await query

    if (error) {
      console.error('Templates fetch error:', error)
      return NextResponse.json({ error: 'Failed to fetch templates' }, { status: 500 })
    }

    return NextResponse.json({ templates: data })

  } catch (error) {
    console.error('Templates API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const templateData = await request.json()

    const { data, error } = await supabase
      .from('templates')
      .insert([templateData])
      .select()

    if (error) {
      console.error('Template creation error:', error)
      return NextResponse.json({ error: 'Failed to create template' }, { status: 500 })
    }

    return NextResponse.json({ 
      message: 'Template created successfully',
      template: data[0]
    }, { status: 201 })

  } catch (error) {
    console.error('Template POST API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
