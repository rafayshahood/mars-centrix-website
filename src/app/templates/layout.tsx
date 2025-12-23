import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Automation Templates - Mars Centrix | Ready-to-Deploy AI Solutions',
  description: 'Browse our collection of battle-tested automation templates. Deploy proven AI workflows in days, not weeks. Skip custom build time with Mars Centrix templates.',
}

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
