import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AfterText — Decode the Drama.',
  description: 'Your brutally honest AI best friend. Paste a chat, get the savage truth. For entertainment only.',
  metadataBase: new URL('https://aftertext.app'),
  openGraph: {
    title: 'AfterText — Decode the Drama.',
    description: 'Your brutally honest AI best friend. Paste a chat, get the savage truth.',
    images: ['/logo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AfterText — Decode the Drama.',
    description: 'Your brutally honest AI best friend. Paste a chat, get the savage truth.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  )
}
