'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useMemo, useEffect } from 'react'
import { Search, Filter, ArrowRight, Star, Clock, Zap, Shield, BookOpen, Settings } from 'lucide-react'
import { Template } from '@/lib/supabase'
import MediaCarousel from '@/components/ui/MediaCarousel'
import { getDirectImageUrl, getCategoryIcon } from '@/lib/utils'
import siteConfig from '@/config/site-config'


export default function Templates() {
  const [templates, setTemplates] = useState<Template[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showFilters, setShowFilters] = useState(false)

  // Fetch templates from Supabase
  useEffect(() => {
    async function fetchTemplates() {
      try {
        const response = await fetch('/api/templates')
        const data = await response.json()
        setTemplates(data.templates || [])
      } catch (error) {
        console.error('Error fetching templates:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTemplates()
  }, [])

  // Get unique platforms and categories from fetched data
  const platforms = useMemo(() => {
    const uniquePlatforms = [...new Set(templates.map(t => t.platform))]
    return uniquePlatforms.sort()
  }, [templates])

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(templates.map(t => t.category))]
    return uniqueCategories.sort()
  }, [templates])

  const filteredTemplates = useMemo(() => {
    return templates.filter(template => {
      const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          template.category.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesPlatform = selectedPlatform === 'All' || template.platform === selectedPlatform
      const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory
      
      return matchesSearch && matchesPlatform && matchesCategory
    })
  }, [templates, searchQuery, selectedPlatform, selectedCategory])


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
                    <option value="All">All Platforms</option>
                    {platforms.map(platform => (
                      <option key={platform} value={platform}>{platform}</option>
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
                    <option value="All">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
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

          {loading ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Loading templates...</h3>
              <p className="text-text-soft">Fetching templates from database</p>
            </div>
          ) : filteredTemplates.length === 0 ? (
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
                    {/* Template Media */}
                    {template.media && template.media.length > 0 ? (
                      <div className="relative">
                        <MediaCarousel 
                          media={template.media} 
                          showThumbnails={template.media.length > 1}
                          aspectRatio="video"
                          thumbnailPosition="overlay"
                          maxThumbnails={4}
                          className="relative"
                        />
                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex gap-2 z-10">
                          {template.is_popular && (
                            <span className="px-2 py-1 bg-primary text-white text-xs rounded-full font-medium">
                              Popular
                            </span>
                          )}
                        </div>
                        <div className="absolute top-3 right-3 px-2 py-1 bg-primary text-white text-xs rounded-full z-10">
                          Template
                        </div>
                      </div>
                    ) : getDirectImageUrl(template.image_url) ? (
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                        <Image 
                          src={getDirectImageUrl(template.image_url)!} 
                          alt={template.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex gap-2">
                          {template.is_popular && (
                            <span className="px-2 py-1 bg-primary text-white text-xs rounded-full font-medium">
                              Popular
                            </span>
                          )}
                        </div>
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
                              {(() => {
                                const IconComponent = getCategoryIcon(template.category)
                                return <IconComponent className="h-6 w-6 text-primary" />
                              })()}
                            </div>
                            <div className="text-sm font-medium text-primary">{template.category} Workflow</div>
                            <div className="text-xs text-text-soft mt-1">Visual Template Preview</div>
                          </div>
                        </div>
                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex gap-2">
                          {template.is_popular && (
                            <span className="px-2 py-1 bg-primary text-white text-xs rounded-full font-medium">
                              Popular
                            </span>
                          )}
                        </div>
                        <div className="absolute top-3 right-3 px-2 py-1 bg-primary text-white text-xs rounded-full">
                          Template
                        </div>
                      </div>
                    )}
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors leading-tight">
                          {template.name}
                        </h3>
                        <div className="text-xl font-bold text-primary ml-3">
                          ${template.price}
                        </div>
                      </div>
                      
                      <p className="text-text-soft text-sm mb-4 leading-relaxed flex-grow">
                        {template.description}
                      </p>
                      
                      <div className="mt-auto">
                        {/* Setup Time */}
                        <div className="flex items-center justify-between text-xs text-text-soft mb-4">
                          <span>{template.setup_time} setup</span>
                          <span>{template.complexity}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {template.integrations.slice(0, 3).map((integration, index) => (
                            <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                              {integration}
                            </span>
                          ))}
                        </div>

                        {/* Platform */}
                        <div className="flex items-center justify-center mb-4">
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium text-xs">
                            {template.platform}
                          </span>
                        </div>
                        
                        <Link href={`/templates/${template.id}`} className="btn btn-primary btn-full">
                          View Details
                        </Link>
                      </div>
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
              <Link href={siteConfig.links.freeConsultation} className="btn btn-primary">
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
