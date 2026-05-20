import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AfterText — Decode the Drama.',
  description: 'Your brutally honest AI best friend. Paste a chat, get the savage truth. For entertainment only.',
  metadataBase: new URL('https://aftertext.net'),
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: '/logo.png',
    shortcut: '/favicon.ico',
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
