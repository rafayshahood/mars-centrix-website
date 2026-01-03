-- Add sample packages to demonstrate dynamic packages page
INSERT INTO packages (name, description, price, features, is_popular, display_on_homepage) VALUES 
(
  'Starter Package',
  'Perfect for small businesses looking to automate their first workflow and see immediate ROI. Get started with AI automation without the complexity.',
  2997.00,
  ARRAY[
    '1 custom workflow automation',
    'Up to 3 tool integrations', 
    'Basic monitoring dashboard',
    '2 weeks implementation',
    '1 month support included',
    'Training for up to 5 team members'
  ],
  false,
  true
),
(
  'Growth Package',
  'Comprehensive automation suite for growing companies ready to scale their operations efficiently. Multiple interconnected workflows with advanced analytics.',
  7997.00,
  ARRAY[
    '3-5 interconnected workflows',
    'Unlimited tool integrations',
    'Advanced analytics & reporting', 
    '6 weeks implementation',
    '3 months support included',
    'Training for unlimited team members',
    'Custom dashboard development',
    'Performance optimization'
  ],
  true,
  true
),
(
  'Enterprise Package',
  'Complete automation transformation for large organizations. Enterprise-grade security, compliance, and scalability with dedicated support team.',
  19997.00,
  ARRAY[
    '10+ custom workflow automations',
    'Enterprise integrations & APIs',
    'Advanced security & compliance',
    '12 weeks implementation', 
    '6 months support included',
    'Dedicated success manager',
    'Custom training program',
    '24/7 monitoring & support',
    'Quarterly optimization reviews'
  ],
  false,
  true
);
