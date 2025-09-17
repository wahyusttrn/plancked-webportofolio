import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import './globals.css';

const spaceMono = Space_Mono({
  variable: '--font-space-mono',
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: 'Plancked',
  description:
    'Plancked | Denpasar, Bali, Indonesia-Based Specializing in 3D Art & Digital Branding. We merge streetwear aesthetics with cutting-edge digital visuals for global brands and artists.',
  creator: 'Wahyu Sattriana | wahyusattriana.com'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
