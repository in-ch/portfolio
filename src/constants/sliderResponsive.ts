import { ResponsiveObject } from "react-slick";

import { BREAK_POINTS } from "./breakPoints";

export const SLIDER_RESPONSE: ResponsiveObject[] = [
  {
    breakpoint: BREAK_POINTS.xl,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
    },
  },
  {
    breakpoint: BREAK_POINTS.md,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: BREAK_POINTS.xs,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
];
