import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border-subtle">
      <div className="container">
        <div className="py-8 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/logo.png"
                  alt="Mars Centrix"
                  width={500}
                  height={100}
                  className="h-20 w-auto brightness-110"
                />
              </Link>
              <p className="text-text-soft mb-6 max-w-md">
                Mars Centrix helps teams design, build, and deploy AI-powered automations that cut busywork, not corners.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-text-soft hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-text-soft hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-text font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/templates" className="text-text-soft hover:text-primary transition-colors">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="/packages" className="text-text-soft hover:text-primary transition-colors">
                    Custom Packages
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-text-soft hover:text-primary transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/#meeting" className="text-text-soft hover:text-primary transition-colors">
                    Consultation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-text font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-text-soft hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-text-soft hover:text-primary transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-text-soft hover:text-primary transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/#meeting" className="text-text-soft hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-center">
          <p className="text-text-soft text-sm">
            &copy; 2025 Mars Centrix. All rights reserved.
          </p>
          <Link
            href="#top"
            className="text-text-soft hover:text-primary transition-colors text-sm mt-4 sm:mt-0"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  )
}
