import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CompanyLogos from '../components/CompanyLogos';
import ClientLogosSection from '../components/ClientLogosSection';
import ShareFeature from '../components/ShareFeature';
import FeedbackFeature from '../components/FeedbackFeature';
import OrangeCTASection from '../components/OrangeCTASection';
import ArchiveSection from '../components/ArchiveSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTASection from '../components/FinalCTASection';
import BottomCTASection from '../components/BottomCTASection';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <Box>
      <Header />
      <HeroSection />
      <CompanyLogos />
      <ShareFeature />
      <FeedbackFeature />
      <OrangeCTASection />
      <ArchiveSection />
      <TestimonialsSection />
      <ClientLogosSection />
      <FinalCTASection />
      <BottomCTASection />
      <Footer />
    </Box>
  );
};

export default LandingPage;