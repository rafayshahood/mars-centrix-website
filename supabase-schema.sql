-- Mars Centrix Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Templates table
CREATE TABLE templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image_url TEXT,
    platform VARCHAR(50) NOT NULL CHECK (platform IN ('Make', 'n8n', 'Zapier', 'Custom')),
    category VARCHAR(50) NOT NULL CHECK (category IN ('Sales', 'Support', 'HR', 'Finance', 'Marketing', 'Operations', 'E-commerce')),
    features TEXT[] NOT NULL DEFAULT '{}',
    integrations TEXT[] NOT NULL DEFAULT '{}',
    setup_time VARCHAR(100) NOT NULL,
    complexity VARCHAR(50) NOT NULL CHECK (complexity IN ('Beginner', 'Intermediate', 'Advanced')),
    is_popular BOOLEAN DEFAULT FALSE,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Newsletter subscribers table
CREATE TABLE newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    source VARCHAR(100) NOT NULL DEFAULT 'popup',
    is_active BOOLEAN DEFAULT TRUE
);

-- Packages table
CREATE TABLE packages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    features TEXT[] NOT NULL DEFAULT '{}',
    is_popular BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Orders table
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_email VARCHAR(255) NOT NULL,
    template_id UUID REFERENCES templates(id),
    package_id UUID REFERENCES packages(id),
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    stripe_payment_intent_id VARCHAR(255) UNIQUE,
    status VARCHAR(50) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_templates_category ON templates(category);
CREATE INDEX idx_templates_platform ON templates(platform);
CREATE INDEX idx_templates_popular ON templates(is_popular);
CREATE INDEX idx_templates_featured ON templates(is_featured);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_email ON orders(user_email);
CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email);

-- Insert sample templates (migrating from your current data)
INSERT INTO templates (name, description, price, platform, category, features, integrations, setup_time, complexity, is_popular, is_featured) VALUES
('Support Ticket Triage', 'Automatically categorize and route support tickets based on urgency, topic, and customer tier using AI-powered classification.', 49.99, 'Make', 'Support', 
 ARRAY['AI-powered ticket classification', 'Priority-based routing', 'Customer tier recognition', 'Automated responses'], 
 ARRAY['Zendesk', 'Slack', 'OpenAI'], '30 minutes', 'Beginner', true, true),

('Sales Pipeline Automation', 'Streamline your lead scoring and nurturing process with automated follow-ups and intelligent lead qualification.', 79.99, 'Zapier', 'Sales',
 ARRAY['Lead scoring algorithm', 'Automated follow-up sequences', 'CRM integration', 'Performance analytics'],
 ARRAY['HubSpot', 'Salesforce', 'Gmail'], '45 minutes', 'Intermediate', true, false),

('Document Processing Hub', 'Extract, validate, and organize data from various document types using OCR and AI-powered data extraction.', 129.99, 'n8n', 'Operations',
 ARRAY['OCR document scanning', 'Data validation rules', 'Multi-format support', 'Automated filing'],
 ARRAY['Google Drive', 'Dropbox', 'Notion'], '60 minutes', 'Advanced', false, true);

-- Insert sample packages
INSERT INTO packages (name, description, price, features, is_popular) VALUES
('Starter', 'Perfect for small teams getting started with automation', 2997.00, 
 ARRAY['1-2 automation workflows', 'Basic integrations setup', '30 days support', 'Documentation & training'], false),

('Professional', 'Comprehensive automation for growing businesses', 7997.00,
 ARRAY['3-5 automation workflows', 'Advanced integrations & AI', '90 days support', 'Custom workflow design', 'Priority support'], true),

('Enterprise', 'Full-scale automation transformation', 19997.00,
 ARRAY['10+ automation workflows', 'Dedicated support', 'Custom development', 'SLA guarantees', 'Ongoing maintenance'], false);

-- Enable Row Level Security (RLS)
ALTER TABLE templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to templates and packages
CREATE POLICY "Templates are viewable by everyone" ON templates FOR SELECT USING (true);
CREATE POLICY "Packages are viewable by everyone" ON packages FOR SELECT USING (true);

-- Create policy for newsletter subscribers (anyone can insert)
CREATE POLICY "Anyone can subscribe to newsletter" ON newsletter_subscribers FOR INSERT WITH CHECK (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_templates_updated_at BEFORE UPDATE ON templates FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_packages_updated_at BEFORE UPDATE ON packages FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
