import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Analytics } from '@vercel/analytics/react';

type RootLayoutProps = React.PropsWithChildren;

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Analytics />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL('https://lukemorales.io'),
  title: {
    default: 'Luke Morales',
    template: '%s | Luke Morales',
  },
  description: 'Software Engineer',
  openGraph: {
    title: 'Luke Morales',
    description: 'Software Engineer',
    url: 'https://lukemorales.io',
    siteName: 'Luke Morales',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Luke Morales',
    card: 'summary_large_image',
  },
};
