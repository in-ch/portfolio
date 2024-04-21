import '@/styles/globals.css';

import Provider from '@/components/common/Provider';
import Header from '@/components/header';
import Remote from '@/components/remote';

export const metadata = {
  title: '성인철 - 이력서',
  description: '프론트엔드 개발자입니다.',
  openGraph: {
    title: '성인철',
    description: '프론트엔드 개발자입니다.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="overflow-hidden">
        <Provider>
          <Header />
          {children}
          <Remote />
        </Provider>
      </body>
    </html>
  );
}
