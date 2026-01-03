// ========================================
// MARS CENTRIX - CENTRAL CONFIGURATION
// ========================================
// Edit this file to update content across the entire website
// Changes here will automatically reflect everywhere

export const siteConfig = {
  // ========================================
  // WEBHOOK CONFIGURATION
  // ========================================
  webhook: {
    contactForm: 'https://n8n.srv1104211.hstgr.cloud/webhook-test/ca1222d2-7460-49d6-b25b-d40d7fb68c56',
    newsletter: 'https://n8n.srv1104211.hstgr.cloud/webhook-test/4712df69-c8db-4fd3-9168-04b831312437'
  },

  // ========================================
  // CONSULTATION LINKS
  // ========================================
  links: {
    freeConsultation: '/#meeting',
    strategyCall: '/#meeting',
    bookDemo: '/#meeting'
  },

  // ========================================
  // ABOUT PAGE CONTENT
  // ========================================
  about: {
    description: `Mars Centrix is a leading AI automation consultancy that helps businesses transform their operations through intelligent workflow automation. We specialize in creating custom solutions that save time, reduce costs, and eliminate repetitive tasks.

Our team of automation experts has successfully deployed over 500+ workflows across various industries, helping companies achieve 70% reduction in manual work and 3x faster processing times.

We believe that every business deserves access to powerful automation tools, regardless of size or technical expertise. That's why we've created ready-to-deploy templates and comprehensive packages that make automation accessible to everyone.`,

    mission: 'To democratize business automation by making AI-powered workflows accessible, affordable, and easy to implement for businesses of all sizes.',

    vision: 'A world where every business operates at peak efficiency through intelligent automation, allowing teams to focus on what truly matters - innovation and growth.',

    areasOfExpertise: [
      {
        title: 'Workflow Automation',
        description: 'End-to-end process automation using Make, n8n, and Zapier platforms'
      },
      {
        title: 'AI Integration',
        description: 'Seamless integration of AI tools and models into existing business processes'
      },
      {
        title: 'Data Processing',
        description: 'Automated data collection, processing, and analysis workflows'
      },
      {
        title: 'Customer Support',
        description: 'Intelligent chatbots, ticket routing, and automated response systems'
      },
      {
        title: 'Sales Automation',
        description: 'Lead scoring, nurturing campaigns, and CRM automation'
      },
      {
        title: 'Marketing Automation',
        description: 'Multi-channel campaigns, social media management, and analytics'
      }
    ]
  },

  // ========================================
  // TESTIMONIALS
  // ========================================
  testimonials: [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Mars Centrix transformed our customer support process completely. What used to take our team 8 hours daily now runs automatically in the background. The ROI was evident within the first month.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCorp',
      role: 'Operations Manager',
      content: 'The lead scoring automation they built for us increased our conversion rate by 45%. The team was professional, responsive, and delivered exactly what they promised.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Solutions Ltd',
      role: 'Marketing Director',
      content: 'Our social media management is now completely automated thanks to Mars Centrix. We\'ve saved 20 hours per week while increasing our engagement by 60%.',
      rating: 5
    },
    {
      name: 'David Thompson',
      company: 'InnovateLab',
      role: 'CTO',
      content: 'The custom automation workflows have revolutionized how we handle data processing. What used to be a manual nightmare is now seamless and error-free.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      company: 'ScaleUp Ventures',
      role: 'Founder',
      content: 'Mars Centrix didn\'t just deliver automation - they delivered a competitive advantage. Our operational efficiency has improved dramatically.',
      rating: 5
    },
    {
      name: 'James Miller',
      company: 'ProService Group',
      role: 'VP of Operations',
      content: 'The onboarding automation they created has reduced our client setup time from 3 days to 30 minutes. Absolutely game-changing for our business.',
      rating: 5
    }
  ],

  // ========================================
  // WORK/PORTFOLIO CONTENT
  // ========================================
  work: {
    heroTitle: 'Proven Results Across Industries',
    heroDescription: 'See how we\'ve helped businesses like yours achieve remarkable efficiency gains through intelligent automation.',
    
    caseStudies: [
      {
        title: 'E-commerce Order Processing Automation',
        client: 'RetailMax',
        industry: 'E-commerce',
        challenge: 'Manual order processing taking 4+ hours daily, frequent errors, delayed customer notifications',
        solution: 'Automated order processing workflow with inventory checks, payment verification, and customer notifications',
        results: [
          '90% reduction in processing time',
          '99.5% accuracy rate',
          'Real-time customer updates',
          '$50K annual savings'
        ],
        technologies: ['Zapier', 'Shopify', 'Gmail', 'Slack']
      },
      {
        title: 'Customer Support Ticket Triage',
        client: 'SupportPro',
        industry: 'SaaS',
        challenge: 'High volume of support tickets, inconsistent response times, agent burnout',
        solution: 'AI-powered ticket classification and routing system with automated responses',
        results: [
          '60% faster response times',
          '40% reduction in ticket volume',
          '95% customer satisfaction',
          '30% cost savings'
        ],
        technologies: ['Make', 'Zendesk', 'OpenAI', 'Slack']
      },
      {
        title: 'Lead Qualification & Nurturing',
        client: 'GrowthTech',
        industry: 'B2B Services',
        challenge: 'Low lead conversion rates, manual follow-up processes, missed opportunities',
        solution: 'Automated lead scoring, qualification, and multi-channel nurturing campaigns',
        results: [
          '45% increase in conversion rate',
          '3x faster lead response time',
          '70% reduction in manual work',
          '200% ROI in 6 months'
        ],
        technologies: ['HubSpot', 'n8n', 'Gmail', 'LinkedIn']
      }
    ],

    stats: [
      {
        number: '500+',
        label: 'Workflows Deployed'
      },
      {
        number: '70%',
        label: 'Average Time Savings'
      },
      {
        number: '99.5%',
        label: 'Uptime Guarantee'
      },
      {
        number: '50+',
        label: 'Happy Clients'
      }
    ]
  },

  // ========================================
  // CONTACT INFORMATION
  // ========================================
  contact: {
    email: 'rafayshahood@marscentrix.com',
    phone: '+1 (555) 123-4567',
    address: 'Worldwide',
    businessHours: 'Mon-Fri, 9AM-6PM EST'
  },

  // ========================================
  // SOCIAL MEDIA LINKS
  // ========================================
  social: {
    linkedin: 'https://linkedin.com/company/marscentrix',
    twitter: 'https://twitter.com/marscentrix',
    github: 'https://github.com/marscentrix'
  }
}

export default siteConfig
