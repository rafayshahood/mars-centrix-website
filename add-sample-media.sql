-- Add sample media data for existing templates
-- First, get the template ID for "Support Ticket Triage" template
-- You'll need to replace the UUID with the actual ID from your database

-- Sample media for Support Ticket Triage template (using same image 3 times for carousel demo)
INSERT INTO template_media (template_id, media_url, media_type, display_order, alt_text) VALUES
('4a42a50c-244c-424c-bb68-a8ea496f5fff', 'https://drive.google.com/uc?export=view&id=1dtsZBFG7QyQBhDvyFZlpAV7eI6NzhkJx', 'image', 1, 'Support ticket dashboard overview'),
('4a42a50c-244c-424c-bb68-a8ea496f5fff', 'https://drive.google.com/uc?export=view&id=1dtsZBFG7QyQBhDvyFZlpAV7eI6NzhkJx', 'image', 2, 'Automated ticket routing workflow'),
('4a42a50c-244c-424c-bb68-a8ea496f5fff', 'https://drive.google.com/uc?export=view&id=1dtsZBFG7QyQBhDvyFZlpAV7eI6NzhkJx', 'image', 3, 'Priority classification system');

-- To find your template IDs, run this query first:
-- SELECT id, name FROM templates WHERE name = 'Support Ticket Triage';

-- Then replace 'YOUR_TEMPLATE_ID_HERE' with the actual UUID and run the INSERT statements above
