# Mars Centrix - AI Automation Platform

A modern, high-performance Next.js website for Mars Centrix, featuring dynamic templates, packages, and a comprehensive media carousel system.

## 🚀 Features

### Core Functionality
- **Dynamic Templates**: Supabase-powered template system with filtering and search
- **Media Carousel**: Advanced image/video carousel with thumbnails and navigation
- **Dynamic Packages**: Database-driven package display with popularity indicators
- **Contact Integration**: n8n webhook integration for form submissions
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Performance Optimizations
- **Image Optimization**: WebP/AVIF formats with lazy loading and blur placeholders
- **Code Splitting**: Optimized Lucide React imports
- **Caching**: Proper image caching and API response optimization
- **Bundle Size**: Eliminated duplicate code and unused imports

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.0 with App Router
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Automation**: n8n webhook integration

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── contact/           # Contact page with webhook
│   ├── packages/          # Dynamic packages page
│   └── templates/         # Templates with carousel
├── components/
│   └── ui/
│       └── MediaCarousel.tsx  # Advanced media carousel
├── lib/
│   ├── supabase.ts        # Database client & types
│   └── utils.ts           # Shared utilities
└── data/                  # Static data (legacy)
```

## 🗄️ Database Schema

### Templates
- Dynamic display control (`display_on_homepage`)
- Multiple media support via `template_media` table
- Category-based filtering and icons

### Packages
- Popularity indicators (`is_popular`)
- Feature arrays for dynamic display
- Homepage visibility control

### Template Media
- Support for images and videos
- Thumbnail generation for videos
- Display order management

## 🚀 Getting Started

1. **Clone and Install**
```bash
git clone <repository>
cd mars-centrix-nextjs
npm install
```

2. **Environment Setup**
```bash
cp env-template.txt .env.local
# Add your Supabase credentials
```

3. **Database Setup**
```bash
# Run the SQL files in order:
# 1. supabase-schema.sql
# 2. update-schema-media.sql
# 3. add-new-templates.sql
# 4. add-sample-packages.sql
# 5. add-sample-media.sql
```

4. **Development**
```bash
npm run dev
```

## 📊 Performance Features

### Image Optimization
- Automatic WebP/AVIF conversion
- Lazy loading with blur placeholders
- Proper sizing attributes
- Google Drive URL optimization

### Code Optimization
- Shared utility functions
- Optimized icon imports
- Removed duplicate code
- Production console removal

### User Experience
- Loading states for all dynamic content
- Error handling and fallbacks
- Responsive thumbnail sizing
- Smooth animations and transitions

## 🔧 Configuration

### Next.js Config
- Image domain allowlisting
- Format optimization (WebP/AVIF)
- Package import optimization
- Production console removal

### Supabase Integration
- Type-safe database queries
- Automatic data fetching
- Error handling and fallbacks

## 📱 Components

### MediaCarousel
- **Features**: Image/video support, thumbnails, navigation
- **Props**: Position (overlay/below), max thumbnails, aspect ratios
- **Performance**: Lazy loading, responsive sizing, smooth scrolling

### Shared Utilities
- `getDirectImageUrl()`: Google Drive URL conversion
- `getCategoryIcon()`: Category-based icon mapping
- `cn()`: Tailwind class merging

## 🚀 Deployment

The site is optimized for Vercel deployment with:
- Automatic builds on push
- Image optimization
- Edge functions for API routes
- Static generation where possible

## 📈 Recent Optimizations

1. **Code Cleanup**: Removed 6 unused SQL files and duplicate functions
2. **Performance**: Added image optimization and lazy loading
3. **Bundle Size**: Optimized imports and removed unused code
4. **User Experience**: Enhanced carousel with better responsive behavior
5. **Database**: Streamlined schema with proper relationships

## 🔗 Integration

### n8n Webhook
- Contact form submissions trigger automation workflows
- GET request with query parameters
- Error handling with user-friendly fallbacks

### Supabase
- Real-time data fetching
- Type-safe queries
- Automatic error handling
- Optimized caching strategies

---

**Status**: ✅ Production Ready - Fully optimized and tested
