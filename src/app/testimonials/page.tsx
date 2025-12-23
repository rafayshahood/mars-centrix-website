import Link from 'next/link'
import { Star, Quote, ArrowRight, TrendingUp, Users, Clock, Shield } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Testimonials - Mars Centrix | Real Feedback',
  description: 'Read what our clients say about working with Mars Centrix. Real feedback from teams who\'ve implemented our AI automations and seen measurable results.',
}

export default function Testimonials() {
  return (
    <>


      {/* Interactive Testimonials Grid */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <p className="kicker">Client Feedback</p>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">What our clients are saying</h2>
            <p className="text-base text-text-soft max-w-2xl mx-auto">
              Real testimonials from teams who've experienced measurable transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial Card 1 */}
            <div className="group">
              <div className="card p-6 hover:scale-105 transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-primary fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-primary font-medium">5.0</span>
                </div>
                <p className="text-sm text-text-soft mb-4 leading-relaxed">
                  "The approach was different. They understood our actual workflow, not just what we thought we needed. The system feels native to our tools."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">AC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Alex Chen</div>
                    <div className="text-text-soft text-xs">CTO, DataSync Pro</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-soft">Time Saved</span>
                    <span className="text-primary font-semibold">60% weekly</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="group">
              <div className="card p-6 hover:scale-105 transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-primary fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-primary font-medium">5.0</span>
                </div>
                <p className="text-sm text-text-soft mb-4 leading-relaxed">
                  "Our team actually enjoys using the automation. It handles boring tasks so we focus on strategy and growth. Delivered exactly as promised."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">MR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Maria Rodriguez</div>
                    <div className="text-text-soft text-xs">Operations Manager, GrowthLab</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-soft">ROI Achieved</span>
                    <span className="text-primary font-semibold">3x in 6 months</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="group">
              <div className="card p-6 hover:scale-105 transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-primary fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-primary font-medium">5.0</span>
                </div>
                <p className="text-sm text-text-soft mb-4 leading-relaxed">
                  "Like having a technical co-founder who understands operations. They built what we needed, not what we asked for. 10x more efficient now."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">DK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">David Kim</div>
                    <div className="text-text-soft text-xs">Founder, SalesBoost</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-soft">Efficiency Gain</span>
                    <span className="text-primary font-semibold">10x improvement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 4 */}
            <div className="group">
              <div className="card p-6 hover:scale-105 transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-primary fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-primary font-medium">5.0</span>
                </div>
                <p className="text-sm text-text-soft mb-4 leading-relaxed">
                  "Incredible transparency. Every step documented, always knew what was happening. No black boxes, no surprises—just reliable automation."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">LT</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Lisa Thompson</div>
                    <div className="text-text-soft text-xs">VP Operations, SecureFlow</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-soft">Transparency</span>
                    <span className="text-primary font-semibold">100% clear</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 5 */}
            <div className="group">
              <div className="card p-6 hover:scale-105 transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-primary fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-primary font-medium">5.0</span>
                </div>
                <p className="text-sm text-text-soft mb-4 leading-relaxed">
                  "Automated invoice processing without disrupting our workflow. Seamless integration, team productive from day one. Highly recommend."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">JW</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">James Wilson</div>
                    <div className="text-text-soft text-xs">CFO, FinanceFirst</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-soft">Integration</span>
                    <span className="text-primary font-semibold">Seamless</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 6 */}
            <div className="group">
              <div className="card p-6 hover:scale-105 transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-primary fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-primary font-medium">5.0</span>
                </div>
                <p className="text-sm text-text-soft mb-4 leading-relaxed">
                  "Professional, reliable, and delivered exactly what they promised. Our sales team now focuses on closing deals instead of data entry."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">EK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Emily Kim</div>
                    <div className="text-text-soft text-xs">Head of Sales, CloudVenture</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-text-soft">Focus Shift</span>
                    <span className="text-primary font-semibold">Strategy first</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Dashboard */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="kicker">Proven Results</p>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">The numbers behind the success</h2>
            <p className="text-base text-text-soft max-w-2xl mx-auto">
              Measurable impact across every client implementation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group">
              <div className="card p-6 text-center hover:scale-105 transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">99.5%</div>
                <div className="font-semibold mb-2 text-sm">Client Satisfaction</div>
                <div className="text-text-soft text-xs">Post-implementation surveys</div>
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <div className="text-xs text-primary font-medium">50+ clients surveyed</div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="card p-6 text-center hover:scale-105 transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">75%</div>
                <div className="font-semibold mb-2 text-sm">Average Time Saved</div>
                <div className="text-text-soft text-xs">Reduction in manual tasks</div>
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <div className="text-xs text-primary font-medium">5+ hours weekly</div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="card p-6 text-center hover:scale-105 transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">2 Weeks</div>
                <div className="font-semibold mb-2 text-sm">Implementation Time</div>
                <div className="text-text-soft text-xs">Consultation to deployment</div>
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <div className="text-xs text-primary font-medium">Faster than industry</div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="card p-6 text-center hover:scale-105 transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="font-semibold mb-2 text-sm">Transparency Rate</div>
                <div className="text-text-soft text-xs">Full process visibility</div>
                <div className="mt-4 pt-4 border-t border-border-subtle">
                  <div className="text-xs text-primary font-medium">No black boxes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="card-featured p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>
                <span className="text-primary font-semibold text-sm">Join 50+ satisfied clients</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to transform your operations?
              </h2>
              <p className="text-text-soft mb-6 text-sm">
                Schedule a free consultation to see how we can build AI automations that actually work for your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="https://calendly.com/rafayshahoodtcs7/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary group">
                  <span>Schedule Free Consultation</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/work" className="btn btn-ghost">
                  View Our Work
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
