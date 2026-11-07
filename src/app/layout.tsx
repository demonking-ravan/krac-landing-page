import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kautilya Research & Consulting (KRAC) | Political Intelligence & Strategic Execution',
  description:
    'Professional political consulting and research organisation delivering integrated solutions across political strategy, election management, research, data analytics, media intelligence and grassroots operations.',
  keywords: [
    'Political Consulting',
    'Election Strategy',
    'Political Research',
    'Opinion Polls',
    'Data Analytics',
    'Booth Management',
    'War Room Operations',
    'CATI CAPI Surveys',
    'Ground Operations',
    'KRAC',
    'Kautilya Research & Consulting',
  ],
  authors: [{ name: 'Kautilya Research & Consulting' }],
  openGraph: {
    title: 'Kautilya Research & Consulting (KRAC) | Political Intelligence & Strategic Execution',
    description:
      'Where Political Intelligence Meets Strategic Execution. Integrated political strategy, ground intelligence, research insights, and professional campaign execution.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Kautilya Research & Consulting',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500;1,6..72,600&family=Noto+Sans+Devanagari:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FBFBF9] text-ink-900 font-sans selection:bg-sage-200 selection:text-sage-900 antialiased overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
