import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Zap, Shield, Users } from 'lucide-react'

export default function Home() {
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
                Launch AI systems that don't crash your workflow.
              </h1>
              
              <p className="text-base text-text-soft mb-6 max-w-lg leading-relaxed">
                Mars Centrix helps teams design, build, and deploy AI-powered automations
                that cut busywork, not corners. From strategy to production, we turn
                chaotic processes into reliable, self-orbiting systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link href="https://calendly.com/rafayshahoodtcs7/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary group">
                  <span>Schedule strategy call</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#ready-to-deploy" className="btn btn-ghost">
                  Explore services
                </Link>
              </div>
              
              {/* Hero Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="group">
                  <div className="text-xl lg:text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">30–60%</div>
                  <div className="text-xs text-text-soft">Average reduction in manual ops time</div>
                </div>
                <div className="group">
                  <div className="text-xl lg:text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">2–6 weeks</div>
                  <div className="text-xs text-text-soft">Typical time to first live automation</div>
                </div>
                <div className="group">
                  <div className="text-xl lg:text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">99.5%</div>
                  <div className="text-xs text-text-soft">Target reliability for critical workflows</div>
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
            {/* Template 1 */}
            <div className="group h-full">
              <div className="card overflow-hidden hover:scale-105 transition-all duration-300 hover:border-primary/30 h-full flex flex-col">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                  <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-sm font-medium text-primary">Support Workflow</div>
                      <div className="text-xs text-text-soft mt-1">Visual Template Preview</div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 bg-primary text-white text-xs rounded-full">
                    Template
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Support Ticket Triage</h3>
                  <p className="text-text-soft text-sm mb-4">AI-powered ticket classification and routing with auto-responses for common issues.</p>
                  
                  <div className="flex items-center justify-between text-xs text-text-soft mb-4">
                    <span>65% faster response</span>
                    <span className="text-lg font-bold text-primary">$497</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Zendesk</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">OpenAI</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Slack</span>
                  </div>
                  
                  <Link href="/templates/support-ticket-triage" className="btn btn-primary btn-full">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Template 2 */}
            <div className="group h-full">
              <div className="card overflow-hidden hover:scale-105 transition-all duration-300 hover:border-primary/30 h-full flex flex-col">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                  <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-sm font-medium text-primary">Sales Workflow</div>
                      <div className="text-xs text-text-soft mt-1">Visual Template Preview</div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 bg-primary text-white text-xs rounded-full">
                    Template
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Lead Scoring & Nurturing</h3>
                  <p className="text-text-soft text-sm mb-4">Automated lead qualification and personalized follow-up sequences.</p>
                  
                  <div className="flex items-center justify-between text-xs text-text-soft mb-4">
                    <span>40% higher conversion</span>
                    <span className="text-lg font-bold text-primary">$697</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">HubSpot</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Zapier</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Gmail</span>
                  </div>
                  
                  <Link href="/templates/sales-pipeline-automation" className="btn btn-primary btn-full">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Template 3 */}
            <div className="group h-full">
              <div className="card overflow-hidden hover:scale-105 transition-all duration-300 hover:border-primary/30 h-full flex flex-col">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                  <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-sm font-medium text-primary">Document Workflow</div>
                      <div className="text-xs text-text-soft mt-1">Visual Template Preview</div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 bg-primary text-white text-xs rounded-full">
                    Template
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Document Processing Hub</h3>
                  <p className="text-text-soft text-sm mb-4">Intelligent document extraction, validation and routing automation.</p>
                  
                  <div className="flex items-center justify-between text-xs text-text-soft mb-4">
                    <span>10x faster processing</span>
                    <span className="text-lg font-bold text-primary">$597</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Google Drive</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Airtable</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Notion</span>
                  </div>
                  
                  <Link href="/templates/document-processing-hub" className="btn btn-primary btn-full">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

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
            {/* Starter Package */}
            <div className="card p-6 hover:scale-105 transition-all duration-300 hover:border-primary/30">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Starter</h3>
                <p className="text-text-soft text-sm">Perfect for small teams getting started with automation</p>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">$2,997</div>
                <div className="text-text-soft text-sm">One-time setup</div>
              </div>
              
              <ul className="space-y-3 mb-6 text-sm">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>1-2 automation workflows</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Basic integrations setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>30 days support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Documentation & training</span>
                </li>
              </ul>
              
              <Link href="/packages" className="btn btn-ghost btn-full">
                Get Started
              </Link>
            </div>

            {/* Professional Package */}
            <div className="card-featured p-6 hover:scale-105 transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional</h3>
                <p className="text-text-soft text-sm">Comprehensive automation for growing businesses</p>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">$7,997</div>
                <div className="text-text-soft text-sm">One-time setup</div>
              </div>
              
              <ul className="space-y-3 mb-6 text-sm">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>3-5 automation workflows</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Advanced integrations & AI</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>90 days support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Custom dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Team training sessions</span>
                </li>
              </ul>
              
              <Link href="/packages" className="btn btn-primary btn-full">
                Get Started
              </Link>
            </div>

            {/* Enterprise Package */}
            <div className="card p-6 hover:scale-105 transition-all duration-300 hover:border-primary/30">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                <p className="text-text-soft text-sm">Full-scale automation transformation</p>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary mb-2">Custom</div>
                <div className="text-text-soft text-sm">Based on requirements</div>
              </div>
              
              <ul className="space-y-3 mb-6 text-sm">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Unlimited workflows</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Enterprise integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Custom development</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>SLA guarantees</span>
                </li>
              </ul>
              
              <Link href="/packages" className="btn btn-ghost btn-full">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" id="about">
        <div className="container">
          <div className="text-center mb-8">
            <p className="kicker">Why Mars Centrix</p>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 max-w-4xl mx-auto">
              AI automation that fits your workflow, not the other way around.
            </h2>
            <p className="text-base text-text-soft max-w-3xl mx-auto">
              Most AI implementations fail because they're built by people who've never actually used the tools they're trying to automate. 
              We're different. Every system we build includes clear human oversight, transparent decision-making, and graceful failure modes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 mb-8">
            <div className="card p-5 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Transparent & Auditable</h3>
              <p className="text-text-soft text-sm">Every decision point is logged and reviewable. No black boxes, ever. Full visibility into how your automations make decisions.</p>
            </div>

            <div className="card p-5 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Human-First Design</h3>
              <p className="text-text-soft text-sm">AI amplifies your team's capabilities rather than replacing them. Built with clear intervention points and human oversight.</p>
            </div>

            <div className="card p-5 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Real-World Integration</h3>
              <p className="text-text-soft text-sm">Works with your existing tools and processes from day one. No need to change your entire workflow to accommodate AI.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Custom Projects Section */}
      <section className="section" id="projects">
        <div className="container">
          <div className="section-header">
            <p className="kicker">Our Work</p>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">Custom projects that deliver results.</h2>
            <p className="text-base text-text-soft max-w-2xl mx-auto">
              Real automation projects we've built for companies across industries. Each solution is tailored to specific workflows and business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="group">
              <div className="card p-6 hover:scale-105 transition-all duration-300 hover:border-primary/30">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-sm font-medium text-primary">E-commerce Automation</div>
                  </div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Order Processing Pipeline</h3>
                <p className="text-text-soft text-sm mb-4">Automated order validation, inventory sync, and fulfillment coordination for a $2M+ e-commerce store.</p>
                
                <div className="flex items-center justify-between text-xs text-text-soft mb-4">
                  <span>85% faster processing</span>
                  <span>99.2% accuracy</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Shopify</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Zapier</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Slack</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group">
              <div className="card p-6 hover:scale-105 transition-all duration-300 hover:border-primary/30">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-sm font-medium text-primary">Support Automation</div>
                  </div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">AI Support Triage System</h3>
                <p className="text-text-soft text-sm mb-4">Intelligent ticket routing and auto-responses that reduced support team workload by 60%.</p>
                
                <div className="flex items-center justify-between text-xs text-text-soft mb-4">
                  <span>60% less manual work</span>
                  <span>4x faster response</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Zendesk</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">OpenAI</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Teams</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group">
              <div className="card p-6 hover:scale-105 transition-all duration-300 hover:border-primary/30">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-sm font-medium text-primary">Sales Automation</div>
                  </div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">Lead Scoring & Nurturing</h3>
                <p className="text-text-soft text-sm mb-4">Automated lead qualification and personalized follow-up sequences that increased conversion by 40%.</p>
                
                <div className="flex items-center justify-between text-xs text-text-soft mb-4">
                  <span>40% higher conversion</span>
                  <span>5+ hours saved/week</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">HubSpot</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Zapier</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Gmail</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/work" className="btn btn-primary group">
              <span>View All Projects</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
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
