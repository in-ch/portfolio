'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

const Provider = ({ children }: { children: ReactNode }): JSX.Element => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Provider;
