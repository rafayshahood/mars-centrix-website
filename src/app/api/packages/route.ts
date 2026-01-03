import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const homepage = searchParams.get('homepage')

    let query = supabase.from('packages').select('*')

    // Apply homepage filter
    if (homepage === 'true') {
      query = query.eq('display_on_homepage', true)
    }

    // Order by price ascending
    query = query.order('price', { ascending: true })

    const { data, error } = await query

    if (error) {
      console.error('Packages fetch error:', error)
      return NextResponse.json({ error: 'Failed to fetch packages' }, { status: 500 })
    }

    return NextResponse.json({ packages: data })

  } catch (error) {
    console.error('Packages API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const packageData = await request.json()

    const { data, error } = await supabase
      .from('packages')
      .insert([packageData])
      .select()

    if (error) {
      console.error('Package creation error:', error)
      return NextResponse.json({ error: 'Failed to create package' }, { status: 500 })
    }

    return NextResponse.json({ 
      message: 'Package created successfully',
      package: data[0]
    }, { status: 201 })

  } catch (error) {
    console.error('Package POST API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
