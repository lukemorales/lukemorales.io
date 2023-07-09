import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Analytics } from '@vercel/analytics/react';

type RootLayoutProps = React.PropsWithChildren;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'lukemorales.io',
  description: 'Software Engineer',
};

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
