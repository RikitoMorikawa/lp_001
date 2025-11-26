import React from 'react';
import Hero from './components/Hero';
import Recommend from './components/Recommend';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Instructors from './components/Instructors';
import Schedule from './components/Schedule';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Flow from './components/Flow';
import FinalCTA from './components/FinalCTA';
import FixedCTA from './components/FixedCTA';

const SectionDivider: React.FC = () => (
  <div className="w-full border-t-2 border-black relative z-10"></div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-[#333333] antialiased pb-[80px]">
      <header>
        <Hero />
      </header>
      
      <main>
        <Recommend />
        <SectionDivider />
        <Features />
        <SectionDivider />
        <Comparison />
        <SectionDivider />
        <Instructors />
        <SectionDivider />
        <Schedule />
        <SectionDivider />
        <Pricing />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <Flow />
        <SectionDivider />
        <FinalCTA />
      </main>

      <FixedCTA />
      
      <footer className="bg-gray-800 text-white py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Cebu Romance English. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;