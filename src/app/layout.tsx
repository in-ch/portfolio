import '@/styles/globals.css';

import Provider from '@/components/common/Provider';
import Header from '@/components/header';

export const metadata = {
  title: '개발 중',
  description: '개발 중',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="overflow-hidden">
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
