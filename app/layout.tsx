import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Révisions IngeLog - QCM',
  description: 'Site de révision pour la matière Ingénierie Logicielle avec un qcm à notation canadienne',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
