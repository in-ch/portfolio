import { ReactNode } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * @param {ReactNode} children 자식 node
 * @description 모바일 퍼스트 레이아웃입니다.
 *              데스크탑일 경우 모바일 크기로 제한합니다.
 * @returns {JSX.Element}
 */
const MobileFirstLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className="bg-red mx-auto w-full max-w-4xl">
      <div className="h-screen p-4 md:p-2">
        <div className="h-full w-full overflow-scroll rounded-xl bg-white">
          <Header />
          <main className="h-full">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MobileFirstLayout;
