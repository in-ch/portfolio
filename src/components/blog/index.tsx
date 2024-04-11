'use client';

import { SECTION } from '@/enum';

/**
 * @description Blog Section
 * @returns {JSX.Element}
 */
const Blog = (): JSX.Element => {
  return <section id={SECTION.blog} className="w-screen h-screen bg-red-300 relative"></section>;
};

export default Blog;
