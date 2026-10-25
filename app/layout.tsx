import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Santa Cruz Redevelopment Services',
  description: 'Expert redevelopment consultancy for housing societies and private properties in Santa Cruz, Mumbai.',
  openGraph: {
    title: 'Santa Cruz Redevelopment Services',
    description: 'Expert redevelopment consultancy for housing societies and private properties in Santa Cruz, Mumbai.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santa Cruz Redevelopment Services',
    description: 'Expert redevelopment consultancy for housing societies and private properties in Santa Cruz, Mumbai.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
