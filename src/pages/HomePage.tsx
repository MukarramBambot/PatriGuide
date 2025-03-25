import React from 'react';
import Hero from '../components/Hero';
import SearchSection from '../components/SearchSection';
import Map from '../components/Map';
import BlocksSection from '../components/BlocksSection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SearchSection />
      <Map />
      <BlocksSection />
    </main>
  );
}