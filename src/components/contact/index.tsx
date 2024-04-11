'use client';

import { SECTION } from '@/enum';

/**
 * @description Contact Section
 * @returns {JSX.Element}
 */
const Contact = (): JSX.Element => {
  return (
    <section id={SECTION.contact} className="w-screen h-screen bg-blue-300 relative"></section>
  );
};

export default Contact;
