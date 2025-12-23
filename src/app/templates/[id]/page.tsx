import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Star, Clock, CheckCircle, Zap, Shield, BookOpen, Settings, Users, DollarSign } from 'lucide-react'
import { templates, type Template } from '@/data/templates'

interface TemplateDetailPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return templates.map((template) => ({
    id: template.id,
  }))
}

export async function generateMetadata({ params }: TemplateDetailPageProps) {
  const resolvedParams = await params
  const template = templates.find(t => t.id === resolvedParams.id)
  
  if (!template) {
    return {
      title: 'Template Not Found - Mars Centrix',
    }
  }

  return {
    title: `${template.name} - Automation Template | Mars Centrix`,
    description: template.description,
  }
}

export default async function TemplateDetailPage({ params }: TemplateDetailPageProps) {
  const resolvedParams = await params
  
  const template = templates.find(t => t.id === resolvedParams.id)

  if (!template) {
    notFound()
  }

  const relatedTemplates = templates
    .filter(t => t.id !== template.id && (t.category === template.category || t.platform === template.platform))
    .slice(0, 3)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Sales': return <Zap className="h-6 w-6 text-primary" />
      case 'Support': return <Shield className="h-6 w-6 text-primary" />
      case 'Operations': return <Settings className="h-6 w-6 text-primary" />
      case 'HR': return <Users className="h-6 w-6 text-primary" />
      case 'Finance': return <DollarSign className="h-6 w-6 text-primary" />
      case 'Marketing': return <Zap className="h-6 w-6 text-primary" />
      case 'E-commerce': return <Settings className="h-6 w-6 text-primary" />
      default: return <BookOpen className="h-6 w-6 text-primary" />
    }
  }

  return (
    <>
      {/* Breadcrumb Navigation */}
      <section className="py-6 border-b border-border-subtle">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-text-soft">
            <Link href="/templates" className="hover:text-primary transition-colors">
              Templates
            </Link>
            <span>/</span>
            <span className="text-text">{template.name}</span>
          </div>
        </div>
      </section>

      {/* Template Header */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Template Info */}
            <div>
              <Link 
                href="/templates" 
                className="inline-flex items-center gap-2 text-sm text-text-soft hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Templates
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>
                {template.popular && (
                  <span className="px-3 py-1 bg-primary text-white text-xs rounded-full font-medium">
                    Popular
                  </span>
                )}
                {template.featured && (
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium border border-primary/20">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold mb-4">{template.name}</h1>
              
              <div className="text-4xl font-bold text-primary mb-6">${template.price}</div>

              <p className="text-lg text-text-soft mb-8 leading-relaxed">
                {template.detailedDescription}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-background/50 rounded-lg border border-border-subtle">
                  <div className="text-2xl font-bold text-primary mb-1">{template.metrics.value}</div>
                  <div className="text-text-soft text-xs">{template.metrics.label}</div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg border border-border-subtle">
                  <div className="text-2xl font-bold text-primary mb-1">{template.setupTime}</div>
                  <div className="text-text-soft text-xs">Setup Time</div>
                </div>
                <div className="text-center p-4 bg-background/50 rounded-lg border border-border-subtle">
                  <div className="text-2xl font-bold text-primary mb-1">{template.complexity}</div>
                  <div className="text-text-soft text-xs">Complexity</div>
                </div>
              </div>

              {/* Platform & Category Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20 font-medium">
                  {template.platform} Platform
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20 font-medium">
                  {template.category} Automation
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#meeting" className="btn btn-primary flex-1">
                  Purchase Template - ${template.price}
                </Link>
                <Link href="/#meeting" className="btn btn-ghost flex-1">
                  Schedule Demo
                </Link>
              </div>
            </div>

            {/* Template Preview */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-border-subtle p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    {getCategoryIcon(template.category)}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{template.category} Workflow</h3>
                  <p className="text-text-soft">Interactive automation preview</p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full animate-pulse flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-6">What's Included</h2>
              <div className="space-y-4">
                {template.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-soft">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
              <div className="space-y-4">
                {template.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-text-soft">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-3">Works With Your Existing Tools</h2>
            <p className="text-text-soft">
              Seamlessly integrates with the platforms you already use
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {template.integrations.map((integration, index) => (
              <div key={index} className="px-4 py-3 bg-surface border border-border-subtle rounded-lg text-sm font-medium">
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Templates */}
      {relatedTemplates.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <div className="section-header">
              <h2 className="text-2xl font-bold mb-3">Related Templates</h2>
              <p className="text-text-soft">
                Other templates you might be interested in
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTemplates.map((relatedTemplate) => (
                <div key={relatedTemplate.id} className="group">
                  <div className="card overflow-hidden hover:scale-105 transition-all duration-300 hover:border-primary/30 h-full flex flex-col">
                    {/* Template Image */}
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                      <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                            {getCategoryIcon(relatedTemplate.category)}
                          </div>
                          <div className="text-sm font-medium text-primary">{relatedTemplate.category}</div>
                        </div>
                      </div>
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        {relatedTemplate.popular && (
                          <span className="px-2 py-1 bg-primary text-white text-xs rounded-full font-medium">
                            Popular
                          </span>
                        )}
                        <span className="px-2 py-1 bg-surface/90 backdrop-blur-sm text-text text-xs rounded-full border border-border-subtle">
                          {relatedTemplate.platform}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors leading-tight">
                          {relatedTemplate.name}
                        </h3>
                        <div className="text-xl font-bold text-primary ml-3">
                          ${relatedTemplate.price}
                        </div>
                      </div>
                      
                      <p className="text-text-soft text-sm mb-4 leading-relaxed flex-1">
                        {relatedTemplate.description}
                      </p>
                      
                      <Link href={`/templates/${relatedTemplate.id}`} className="btn btn-primary btn-full">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to deploy {template.name}?
            </h2>
            <p className="text-text-soft mb-8">
              Get started with this proven automation template and transform your {template.category.toLowerCase()} workflow today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#meeting" className="btn btn-primary">
                Purchase Template - ${template.price}
              </Link>
              <Link href="/#meeting" className="btn btn-ghost">
                Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
