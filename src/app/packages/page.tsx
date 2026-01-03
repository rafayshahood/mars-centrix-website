import Link from 'next/link'
import { ArrowRight, CheckCircle, Building, Briefcase, Factory, Heart, DollarSign, Gavel } from 'lucide-react'
import type { Metadata } from 'next'
import { Package } from '@/lib/supabase'
import siteConfig from '@/config/site-config'

export const metadata: Metadata = {
  title: 'Custom Packages - Mars Centrix | Tailored AI Automation Solutions',
  description: 'Explore our custom automation packages designed for your specific industry and business needs. From consultation to deployment, we handle the entire workflow transformation.',
}

// Fetch packages from Supabase
async function getPackages(): Promise<Package[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL ? 'http://localhost:3000' : ''}/api/packages`, {
      cache: 'no-store' // Always fetch fresh data
    })
    if (!response.ok) return []
    const data = await response.json()
    return data.packages || []
  } catch (error) {
    console.error('Error fetching packages:', error)
    return []
  }
}

export default async function Packages() {
  const packages = await getPackages()

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
          
          {packages.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-soft">No packages available at the moment.</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div key={pkg.id} className={`${pkg.is_popular ? 'card-featured' : 'card'} h-full flex flex-col`}>
                  <div className="text-center mb-6">
                    {pkg.is_popular && (
                      <div className="inline-block px-3 py-1 text-sm bg-primary text-primary-foreground rounded-full mb-3">Most Popular</div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-4">${pkg.price.toLocaleString()}</div>
                  </div>
                  
                  <p className="text-text-soft text-center mb-6 flex-grow">
                    {pkg.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">What's Included</h4>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-text-soft">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link href={siteConfig.links.freeConsultation} className="btn btn-primary btn-full">
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
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
              <Link href={siteConfig.links.freeConsultation} className="btn btn-primary">
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
