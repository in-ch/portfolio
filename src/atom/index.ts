import { atom } from 'recoil';

const headerShowState = atom({
  key: 'headerShowState',
  default: false,
});

export { headerShowState };
