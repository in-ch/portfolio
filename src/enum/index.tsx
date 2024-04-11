export const SECTION = {
  intro: 'intro',
  about: 'about',
  portfolio: 'portfolio',
  blog: 'blog',
  contact: 'contact',
} as const;

export type SECTION_TYPE = (typeof SECTION)[keyof typeof SECTION];

export type NextPrev = {
  next: SECTION_TYPE | null;
  prev: SECTION_TYPE | null;
};

export type NextSectionType = {
  [key in SECTION_TYPE]: NextPrev;
};

export const NEXT_SECTION: NextSectionType = {
  [SECTION.intro]: {
    next: null,
    prev: SECTION.about,
  },
  [SECTION.about]: {
    next: SECTION.intro,
    prev: SECTION.portfolio,
  },
  [SECTION.portfolio]: {
    next: SECTION.about,
    prev: SECTION.blog,
  },
  [SECTION.blog]: {
    next: SECTION.portfolio,
    prev: SECTION.contact,
  },
  [SECTION.contact]: {
    next: SECTION.blog,
    prev: null,
  },
};
