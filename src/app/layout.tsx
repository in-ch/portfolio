import './globals.css';
import { Inter } from 'next/font/google';
import Providers from '@/components/Common/Provider';
import MobileFirstLayout from '@/components/Common/MobileFirstLayout';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '개발 중',
  description: '개발 중',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MobileFirstLayout>{children}</MobileFirstLayout>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
