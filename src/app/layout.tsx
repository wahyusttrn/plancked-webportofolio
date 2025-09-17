import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: 'Planck',
  description:
    'Planck | Denpasar, Bali, Indonesia-Based Specializing in 3D Art & Digital Branding. We merge streetwear aesthetics with cutting-edge digital visuals for global brands and artists.',
  creator: 'Wahyu Sattriana | wahyusattriana.com'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
