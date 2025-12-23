'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useMemo } from 'react'
import { Search, Filter, ArrowRight, Star, Clock, Zap, Shield, BookOpen, Settings } from 'lucide-react'
import { templates, platforms, categories, type Template } from '@/data/templates'

export default function Templates() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showFilters, setShowFilters] = useState(false)

  const filteredTemplates = useMemo(() => {
    return templates.filter(template => {
      const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          template.category.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesPlatform = selectedPlatform === 'All' || template.platform === selectedPlatform
      const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory
      
      return matchesSearch && matchesPlatform && matchesCategory
    })
  }, [searchQuery, selectedPlatform, selectedCategory])


  return (
    <>

      {/* Search and Filter Section */}
      <section className="section-alt py-8">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-soft" />
              <input
                type="text"
                placeholder="Search templates by name, description, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-surface border border-border-subtle rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex flex-wrap gap-3">
                {/* Platform Filter */}
                <div className="relative">
                  <select
                    value={selectedPlatform}
                    onChange={(e) => setSelectedPlatform(e.target.value)}
                    className="appearance-none bg-surface border border-border-subtle rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    {platforms.map(platform => (
                      <option key={platform} value={platform}>{platform} Platform</option>
                    ))}
                  </select>
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none bg-surface border border-border-subtle rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category === 'All' ? 'All Categories' : category}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-sm text-text-soft">
                {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''} found
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Templates Gallery */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">Template Gallery</h2>
            <p className="text-text-soft">
              Choose from our collection of proven automation templates
            </p>
          </div>

          {filteredTemplates.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No templates found</h3>
              <p className="text-text-soft mb-4">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedPlatform('All')
                  setSelectedCategory('All')
                }}
                className="btn btn-ghost"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <div key={template.id} className="group">
                  <div className="card overflow-hidden hover:scale-105 transition-all duration-300 hover:border-primary/30 h-full flex flex-col">
                    {/* Template Image */}
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                      <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                            {template.category === 'Sales' && <Zap className="h-6 w-6 text-primary" />}
                            {template.category === 'Support' && <Shield className="h-6 w-6 text-primary" />}
                            {template.category === 'Operations' && <Settings className="h-6 w-6 text-primary" />}
                            {template.category === 'HR' && <BookOpen className="h-6 w-6 text-primary" />}
                            {template.category === 'Finance' && <BookOpen className="h-6 w-6 text-primary" />}
                            {template.category === 'Marketing' && <Zap className="h-6 w-6 text-primary" />}
                            {template.category === 'E-commerce' && <Settings className="h-6 w-6 text-primary" />}
                          </div>
                          <div className="text-sm font-medium text-primary">{template.category} Workflow</div>
                          <div className="text-xs text-text-soft mt-1">Visual Template Preview</div>
                        </div>
                      </div>
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        {template.popular && (
                          <span className="px-2 py-1 bg-primary text-white text-xs rounded-full font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors leading-tight">
                          {template.name}
                        </h3>
                        <div className="text-xl font-bold text-primary ml-3">
                          ${template.price}
                        </div>
                      </div>
                      
                      <p className="text-text-soft text-sm mb-4 leading-relaxed flex-1">
                        {template.description}
                      </p>
                      
                      {/* Metrics */}
                      <div className="text-center p-3 bg-background/50 rounded-lg border border-border-subtle mb-4">
                        <div className="text-lg font-bold text-primary mb-1">{template.metrics.value}</div>
                        <div className="text-text-soft text-xs">{template.metrics.label}</div>
                      </div>

                      {/* Platform & Complexity */}
                      <div className="flex items-center justify-between text-xs text-text-soft mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                          {template.platform}
                        </span>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {template.complexity}
                        </span>
                      </div>
                      
                      <Link href={`/templates/${template.id}`} className="btn btn-primary btn-full">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="kicker">Why Choose Templates</p>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">Deploy faster, reduce risk</h2>
            <p className="text-text-soft">
              Battle-tested solutions proven in real business environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Quick Deployment</h3>
              <p className="text-text-soft text-sm">
                Deploy in days, not months. Complete setup guides and pre-configured workflows included.
              </p>
            </div>
            
            <div className="card text-center p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Proven & Tested</h3>
              <p className="text-text-soft text-sm">
                Successfully deployed in real business environments and refined based on actual usage.
              </p>
            </div>
            
            <div className="card text-center p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Complete Documentation</h3>
              <p className="text-text-soft text-sm">
                Detailed setup instructions, troubleshooting guides, and best practices included.
              </p>
            </div>
            
            <div className="card text-center p-6 hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Fully Customizable</h3>
              <p className="text-text-soft text-sm">
                Easily modify and extend templates to fit your specific business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to automate your workflow?
            </h2>
            <p className="text-text-soft mb-6">
              Choose a template that fits your needs or let us build a custom solution for your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#meeting" className="btn btn-primary">
                Schedule Consultation
              </Link>
              <Link href="/packages" className="btn btn-ghost">
                View Custom Packages <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
