import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

interface RouteParams {
  params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const resolvedParams = await params
    const { id } = resolvedParams

    const { data, error } = await supabase
      .from('templates')
      .select(`
        *,
        media:template_media(*)
      `)
      .eq('id', id)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Template not found' }, { status: 404 })
      }
      console.error('Template fetch error:', error)
      return NextResponse.json({ error: 'Failed to fetch template' }, { status: 500 })
    }

    return NextResponse.json({ template: data })

  } catch (error) {
    console.error('Template GET API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const resolvedParams = await params
    const { id } = resolvedParams
    const updateData = await request.json()

    const { data, error } = await supabase
      .from('templates')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Template update error:', error)
      return NextResponse.json({ error: 'Failed to update template' }, { status: 500 })
    }

    return NextResponse.json({ 
      message: 'Template updated successfully',
      template: data
    })

  } catch (error) {
    console.error('Template PUT API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const resolvedParams = await params
    const { id } = resolvedParams

    const { error } = await supabase
      .from('templates')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Template delete error:', error)
      return NextResponse.json({ error: 'Failed to delete template' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Template deleted successfully' })

  } catch (error) {
    console.error('Template DELETE API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
