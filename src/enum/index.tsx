export const SECTION = {
  intro: 'intro',
  about: 'about',
  portfolio: 'portfolio',
  blog: 'blog',
  contact: 'contact',
} as const;

export type SECTION_TYPE = (typeof SECTION)[keyof typeof SECTION];
