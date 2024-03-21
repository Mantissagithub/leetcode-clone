// src/sections/HomeSection1.tsx
import React from 'react';

type HomeSection1Props = {};

const HomeSection1: React.FC<HomeSection1Props> = () => {
  return (
    <section className="text-center pt-20 pb-20">
      <h1 className="text-4xl font-medium leading-none mb-5">Welcome to our LeetCode Clone!</h1>
      <p className="max-w-xl mx-auto text-gray-500">Get started by exploring our collection of coding challenges.</p>
    </section>
  );
};

export default HomeSection1;