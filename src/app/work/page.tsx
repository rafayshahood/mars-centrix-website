import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Clock, Users, Zap, Shield, Target, BarChart3, Briefcase, Building2, Scale, DollarSign } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work - Mars Centrix | AI Automation Case Studies',
  description: 'Explore real automation projects by Mars Centrix. See how we\'ve helped companies across industries build AI systems that actually work in production.',
}

export default function Work() {
  return (
    <>

      {/* Industry Filter */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="kicker">Case Studies</p>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">Projects across industries</h2>
            <p className="text-base text-text-soft max-w-2xl mx-auto">
              Each automation represents a unique challenge solved with practical AI solutions.
            </p>
          </div>

          
          {/* Featured Project */}
          <div className="mb-12">
            <div className="card-featured p-8 lg:p-12 relative overflow-hidden group">
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Briefcase className="h-16 w-16 text-primary" />
              </div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full font-medium">Featured Case</span>
                      <span className="px-3 py-1 text-sm bg-surface border border-border-subtle rounded-full">E-commerce</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">Order Processing Automation</h3>
                    <p className="text-text-soft">10,000+ orders monthly • 99.2% accuracy • 85% faster processing</p>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8 mb-8">
                  <div className="lg:col-span-2">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Target className="h-4 w-4 text-primary" />
                          The Challenge
                        </h4>
                        <p className="text-text-soft text-sm leading-relaxed">
                          Growing online retailer processing 10,000+ orders monthly with manual validation requiring 3 full-time staff and 15% error rate.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Zap className="h-4 w-4 text-primary" />
                          Our Solution
                        </h4>
                        <p className="text-text-soft text-sm leading-relaxed">
                          Intelligent system that validates orders, checks inventory across warehouses, and coordinates shipping with human oversight for edge cases.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Shopify API</span>
                      <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Zapier</span>
                      <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Custom AI Logic</span>
                      <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">Slack Integration</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="card p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">85%</div>
                      <div className="text-xs text-text-soft">Faster Processing</div>
                    </div>
                    <div className="card p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">99.2%</div>
                      <div className="text-xs text-text-soft">Accuracy Rate</div>
                    </div>
                    <div className="card p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">3</div>
                      <div className="text-xs text-text-soft">Staff Reallocated</div>
                    </div>
                    <div className="card p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">$120k</div>
                      <div className="text-xs text-text-soft">Annual Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="group h-full">
              <div className="bg-gradient-to-br from-surface to-background border border-border-subtle rounded-xl p-8 hover:shadow-xl transition-all duration-500 hover:border-primary/40 relative overflow-hidden h-full flex flex-col">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                        <Scale className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium">Legal</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-text-soft font-medium">Active</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Document Review AI</h3>
                  <p className="text-text-soft text-sm mb-6 leading-relaxed">
                    Automated contract analysis and risk assessment system for a mid-size law firm, reducing manual review time by 70% while maintaining 100% audit trail compliance.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-background/50 rounded-lg p-4 text-center border border-border-subtle">
                      <div className="text-2xl font-bold text-primary mb-1">70%</div>
                      <div className="text-xs text-text-soft">Time Reduction</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 text-center border border-border-subtle">
                      <div className="text-2xl font-bold text-primary mb-1">100%</div>
                      <div className="text-xs text-text-soft">Audit Trail</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full border border-primary/20">OpenAI API</span>
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full border border-primary/20">Custom NLP</span>
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full border border-primary/20">Document Parser</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                    <span className="text-sm text-text-soft">Weekly Impact</span>
                    <span className="text-sm font-semibold text-primary">40 hours saved</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group h-full">
              <div className="bg-gradient-to-br from-surface to-background border border-border-subtle rounded-xl p-8 hover:shadow-xl transition-all duration-500 hover:border-primary/40 relative overflow-hidden h-full flex flex-col">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium">SaaS</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-text-soft font-medium">Active</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Support Triage System</h3>
                  <p className="text-text-soft text-sm mb-6 leading-relaxed">
                    Intelligent ticket routing system for SaaS company processing 500+ daily support tickets with automated priority assignment and sentiment analysis.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-background/50 rounded-lg p-4 text-center border border-border-subtle">
                      <div className="text-2xl font-bold text-primary mb-1">60%</div>
                      <div className="text-xs text-text-soft">Faster Response</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 text-center border border-border-subtle">
                      <div className="text-2xl font-bold text-primary mb-1">95%</div>
                      <div className="text-xs text-text-soft">Accuracy Rate</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full border border-primary/20">Zendesk API</span>
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full border border-primary/20">Machine Learning</span>
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full border border-primary/20">Sentiment Analysis</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                    <span className="text-sm text-text-soft">Daily Volume</span>
                    <span className="text-sm font-semibold text-primary">500+ tickets</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group">
              <div className="bg-gradient-to-br from-surface to-background border border-border-subtle rounded-xl p-8 hover:shadow-xl transition-all duration-500 hover:border-primary/40 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium">Sales</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-text-soft font-medium">Active</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Lead Qualification Engine</h3>
                  <p className="text-text-soft text-sm mb-6 leading-relaxed">
                    Intelligent lead scoring system with automated routing and data enrichment for B2B sales team, increasing conversion rates by 40%.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-background/50 rounded-lg p-4 text-center border border-border-subtle">
                      <div className="text-2xl font-bold text-primary mb-1">10x</div>
                      <div className="text-xs text-text-soft">Efficiency Gain</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 text-center border border-border-subtle">
                      <div className="text-2xl font-bold text-primary mb-1">40%</div>
                      <div className="text-xs text-text-soft">Higher Conversion</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full border border-primary/20">HubSpot CRM</span>
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full border border-primary/20">Clearbit API</span>
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full border border-primary/20">Custom Scoring</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                    <span className="text-sm text-text-soft">ROI Increase</span>
                    <span className="text-sm font-semibold text-primary">300% growth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="group">
              <div className="bg-gradient-to-br from-surface to-background border border-border-subtle rounded-xl p-8 hover:shadow-xl transition-all duration-500 hover:border-primary/40 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                        <BarChart3 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium">Finance</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-text-soft font-medium">Active</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Financial Report Automation</h3>
                  <p className="text-text-soft text-sm mb-6 leading-relaxed">
                    Automated financial reporting pipeline that pulls data from 8 different systems, generates visualizations, and distributes reports to stakeholders.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-background/50 rounded-lg p-4 text-center border border-border-subtle">
                      <div className="text-2xl font-bold text-primary mb-1">90%</div>
                      <div className="text-xs text-text-soft">Time Saved</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 text-center border border-border-subtle">
                      <div className="text-2xl font-bold text-primary mb-1">0</div>
                      <div className="text-xs text-text-soft">Manual Errors</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full border border-primary/20">Google Sheets</span>
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full border border-primary/20">QuickBooks</span>
                    <span className="px-3 py-1 text-xs bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full border border-primary/20">Auto Scheduling</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                    <span className="text-sm text-text-soft">Frequency</span>
                    <span className="text-sm font-semibold text-primary">Weekly automated</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <p className="kicker">Our Methodology</p>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">How we deliver results</h2>
            <p className="text-base text-text-soft max-w-2xl mx-auto">
              Every project follows our proven methodology for building practical AI automations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group">
              <div className="card p-6 text-center hover:scale-105 transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-sm">01</span>
                </div>
                <h3 className="text-base font-semibold mb-3">Discovery & Analysis</h3>
                <p className="text-text-soft text-xs leading-relaxed">
                  Deep dive into your actual workflow, shadow your team, and identify real pain points—not just what you think needs automation.
                </p>
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <div className="text-xs text-primary font-medium">1-2 weeks</div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="card p-6 text-center hover:scale-105 transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-sm">02</span>
                </div>
                <h3 className="text-base font-semibold mb-3">Design & Planning</h3>
                <p className="text-text-soft text-xs leading-relaxed">
                  Create detailed automation blueprints with clear success metrics, failure modes, and human oversight points. No black boxes.
                </p>
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <div className="text-xs text-primary font-medium">3-5 days</div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="card p-6 text-center hover:scale-105 transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-sm">03</span>
                </div>
                <h3 className="text-base font-semibold mb-3">Build & Test</h3>
                <p className="text-text-soft text-xs leading-relaxed">
                  Develop automation in stages with continuous testing and feedback. Every component is transparent and auditable.
                </p>
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <div className="text-xs text-primary font-medium">1-3 weeks</div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="card p-6 text-center hover:scale-105 transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-sm">04</span>
                </div>
                <h3 className="text-base font-semibold mb-3">Deploy & Monitor</h3>
                <p className="text-text-soft text-xs leading-relaxed">
                  Launch with comprehensive monitoring, team training, and ongoing support. Ensure smooth adoption and continuous improvement.
                </p>
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <div className="text-xs text-primary font-medium">Ongoing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="card-featured p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-primary/30 rounded-full animate-pulse delay-200"></div>
                </div>
                <span className="text-primary font-semibold text-sm">Ready to get started?</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Let's automate your workflow
              </h2>
              <p className="text-text-soft mb-6 text-sm">
                Schedule a free consultation to discuss your specific challenges and see how we can build AI automations that actually work for your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="https://calendly.com/rafayshahoodtcs7/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary group">
                  <span>Schedule Free Consultation</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/testimonials" className="btn btn-ghost">
                  Read Client Stories
                </Link>
              </div>
              <div className="mt-6 text-xs text-text-soft">
                ✓ No commitment required  ✓ 30-minute strategy session  ✓ Custom automation roadmap
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
