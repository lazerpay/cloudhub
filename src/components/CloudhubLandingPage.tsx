import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import HeroSection from './HeroSection';
import CompanyLogos from './CompanyLogos';
import ShareFeature from './ShareFeature';
import FeedbackFeature from './FeedbackFeature';
import OrangeCTASection from './OrangeCTASection';
import ArchiveSection from './ArchiveSection';
import TestimonialsSection from './TestimonialsSection';
import ClientLogosSection from './ClientLogosSection';
import FinalCTASection from './FinalCTASection';
import BottomCTASection from './BottomCTASection';
import Footer from './Footer';

const CloudhubLandingPage: React.FC = () => {
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

export default CloudhubLandingPage;