import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Fetch template media
    const { data: media, error } = await supabase
      .from('template_media')
      .select('*')
      .eq('template_id', id)
      .order('display_order', { ascending: true })

    if (error) {
      console.error('Error fetching template media:', error)
      return NextResponse.json({ error: 'Failed to fetch template media' }, { status: 500 })
    }

    return NextResponse.json({ media: media || [] })
  } catch (error) {
    console.error('Error in template media API:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
