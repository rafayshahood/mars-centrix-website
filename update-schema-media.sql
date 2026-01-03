-- Create template_media table for multiple images and videos
CREATE TABLE IF NOT EXISTS template_media (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  template_id UUID REFERENCES templates(id) ON DELETE CASCADE,
  media_url TEXT NOT NULL,
  media_type VARCHAR(10) NOT NULL CHECK (media_type IN ('image', 'video')),
  display_order INTEGER DEFAULT 0,
  thumbnail_url TEXT, -- For video thumbnails
  alt_text TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_template_media_template_id ON template_media(template_id);
CREATE INDEX IF NOT EXISTS idx_template_media_order ON template_media(template_id, display_order);

-- Add RLS policies
ALTER TABLE template_media ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Template media are viewable by everyone" ON template_media
  FOR SELECT USING (true);

CREATE POLICY "Template media are insertable by authenticated users" ON template_media
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Template media are updatable by authenticated users" ON template_media
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Template media are deletable by authenticated users" ON template_media
  FOR DELETE USING (auth.role() = 'authenticated');

-- Update templates table to keep backward compatibility
-- Keep image_url for now but we'll migrate to template_media table
ALTER TABLE templates ADD COLUMN IF NOT EXISTS legacy_migrated BOOLEAN DEFAULT FALSE;
