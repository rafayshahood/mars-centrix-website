export interface Template {
  id: string
  name: string
  description: string
  detailedDescription: string
  price: number
  image: string
  platform: 'Make' | 'n8n' | 'Zapier' | 'Custom'
  category: 'Sales' | 'Support' | 'HR' | 'Finance' | 'Marketing' | 'Operations' | 'E-commerce'
  features: string[]
  benefits: string[]
  integrations: string[]
  metrics: {
    label: string
    value: string
  }
  setupTime: string
  complexity: 'Beginner' | 'Intermediate' | 'Advanced'
  popular: boolean
  featured: boolean
}

export const templates: Template[] = [
  {
    id: 'sales-pipeline-automation',
    name: 'Sales Pipeline Automation',
    description: 'Complete CRM automation with lead scoring, follow-up sequences, and deal progression tracking.',
    detailedDescription: 'Transform your sales process with intelligent automation that handles lead qualification, scoring, and nurturing. This comprehensive template includes automated follow-up sequences, deal stage progression tracking, and performance analytics. Perfect for sales teams looking to scale efficiently while maintaining personalized customer interactions. The system integrates seamlessly with your existing CRM and communication tools, providing real-time insights and automated workflows that increase conversion rates and reduce manual work.',
    price: 697,
    image: '/templates/sales-pipeline.jpg',
    platform: 'Make',
    category: 'Sales',
    features: [
      'Lead qualification scoring',
      'Automated follow-up sequences',
      'Deal stage progression',
      'Performance analytics',
      'CRM integration',
      'Email automation',
      'Task management',
      'Reporting dashboard'
    ],
    benefits: [
      '40% increase in qualified leads',
      '4+ hours saved per rep per week',
      'Improved lead response time',
      'Better conversion tracking',
      'Automated nurturing campaigns'
    ],
    integrations: ['HubSpot', 'Salesforce', 'Pipedrive', 'Gmail', 'Outlook', 'Slack', 'Teams'],
    metrics: {
      label: 'Increase in qualified leads',
      value: '40%'
    },
    setupTime: '2-3 days',
    complexity: 'Intermediate',
    popular: true,
    featured: true
  },
  {
    id: 'support-ticket-triage',
    name: 'Support Ticket Triage',
    description: 'AI-powered ticket classification and routing with auto-responses for common issues.',
    detailedDescription: 'Revolutionize your customer support with intelligent ticket triage that automatically classifies, prioritizes, and routes support requests. This template uses AI to analyze incoming tickets, determine urgency levels, and route them to the appropriate team members. It includes automated responses for common issues, escalation workflows for complex problems, and comprehensive analytics to track support performance and customer satisfaction.',
    price: 497,
    image: '/templates/support-triage.jpg',
    platform: 'n8n',
    category: 'Support',
    features: [
      'AI ticket classification',
      'Automatic priority assignment',
      'Smart routing rules',
      'Auto-responses for common issues',
      'Escalation workflows',
      'SLA monitoring',
      'Customer satisfaction tracking',
      'Performance analytics'
    ],
    benefits: [
      '65% faster first response',
      'Reduced support workload',
      'Improved customer satisfaction',
      'Better resource allocation',
      'Automated issue resolution'
    ],
    integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Slack', 'Teams', 'OpenAI', 'Gmail'],
    metrics: {
      label: 'Faster first response',
      value: '65%'
    },
    setupTime: '1-2 days',
    complexity: 'Beginner',
    popular: true,
    featured: false
  },
  {
    id: 'document-processing-hub',
    name: 'Document Processing Hub',
    description: 'Intelligent document extraction, validation, and routing for invoices, contracts, and forms.',
    detailedDescription: 'Streamline your document workflows with advanced OCR and AI-powered processing. This template automatically extracts data from invoices, contracts, forms, and other documents, validates the information against your business rules, and routes them through approval workflows. It includes intelligent data extraction, validation engines, automated filing systems, and comprehensive audit trails for compliance and tracking.',
    price: 597,
    image: '/templates/document-processing.jpg',
    platform: 'Make',
    category: 'Operations',
    features: [
      'OCR & data extraction',
      'Validation rules engine',
      'Approval workflows',
      'Automated filing',
      'Archive & search',
      'Audit trail',
      'Multi-format support',
      'Integration APIs'
    ],
    benefits: [
      '10x more documents processed',
      'Eliminated manual data entry',
      'Reduced processing errors',
      'Faster approval cycles',
      'Improved compliance tracking'
    ],
    integrations: ['Google Drive', 'Dropbox', 'SharePoint', 'DocuSign', 'Adobe Sign', 'QuickBooks'],
    metrics: {
      label: 'More documents processed',
      value: '10x'
    },
    setupTime: '3-4 days',
    complexity: 'Advanced',
    popular: false,
    featured: false
  },
  {
    id: 'ecommerce-order-automation',
    name: 'E-commerce Order Automation',
    description: 'Complete order processing automation from validation to fulfillment coordination.',
    detailedDescription: 'Automate your entire e-commerce order lifecycle with intelligent processing that handles everything from order validation to shipping coordination. This comprehensive template includes fraud detection, inventory management, payment processing, shipping label generation, and customer notifications. Perfect for growing online stores that need to scale their operations while maintaining accuracy and customer satisfaction.',
    price: 797,
    image: '/templates/ecommerce-orders.jpg',
    platform: 'Zapier',
    category: 'E-commerce',
    features: [
      'Order validation & fraud detection',
      'Inventory management sync',
      'Payment processing automation',
      'Shipping label generation',
      'Customer notifications',
      'Returns processing',
      'Analytics dashboard',
      'Multi-channel support'
    ],
    benefits: [
      '85% faster order processing',
      'Reduced manual errors',
      'Improved customer experience',
      'Better inventory control',
      'Automated fulfillment'
    ],
    integrations: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal', 'ShipStation', 'FedEx'],
    metrics: {
      label: 'Faster order processing',
      value: '85%'
    },
    setupTime: '2-3 days',
    complexity: 'Intermediate',
    popular: true,
    featured: false
  },
  {
    id: 'hr-recruitment-pipeline',
    name: 'HR Recruitment Pipeline',
    description: 'Streamline hiring with automated candidate screening, interview scheduling, and feedback collection.',
    detailedDescription: 'Transform your recruitment process with intelligent automation that handles candidate screening, interview coordination, and feedback management. This template includes resume parsing and scoring, automated candidate communication, interview scheduling with calendar integration, and comprehensive feedback collection systems. It helps HR teams manage high-volume hiring while maintaining quality and candidate experience.',
    price: 647,
    image: '/templates/hr-recruitment.jpg',
    platform: 'n8n',
    category: 'HR',
    features: [
      'Resume parsing & scoring',
      'Automated candidate screening',
      'Interview scheduling',
      'Feedback collection',
      'Candidate communication',
      'Pipeline tracking',
      'Reporting dashboard',
      'Compliance management'
    ],
    benefits: [
      '60% faster hiring process',
      'Improved candidate experience',
      'Better quality hires',
      'Reduced administrative work',
      'Standardized evaluation'
    ],
    integrations: ['BambooHR', 'Workday', 'Greenhouse', 'Lever', 'Calendly', 'Zoom', 'Teams'],
    metrics: {
      label: 'Faster hiring process',
      value: '60%'
    },
    setupTime: '2-3 days',
    complexity: 'Intermediate',
    popular: false,
    featured: false
  },
  {
    id: 'inventory-management-system',
    name: 'Inventory Management System',
    description: 'Automated inventory tracking with reorder alerts and supplier coordination.',
    detailedDescription: 'Streamline your inventory management with intelligent tracking and automated reordering. This template monitors stock levels across multiple locations, predicts demand patterns, generates reorder alerts, and coordinates with suppliers for seamless replenishment. It includes barcode scanning integration, demand forecasting, and comprehensive reporting for better inventory control and cost optimization.',
    price: 597,
    image: '/templates/inventory-management.jpg',
    platform: 'n8n',
    category: 'Operations',
    features: [
      'Real-time stock tracking',
      'Automated reorder alerts',
      'Demand forecasting',
      'Supplier coordination',
      'Barcode integration',
      'Multi-location support',
      'Cost optimization',
      'Reporting dashboard'
    ],
    benefits: [
      '75% reduction in stockouts',
      'Optimized carrying costs',
      'Improved supplier relationships',
      'Better demand planning',
      'Automated replenishment'
    ],
    integrations: ['SAP', 'Oracle', 'NetSuite', 'Shopify', 'WooCommerce', 'QuickBooks', 'Airtable'],
    metrics: {
      label: 'Reduction in stockouts',
      value: '75%'
    },
    setupTime: '3-4 days',
    complexity: 'Advanced',
    popular: false,
    featured: false
  }
]

export const platforms = ['All', 'Make', 'n8n', 'Zapier', 'Custom'] as const
export const categories = ['All', 'Sales', 'Support', 'HR', 'Finance', 'Marketing', 'Operations', 'E-commerce'] as const
