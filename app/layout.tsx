import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { UIProvider } from '@/context/UIContext';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-main',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0f2238',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sds-waterproofing.vercel.app'),
  title: 'SDS – Sri Devarshini Solutions | Building Trust, Ensuring Strength',
  description:
    'Sri Devarshini Solutions (SDS) provides expert waterproofing services for residential bungalows, commercial high-rises, precast joints, and structural rehabilitation in Bandlaguda Jagir, Telangana and Andhra Pradesh.',
  keywords: [
    'waterproofing Telangana',
    'waterproofing Hyderabad',
    'Bandlaguda Jagir',
    'Sri Devarshini Solutions',
    'SDS waterproofing',
    'rooftop waterproofing',
    'terrace leakage repair',
    'Representative Manager',
  ],
  authors: [{ name: 'Sri Devarshini Solutions' }],
  openGraph: {
    title: 'SDS – Sri Devarshini Solutions | Waterproofing Experts',
    description:
      'Protect your buildings from leaks, dampness and water damage with our expert waterproofing services.',
    images: ['/images/sds-logo.png'],
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
