'use client';

import { useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';

/**
 * @param {CSSProperties?} style 옵셔널한 스타일 적용
 * @param {ReactNode} children 하위 node
 * @description breakpoint의 md 기준인 1280px으로 최대 크기가 제한된 컨텐츠 레이아웃 컴포넌트
 * @returns {JSX.Element}
 */
function Providers({ children }: React.PropsWithChildren) {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} position="bottom" buttonPosition="bottom-left" />
    </QueryClientProvider>
  );
}

export default Providers;
