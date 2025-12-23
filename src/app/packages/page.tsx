import Link from 'next/link'
import { ArrowRight, CheckCircle, Building, Briefcase, Factory, Heart, DollarSign, Gavel } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Packages - Mars Centrix | Tailored AI Automation Solutions',
  description: 'Explore our custom automation packages designed for your specific industry and business needs. From consultation to deployment, we handle the entire workflow transformation.',
}

export default function Packages() {
  return (
    <>

      {/* Packages Grid */}
      <section className="section" id="packages-grid">
        <div className="container">
          <div className="section-header">
            <p className="kicker">Choose Your Package</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Solutions that scale with your business.</h2>
            <p className="text-text-soft">
              Each package includes end-to-end implementation, training, and ongoing support to ensure your team gets maximum value.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Starter Package</h3>
                <div className="text-4xl font-bold text-primary mb-4">$2,997</div>
              </div>
              
              <p className="text-text-soft text-center mb-6">
                Perfect for small businesses looking to automate their first workflow and see immediate ROI. 
                Get started with AI automation without the complexity.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">What's Included</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">1 custom workflow automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">Up to 3 tool integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">Basic monitoring dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">2 weeks implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">1 month support included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">Training for up to 5 team members</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="p-3 bg-surface rounded-lg border border-border-subtle">
                  <div className="text-sm font-medium text-text">Ideal for:</div>
                  <div className="text-xs text-text-soft">Small teams, single department automation, first-time AI adopters</div>
                </div>
                <div className="p-3 bg-surface rounded-lg border border-border-subtle">
                  <div className="text-sm font-medium text-text">Timeline:</div>
                  <div className="text-xs text-text-soft">2-3 weeks from kickoff to deployment</div>
                </div>
              </div>
              
              <Link href="/#meeting" className="btn btn-primary btn-full">
                Get Started
              </Link>
            </div>

            {/* Growth Package - Featured */}
            <div className="card-featured">
              <div className="text-center mb-6">
                <div className="inline-block px-3 py-1 text-sm bg-primary text-primary-foreground rounded-full mb-3">Most Popular</div>
                <h3 className="text-2xl font-bold mb-2">Growth Package</h3>
                <div className="text-4xl font-bold text-primary mb-4">$7,997</div>
              </div>
              
              <p className="text-text-soft text-center mb-6">
                Comprehensive automation suite for growing companies ready to scale their operations efficiently. 
                Multiple interconnected workflows with advanced analytics.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">What's Included</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">3-5 interconnected workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">Unlimited tool integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">6 weeks implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">3 months support included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">Training for unlimited team members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">Custom dashboard development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">Performance optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="p-3 bg-background/50 rounded-lg border border-border-subtle">
                  <div className="text-sm font-medium text-text">Ideal for:</div>
                  <div className="text-xs text-text-soft">Growing companies, multi-department automation, scaling operations</div>
                </div>
                <div className="p-3 bg-background/50 rounded-lg border border-border-subtle">
                  <div className="text-sm font-medium text-text">Timeline:</div>
                  <div className="text-xs text-text-soft">6-8 weeks from kickoff to full deployment</div>
                </div>
              </div>
              
              <Link href="/#meeting" className="btn btn-primary btn-full">
                Get Started
              </Link>
            </div>

            {/* Enterprise Package */}
            <div className="card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Enterprise Package</h3>
                <div className="text-4xl font-bold text-primary mb-4">$19,997</div>
              </div>
              
              <p className="text-text-soft text-center mb-6">
                Complete automation transformation for large organizations. Enterprise-grade security, compliance, 
                and scalability with dedicated support team.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">What's Included</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">10+ custom workflow automations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">Enterprise integrations & APIs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">Advanced security & compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">12 weeks implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">6 months support included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">Dedicated success manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">Custom training program</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">24/7 monitoring & support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-soft">Quarterly optimization reviews</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="p-3 bg-surface rounded-lg border border-border-subtle">
                  <div className="text-sm font-medium text-text">Ideal for:</div>
                  <div className="text-xs text-text-soft">Large enterprises, complex workflows, mission-critical automation</div>
                </div>
                <div className="p-3 bg-surface rounded-lg border border-border-subtle">
                  <div className="text-sm font-medium text-text">Timeline:</div>
                  <div className="text-xs text-text-soft">12-16 weeks from kickoff to enterprise deployment</div>
                </div>
              </div>
              
              <Link href="/#meeting" className="btn btn-primary btn-full">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <p className="kicker">Industry Expertise</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Specialized solutions for your industry.</h2>
            <p className="text-text-soft">We understand the unique challenges and requirements of different industries.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">SaaS & Technology</h3>
              <p className="text-text-soft text-sm mb-4">
                Customer onboarding, support automation, and growth analytics for scaling tech companies.
              </p>
              <ul className="space-y-2 text-sm text-text-soft">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Customer success automation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Product usage analytics
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Support ticket routing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Churn prediction
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">E-commerce & Retail</h3>
              <p className="text-text-soft text-sm mb-4">
                Order processing, inventory management, and customer service automation for online retailers.
              </p>
              <ul className="space-y-2 text-sm text-text-soft">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Order fulfillment automation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Inventory optimization
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Customer service bots
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Marketing automation
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Gavel className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Legal & Professional Services</h3>
              <p className="text-text-soft text-sm mb-4">
                Document processing, client intake, and case management automation for law firms and consultancies.
              </p>
              <ul className="space-y-2 text-sm text-text-soft">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Document review automation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Client intake processing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Billing automation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Compliance monitoring
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Healthcare & Life Sciences</h3>
              <p className="text-text-soft text-sm mb-4">
                Patient data processing, appointment scheduling, and regulatory compliance automation.
              </p>
              <ul className="space-y-2 text-sm text-text-soft">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Patient intake automation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Appointment scheduling
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Insurance processing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Compliance reporting
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Factory className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Manufacturing & Supply Chain</h3>
              <p className="text-text-soft text-sm mb-4">
                Production planning, quality control, and supply chain optimization automation.
              </p>
              <ul className="space-y-2 text-sm text-text-soft">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Production scheduling
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Quality control automation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Supply chain optimization
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Maintenance scheduling
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Financial Services</h3>
              <p className="text-text-soft text-sm mb-4">
                Risk assessment, compliance reporting, and customer onboarding automation for financial institutions.
              </p>
              <ul className="space-y-2 text-sm text-text-soft">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Risk assessment automation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Compliance reporting
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Customer onboarding
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  Fraud detection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to transform your workflows?
            </h2>
            <p className="text-text-soft mb-8">
              Schedule a free consultation to discuss your specific needs and find the perfect automation package for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#meeting" className="btn btn-primary">
                Schedule Free Consultation
              </Link>
              <Link href="/work" className="btn btn-ghost">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
