import type { Metadata } from "next";
import Script from 'next/script';
import "./globals.css";

export const metadata: Metadata = {
  title: 'Radiance Skincare',
  description: 'Welcome to the skincare foundation',
  icons: {
    icon: '/favicon.ico',
  },
};

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <Script
  src="https://kit.fontawesome.com/9794455bd0.js"
  crossOrigin="anonymous"
  strategy="beforeInteractive"
/>

      </head>
      <body className="m-0">
        <Header />
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
