'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { getDirectImageUrl } from '@/lib/utils'

interface MediaItem {
  id: string
  media_url: string
  media_type: 'image' | 'video'
  thumbnail_url?: string
  alt_text?: string
  display_order: number
}

interface MediaCarouselProps {
  media: MediaItem[]
  className?: string
  showThumbnails?: boolean
  autoPlay?: boolean
  aspectRatio?: 'video' | 'square' | 'wide'
  thumbnailPosition?: 'below' | 'overlay'
  maxThumbnails?: number
}


export default function MediaCarousel({ 
  media, 
  className = '', 
  showThumbnails = true, 
  autoPlay = false,
  aspectRatio = 'video',
  thumbnailPosition = 'below',
  maxThumbnails = 6
}: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0)

  if (!media || media.length === 0) {
    return null
  }

  const sortedMedia = [...media].sort((a, b) => a.display_order - b.display_order)
  const currentMedia = sortedMedia[currentIndex]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sortedMedia.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sortedMedia.length) % sortedMedia.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    // Auto-scroll thumbnails if needed
    if (sortedMedia.length > maxThumbnails) {
      const halfMax = Math.floor(maxThumbnails / 2)
      if (index >= halfMax && index < sortedMedia.length - halfMax) {
        setThumbnailStartIndex(index - halfMax)
      } else if (index >= sortedMedia.length - halfMax) {
        setThumbnailStartIndex(sortedMedia.length - maxThumbnails)
      } else {
        setThumbnailStartIndex(0)
      }
    }
  }

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setThumbnailStartIndex(Math.max(0, thumbnailStartIndex - 1))
    } else {
      setThumbnailStartIndex(Math.min(sortedMedia.length - maxThumbnails, thumbnailStartIndex + 1))
    }
  }

  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    wide: 'aspect-[16/9]'
  }

  return (
    <div className={`relative ${className}`}>
      {/* Main Media Display */}
      <div className={`relative ${aspectClasses[aspectRatio]} bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden group`}>
        {currentMedia.media_type === 'image' ? (
          <Image
            src={getDirectImageUrl(currentMedia.media_url) || ''}
            alt={currentMedia.alt_text || 'Template media'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="relative w-full h-full">
            {!isPlaying ? (
              <>
                {currentMedia.thumbnail_url ? (
                  <Image
                    src={getDirectImageUrl(currentMedia.thumbnail_url) || ''}
                    alt="Video thumbnail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <Play className="h-16 w-16 text-primary" />
                  </div>
                )}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                >
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Play className="h-8 w-8 text-primary ml-1" />
                  </div>
                </button>
              </>
            ) : (
              <video
                src={getDirectImageUrl(currentMedia.media_url) || ''}
                controls
                autoPlay={autoPlay}
                className="w-full h-full object-cover"
                onEnded={() => setIsPlaying(false)}
              />
            )}
          </div>
        )}

        {/* Navigation Arrows */}
        {sortedMedia.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Media Counter */}
        {sortedMedia.length > 1 && (
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 text-white text-xs rounded">
            {currentIndex + 1} / {sortedMedia.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {showThumbnails && sortedMedia.length > 1 && (
        <div className={`${thumbnailPosition === 'overlay' ? 'absolute bottom-2 left-1/2 -translate-x-1/2 z-10' : 'mt-3'}`}>
          <div className={`flex items-center justify-center gap-1 ${thumbnailPosition === 'overlay' ? 'bg-black/50 backdrop-blur-sm rounded-lg p-2' : ''}`}>
            {/* Left scroll button */}
            {sortedMedia.length > maxThumbnails && thumbnailStartIndex > 0 && (
              <button
                onClick={() => scrollThumbnails('left')}
                className="w-6 h-6 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center mr-1"
              >
                <ChevronLeft className="h-3 w-3" />
              </button>
            )}
            
            {/* Thumbnails container */}
            <div className="flex gap-1">
              {sortedMedia
                .slice(thumbnailStartIndex, thumbnailStartIndex + maxThumbnails)
                .map((item, displayIndex) => {
                  const actualIndex = thumbnailStartIndex + displayIndex
                  const thumbnailSize = Math.max(24, Math.min(36, 216 / Math.min(sortedMedia.length, maxThumbnails)))
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => goToSlide(actualIndex)}
                      className={`relative flex-shrink-0 rounded overflow-hidden border transition-all ${
                        actualIndex === currentIndex 
                          ? 'border-primary ring-1 ring-primary/50' 
                          : 'border-white/30 hover:border-primary/50'
                      }`}
                      style={{
                        width: `${thumbnailSize}px`,
                        height: `${thumbnailSize * 0.75}px`
                      }}
                    >
                      {item.media_type === 'image' ? (
                        <Image
                          src={getDirectImageUrl(item.media_url) || ''}
                          alt={`Thumbnail ${actualIndex + 1}`}
                          fill
                          className="object-cover"
                          sizes={`${thumbnailSize}px`}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                      ) : (
                        <div className="relative w-full h-full">
                          {item.thumbnail_url ? (
                            <Image
                              src={getDirectImageUrl(item.thumbnail_url) || ''}
                              alt={`Video thumbnail ${actualIndex + 1}`}
                              fill
                              className="object-cover"
                              sizes={`${thumbnailSize}px`}
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                              <Play className="h-3 w-3 text-primary" />
                            </div>
                          )}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Play className="h-2 w-2 text-white drop-shadow-lg" />
                          </div>
                        </div>
                      )}
                    </button>
                  )
                })}
            </div>
            
            {/* Right scroll button */}
            {sortedMedia.length > maxThumbnails && thumbnailStartIndex < sortedMedia.length - maxThumbnails && (
              <button
                onClick={() => scrollThumbnails('right')}
                className="w-6 h-6 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center ml-1"
              >
                <ChevronRight className="h-3 w-3" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
