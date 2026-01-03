import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Zap, Shield, Users } from 'lucide-react'
import MediaCarousel from '@/components/ui/MediaCarousel'
import { Template, Package } from '@/lib/supabase'
import { getDirectImageUrl, getCategoryIcon } from '@/lib/utils'
import siteConfig from '@/config/site-config'

// Fetch homepage templates
async function getHomepageTemplates(): Promise<Template[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL ? 'http://localhost:3000' : ''}/api/templates?homepage=true`, {
      cache: 'no-store' // Always fetch fresh data
    })
    if (!response.ok) return []
    const data = await response.json()
    return data.templates || []
  } catch (error) {
    console.error('Failed to fetch homepage templates:', error)
    return []
  }
}

// Fetch homepage packages
async function getHomepagePackages(): Promise<Package[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL ? 'http://localhost:3000' : ''}/api/packages?homepage=true`, {
      cache: 'no-store' // Always fetch fresh data
    })
    if (!response.ok) return []
    const data = await response.json()
    return data.packages || []
  } catch (error) {
    console.error('Failed to fetch homepage packages:', error)
    return []
  }
}



export default async function Home() {
  // Fetch data from Supabase
  const [homepageTemplates, homepagePackages] = await Promise.all([
    getHomepageTemplates(),
    getHomepagePackages()
  ])
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-12 lg:py-14 overflow-hidden" id="top">
        <div className="gradient-orbit animate-pulse-slow"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-primary/20 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary/25 rounded-full animate-float-slow"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-10 items-center">
            {/* Hero Copy */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-primary">AI & Automation Agency</span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4 bg-gradient-to-r from-text via-text to-primary bg-clip-text text-transparent">
                Ready-to-deploy automation templates & custom AI solutions.
              </h1>
              
              <p className="text-base text-text-soft mb-6 max-w-lg leading-relaxed">
                Choose from our library of proven automation templates or get a custom AI solution built for your business. From plug-and-play workflows to enterprise-grade systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link href={siteConfig.links.freeConsultation} className="btn btn-primary group">
                  <span>Schedule Free Consultation</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/templates" className="btn btn-ghost">
                  Browse Templates
                </Link>
                <Link href="/packages" className="btn btn-outline">
                  View Packages
                </Link>
              </div>
              
              {/* Hero Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="group">
                  <div className="text-xl lg:text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">50+</div>
                  <div className="text-xs text-text-soft">Ready-to-deploy templates</div>
                </div>
                <div className="group">
                  <div className="text-xl lg:text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">2–6 weeks</div>
                  <div className="text-xs text-text-soft">Custom solution delivery</div>
                </div>
                <div className="group">
                  <div className="text-xl lg:text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">Free</div>
                  <div className="text-xs text-text-soft">Strategy consultation</div>
                </div>
              </div>
            </div>

            {/* Hero Panel */}
            <div className="space-y-4 animate-fade-in-up-delayed">
              {/* Primary Card */}
              <div className="card-featured p-5 hover:scale-105 transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <h2 className="text-lg font-bold">Mission Control Dashboard</h2>
                </div>
                <p className="text-text-soft mb-4 text-sm leading-relaxed">
                  Unified view of automations, exceptions, and impact across your stack.
                </p>
                <ul className="space-y-2 text-xs text-text-soft">
                  <li className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    LLM agents monitoring key workflows
                  </li>
                  <li className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Exception queues with human-in-the-loop
                  </li>
                  <li className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    ROI metrics per automation
                  </li>
                </ul>
              </div>
              
              {/* Mini Cards Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="card p-3 hover:scale-105 hover:border-primary/30 transition-all duration-300">
                  <h3 className="font-semibold text-sm mb-1">AI Playbooks</h3>
                  <p className="text-xs text-text-soft">Standardized flows for support, ops, and GTM teams.</p>
                </div>
                <div className="card p-3 hover:scale-105 hover:border-primary/30 transition-all duration-300">
                  <h3 className="font-semibold text-sm mb-1">Stack Integrations</h3>
                  <p className="text-xs text-text-soft">Connected to tools like Slack, HubSpot, Notion, and more.</p>
                </div>
                <div className="card p-3 hover:scale-105 hover:border-primary/30 transition-all duration-300">
                  <h3 className="font-semibold text-sm mb-1">Guardrails</h3>
                  <p className="text-xs text-text-soft">Policy, security, and compliance baked into every workflow.</p>
                </div>
                <div className="card p-3 hover:scale-105 hover:border-primary/30 transition-all duration-300">
                  <h3 className="font-semibold text-sm mb-1">Pilot to Scale</h3>
                  <p className="text-xs text-text-soft">Start with one workflow, expand across your organization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Slider */}
      <section className="py-6 bg-surface/50 border-y border-border-subtle overflow-hidden">
        <div className="container">
          <p className="text-center text-xs text-text-soft mb-4">Trusted integrations with industry-leading platforms</p>
          <div className="relative">
            <div className="flex animate-scroll space-x-12 items-center">
              {/* First set of logos */}
              <div className="flex space-x-12 items-center min-w-max">
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/airtable.svg" alt="Airtable" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Zapier.jpeg" alt="Zapier" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Slack.png" alt="Slack" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Notion.png" alt="Notion" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Google Sheets.svg" alt="Google Sheets" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/N8n.io_Logo_0.svg" alt="n8n" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Calendly.svg" alt="Calendly" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Fillout.png" alt="Fillout" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Go High Level.png" alt="Go High Level" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Google Calender.svg" alt="Google Calendar" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Google Drive.svg" alt="Google Drive" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Google.jpeg" alt="Google" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Hostinger.png" alt="Hostinger" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Jotform.svg" alt="Jotform" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Vapi.jpeg" alt="Vapi" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Zoom.svg" alt="Zoom" width={120} height={40} className="h-8 w-auto" />
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-12 items-center min-w-max">
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/airtable.svg" alt="Airtable" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Zapier.jpeg" alt="Zapier" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Slack.png" alt="Slack" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Notion.png" alt="Notion" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Google Sheets.svg" alt="Google Sheets" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/N8n.io_Logo_0.svg" alt="n8n" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Calendly.svg" alt="Calendly" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Fillout.png" alt="Fillout" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Go High Level.png" alt="Go High Level" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Google Calender.svg" alt="Google Calendar" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Google Drive.svg" alt="Google Drive" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Google.jpeg" alt="Google" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Hostinger.png" alt="Hostinger" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Jotform.svg" alt="Jotform" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Vapi.jpeg" alt="Vapi" width={120} height={40} className="h-8 w-auto" />
                </div>
                <div className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/logos/Zoom.svg" alt="Zoom" width={120} height={40} className="h-8 w-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="section" id="ready-to-deploy">
        <div className="container">
          <div className="section-header">
            <p className="kicker">Ready-to-Deploy</p>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">Automation Templates</h2>
            <p className="text-base text-text-soft max-w-2xl mx-auto">
              Skip the custom build time. Deploy proven automation workflows in days, not weeks.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {homepageTemplates.map((template) => {
              const IconComponent = getCategoryIcon(template.category)
              const imageUrl = getDirectImageUrl(template.image_url)
              
              return (
                <div key={template.id} className="group h-full">
                  <div className="card overflow-hidden hover:scale-105 transition-all duration-300 hover:border-primary/30 h-full flex flex-col">
                    {template.media && template.media.length > 0 ? (
                      <MediaCarousel 
                        media={template.media} 
                        showThumbnails={template.media.length > 1}
                        aspectRatio="video"
                        thumbnailPosition="overlay"
                        maxThumbnails={4}
                        className="relative"
                      />
                    ) : imageUrl ? (
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                        <Image 
                          src={imageUrl} 
                          alt={template.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-3 right-3 px-2 py-1 bg-primary text-white text-xs rounded-full">
                          Template
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                        <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                              <IconComponent className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-sm font-medium text-primary">{template.category} Workflow</div>
                            <div className="text-xs text-text-soft mt-1">Visual Template Preview</div>
                          </div>
                        </div>
                        <div className="absolute top-3 right-3 px-2 py-1 bg-primary text-white text-xs rounded-full">
                          Template
                        </div>
                      </div>
                    )}
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{template.name}</h3>
                      <p className="text-text-soft text-sm mb-4 flex-grow">{template.description}</p>
                      
                      <div className="mt-auto">
                        <div className="flex items-center justify-between text-xs text-text-soft mb-4">
                          <span>{template.setup_time} setup</span>
                          <span className="text-lg font-bold text-primary">${template.price}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {template.integrations.slice(0, 3).map((integration, index) => (
                            <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                              {integration}
                            </span>
                          ))}
                        </div>
                        
                        <Link href={`/templates/${template.id}`} className="btn btn-primary btn-full">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {homepageTemplates.length === 0 && (
            <div className="text-center py-8">
              <p className="text-text-soft">No templates are currently set to display on the homepage.</p>
            </div>
          )}

          <div className="text-center">
            <Link href="/templates" className="btn btn-ghost group">
              <span>Browse All Templates</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section section-alt" id="packages">
        <div className="container">
          <div className="section-header">
            <p className="kicker">Service Packages</p>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">Choose Your Automation Journey</h2>
            <p className="text-base text-text-soft max-w-2xl mx-auto">
              From quick wins to enterprise transformation. Pick the package that fits your automation needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {homepagePackages.map((pkg, index) => {
              const getPackageIcon = (name: string) => {
                if (name.toLowerCase().includes('starter')) return Zap
                if (name.toLowerCase().includes('professional')) return Shield
                if (name.toLowerCase().includes('enterprise')) return Users
                return Zap
              }
              
              const IconComponent = getPackageIcon(pkg.name)
              const isPopular = pkg.is_popular
              
              return (
                <div key={pkg.id} className={`${isPopular ? 'card-featured' : 'card'} p-6 hover:scale-105 transition-all duration-300 ${!isPopular ? 'hover:border-primary/30' : ''} relative h-full flex flex-col`}>
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-xs font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                    <p className="text-text-soft text-sm">{pkg.description}</p>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {pkg.price >= 10000 ? 'Custom' : `$${pkg.price.toLocaleString()}`}
                    </div>
                    <div className="text-text-soft text-sm">
                      {pkg.price >= 10000 ? 'Based on requirements' : 'One-time setup'}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6 text-sm flex-grow">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <Link href="/packages" className={`btn ${isPopular ? 'btn-primary' : 'btn-ghost'} btn-full`}>
                      {pkg.price >= 10000 ? 'Contact Sales' : 'Get Started'}
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {homepagePackages.length === 0 && (
            <div className="text-center py-8">
              <p className="text-text-soft">No packages are currently set to display on the homepage.</p>
            </div>
          )}
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="section section-alt" id="testimonials">
        <div className="container">
          <div className="section-header">
            <p className="kicker">Success Stories</p>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">Real results from real clients</h2>
            <p className="text-base text-text-soft max-w-2xl mx-auto">
              See how teams across industries have transformed their operations with our automation solutions.
            </p>
          </div>
          

          {/* Testimonial Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="card p-6 group hover:scale-105 transition-all duration-300 hover:border-primary/30">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-bold">MR</span>
                </div>
                <div>
                  <h4 className="font-semibold">Michael Rodriguez</h4>
                  <p className="text-text-soft text-sm">CEO, DataSync</p>
                </div>
              </div>
              <p className="text-text-soft text-sm mb-4 leading-relaxed">
                "ROI was visible within weeks. Our lead conversion improved by 40% and our team can focus on strategy instead of manual tasks."
              </p>
              <div className="flex items-center justify-between">
                <div className="flex text-primary text-sm">★★★★★</div>
                <div className="text-xs text-primary font-medium">+40% conversion</div>
              </div>
            </div>

            <div className="card p-6 group hover:scale-105 transition-all duration-300 hover:border-primary/30">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-bold">EK</span>
                </div>
                <div>
                  <h4 className="font-semibold">Emily Kim</h4>
                  <p className="text-text-soft text-sm">Head of Sales, CloudVenture</p>
                </div>
              </div>
              <p className="text-text-soft text-sm mb-4 leading-relaxed">
                "The automation handles our entire lead nurturing sequence. What used to take 5 hours per week now runs perfectly on autopilot."
              </p>
              <div className="flex items-center justify-between">
                <div className="flex text-primary text-sm">★★★★★</div>
                <div className="text-xs text-primary font-medium">5+ hrs saved/week</div>
              </div>
            </div>

            <div className="card p-6 group hover:scale-105 transition-all duration-300 hover:border-primary/30">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-bold">JL</span>
                </div>
                <div>
                  <h4 className="font-semibold">James Liu</h4>
                  <p className="text-text-soft text-sm">CTO, InnovateTech</p>
                </div>
              </div>
              <p className="text-text-soft text-sm mb-4 leading-relaxed">
                "Their approach to automation is methodical and reliable. Zero downtime in 6 months of operation."
              </p>
              <div className="flex items-center justify-between">
                <div className="flex text-primary text-sm">★★★★★</div>
                <div className="text-xs text-primary font-medium">100% uptime</div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="text-center p-6 bg-background/50 rounded-lg border border-border-subtle">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-xs text-text-soft">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">200+</div>
                <div className="text-xs text-text-soft">Workflows Automated</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">99.5%</div>
                <div className="text-xs text-text-soft">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">$2M+</div>
                <div className="text-xs text-text-soft">Time Savings Value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
