import { atom } from 'recoil';

import { SECTION, SECTION_TYPE } from '@/enum';

const headerShowState = atom<boolean>({
  key: 'headerShowState',
  default: false,
});

const sectionState = atom<SECTION_TYPE>({
  key: 'sectionState',
  default: SECTION.intro,
});

export { headerShowState, sectionState };
