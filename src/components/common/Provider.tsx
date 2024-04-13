'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

import { DialogProvider } from '@/context/dialogContext';

const Provider = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <RecoilRoot>
      <DialogProvider>{children}</DialogProvider>
    </RecoilRoot>
  );
};

export default Provider;
