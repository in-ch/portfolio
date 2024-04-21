import { atom } from 'recoil';

import { SECTION, SECTION_TYPE } from '@/enum';
import { ItemType } from '@/types';

const headerShowState = atom<boolean>({
  key: 'headerShowState',
  default: false,
});

const sectionState = atom<SECTION_TYPE>({
  key: 'sectionState',
  default: SECTION.intro,
});

const dialogState = atom<boolean>({
  key: 'dialogState',
  default: false,
});

const itemState = atom<ItemType>({
  key: 'itemState',
  default: {
    title: '',
    description: [],
    date: '',
    imgs: [],
    links: [{ title: '', link: '' }],
  },
});

export { headerShowState, sectionState, dialogState, itemState };
