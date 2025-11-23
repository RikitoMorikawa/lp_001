import React from 'react';
import Hero from './components/Hero';
import Concept from './components/Concept';
import ComparisonChart from './components/ComparisonChart';
import TeacherGallery from './components/TeacherGallery';
import Faq from './components/Faq';
import Footer from './components/Footer';
import FloatingLineButton from './components/FloatingLineButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Concept />
      <ComparisonChart />
      <TeacherGallery />
      <Faq />
      <Footer />
      <FloatingLineButton />
    </div>
  );
};

export default App;