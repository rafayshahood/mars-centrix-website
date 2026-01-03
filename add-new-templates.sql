-- Add 6 new templates (display_on_homepage = false, so only on templates page)
INSERT INTO templates (
  name, description, price, platform, category, complexity, setup_time, 
  features, integrations, is_popular, is_featured, display_on_homepage
) VALUES 
(
  'Lead Scoring Automation',
  'Automatically score and prioritize leads based on behavior, demographics, and engagement patterns using AI-powered algorithms.',
  199.99,
  'Custom',
  'Sales',
  'Intermediate',
  '2-3 hours',
  ARRAY['AI-powered lead scoring', 'Behavioral tracking', 'Demographic analysis', 'Real-time updates', 'Custom scoring rules', 'Integration with CRM'],
  ARRAY['HubSpot', 'Salesforce', 'Zapier', 'Google Analytics'],
  false,
  false,
  false
),
(
  'Social Media Content Scheduler',
  'Plan, create, and automatically publish content across multiple social media platforms with optimal timing and engagement tracking.',
  149.99,
  'Zapier',
  'Marketing',
  'Beginner',
  '1-2 hours',
  ARRAY['Multi-platform posting', 'Content calendar', 'Optimal timing', 'Engagement analytics', 'Hashtag suggestions', 'Team collaboration'],
  ARRAY['Buffer', 'Hootsuite', 'Facebook', 'Twitter', 'LinkedIn', 'Instagram'],
  false,
  false,
  false
),
(
  'Expense Report Automation',
  'Streamline expense reporting with receipt scanning, automatic categorization, and approval workflows for finance teams.',
  179.99,
  'Zapier',
  'Finance',
  'Intermediate',
  '2-4 hours',
  ARRAY['Receipt OCR scanning', 'Auto categorization', 'Approval workflows', 'Policy compliance', 'Expense tracking', 'Reporting dashboard'],
  ARRAY['Zapier', 'Expensify', 'QuickBooks', 'Slack', 'Gmail'],
  false,
  false,
  false
),
(
  'Employee Onboarding Workflow',
  'Automate the complete employee onboarding process from document collection to task assignments and progress tracking.',
  229.99,
  'Custom',
  'HR',
  'Advanced',
  '3-5 hours',
  ARRAY['Document collection', 'Task automation', 'Progress tracking', 'Welcome sequences', 'Training schedules', 'Compliance checks'],
  ARRAY['Monday.com', 'BambooHR', 'Slack', 'Google Workspace', 'DocuSign'],
  false,
  false,
  false
),
(
  'Inventory Management System',
  'Track inventory levels, automate reordering, and manage supplier communications with real-time stock monitoring.',
  299.99,
  'Custom',
  'Operations',
  'Advanced',
  '4-6 hours',
  ARRAY['Real-time tracking', 'Auto reordering', 'Supplier management', 'Low stock alerts', 'Demand forecasting', 'Multi-location support'],
  ARRAY['Airtable', 'Shopify', 'WooCommerce', 'Slack', 'Email'],
  false,
  false,
  false
),
(
  'Customer Feedback Analysis',
  'Collect, analyze, and act on customer feedback from multiple channels using sentiment analysis and automated response routing.',
  189.99,
  'Custom',
  'Support',
  'Intermediate',
  '2-3 hours',
  ARRAY['Multi-channel collection', 'Sentiment analysis', 'Automated routing', 'Response templates', 'Trend analysis', 'Action triggers'],
  ARRAY['Typeform', 'SurveyMonkey', 'Zendesk', 'Slack', 'Google Sheets'],
  false,
  false,
  false
);

-- Get the template IDs for adding media
-- Note: You'll need to run this after the above insert to get the actual UUIDs
