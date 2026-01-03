# Content Management Guide

## 📝 How to Update Website Content

All frequently changing content is now centralized in one file: `src/config/site-config.ts`

### 🔧 Quick Updates

#### Change Webhook URL
```typescript
webhook: {
  contactForm: 'YOUR_NEW_WEBHOOK_URL_HERE'
}
```

#### Update Consultation Links
```typescript
links: {
  freeConsultation: '/new-consultation-link',
  strategyCall: '/strategy-session',
  bookDemo: '/book-demo'
}
```

#### Update Contact Information
```typescript
contact: {
  email: 'rafayshahood@marscentrix.com',
  phone: '+1 (555) 999-8888',
  address: 'New address here',
  businessHours: 'Mon-Fri, 8AM-7PM EST'
}
```

#### Add/Edit Testimonials
```typescript
testimonials: [
  {
    name: 'New Customer',
    company: 'Amazing Corp',
    role: 'CEO',
    content: 'Mars Centrix is fantastic!',
    rating: 5
  }
  // Add more testimonials here
]
```

#### Update About Content
```typescript
about: {
  description: 'New company description here...',
  mission: 'New mission statement...',
  vision: 'New vision statement...',
  areasOfExpertise: [
    {
      title: 'New Expertise Area',
      description: 'Description of new expertise'
    }
    // Add more areas here
  ]
}
```

#### Update Work/Portfolio Content
```typescript
work: {
  heroTitle: 'New portfolio title',
  heroDescription: 'New portfolio description',
  caseStudies: [
    {
      title: 'New Case Study',
      client: 'Client Name',
      industry: 'Industry',
      challenge: 'What was the problem?',
      solution: 'How did you solve it?',
      results: [
        'Result 1',
        'Result 2'
      ],
      technologies: ['Tech1', 'Tech2']
    }
  ]
}
```

### ✅ What Updates Automatically

When you change the config file, these will update across the entire website:

- **Contact Form**: Webhook URL, contact information
- **All Consultation Buttons**: Free consultation, strategy call, demo links
- **About Page**: Description, mission, vision, expertise areas
- **Testimonials**: All testimonial content and ratings
- **Work Page**: Case studies, stats, portfolio content
- **Footer**: Contact info, social links

### 🚀 No Code Changes Needed

You never need to edit multiple files or touch any React components. Just update the config file and save - changes appear everywhere automatically!

### 📍 File Location

The config file is located at:
```
src/config/site-config.ts
```

This is the ONLY file you need to edit for content changes.
