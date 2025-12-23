import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Target, Users, Lightbulb, Shield } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Mars Centrix | Meet the Founder',
  description: 'Learn about Rafay, the founder of Mars Centrix, and his mission to build AI systems that actually work in the real world.',
}

export default function About() {
  return (
    <>

      {/* Meet the Founder Section */}
      <section className="section" id="founder">
        <div className="container">
          <div className="section-header">
            <p className="kicker">Meet the Founder</p>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">The person behind Mars Centrix</h2>
            <p className="text-base text-text-soft max-w-2xl mx-auto">
              Passionate about making AI accessible and practical for businesses of all sizes.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card-featured p-6 lg:p-8">
              <div className="grid lg:grid-cols-3 gap-6 items-start">
                <div className="text-center lg:text-left">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto lg:mx-0 mb-4 border-2 border-primary/20">
                    <Image
                      src="/about.jpeg"
                      alt="Muhammad Abdul Rafay Shahood - Founder & CEO"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Muhammad Abdul Rafay Shahood</h3>
                  <p className="text-primary font-semibold mb-3">Founder & CEO</p>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="space-y-3 mb-6">
                    <p className="text-text-soft text-sm">
                      I started my journey in tech as a product manager at various startups, where I witnessed 
                      firsthand the gap between AI's potential and its practical implementation. Too often, 
                      I saw brilliant technology fail because it wasn't designed with real workflows in mind.
                    </p>
                    <p className="text-text-soft text-sm">
                      This frustration led me to found Mars Centrix with a simple mission: build AI systems 
                      that actually work in the real world. I believe technology should amplify human capability, 
                      not replace it, and every solution should be transparent, secure, and genuinely useful.
                    </p>
                    <p className="text-text-soft text-sm">
                      When I'm not building automations, I'm constantly learning about new AI developments 
                      and finding ways to make them practical for everyday business challenges.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-base font-semibold mb-3">Areas of Expertise</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-xs text-text-soft p-2 bg-background/50 rounded-lg border border-border-subtle">
                        AI Strategy & Implementation
                      </div>
                      <div className="text-xs text-text-soft p-2 bg-background/50 rounded-lg border border-border-subtle">
                        Workflow Automation
                      </div>
                      <div className="text-xs text-text-soft p-2 bg-background/50 rounded-lg border border-border-subtle">
                        Product Management
                      </div>
                      <div className="text-xs text-text-soft p-2 bg-background/50 rounded-lg border border-border-subtle">
                        Business Operations
                      </div>
                      <div className="text-xs text-text-soft p-2 bg-background/50 rounded-lg border border-border-subtle">
                        Client Relations
                      </div>
                      <div className="text-xs text-text-soft p-2 bg-background/50 rounded-lg border border-border-subtle">
                        Team Leadership
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Ready to work together Section */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to work together?
            </h2>
            <p className="text-text-soft text-sm mb-6">
              Let's discuss your automation challenges and build something that actually works for your team.
            </p>
            <Link href="https://calendly.com/rafayshahoodtcs7/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
