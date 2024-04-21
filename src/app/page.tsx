'use client';

import About from '@/components/about';
import Blog from '@/components/blog';
import Contact from '@/components/contact';
import Intro from '@/components/intro';
import Portfolio from '@/components/portfolio';

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </main>
  );
}
