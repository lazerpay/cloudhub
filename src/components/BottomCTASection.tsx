import React from 'react';
import { Box, Stack, Container } from '@mui/material';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { GET_HOMEPAGE_DATA, GetHomepageData, HeroImage } from '../graphql/homepage';
import LoadingSpinner from './LoadingSpinner';
import Button from './ui/Button';
import { fallbackBottomCTAData, errorMessages } from '../data/fallbackData';
import {
  CTAContainer,
  CTAContent,
  CTAIcon,
  CTAImage,
  CTATitle,
  CTASubtitle,
  CTAButtons,
} from './styles/BottomCTASection.styles';



interface BottomCTAContentProps {
  image?: HeroImage;
  title: string;
  subtitle: string;
  secondaryctatext: string;
  primaryctatext: string;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

const BottomCTAContentComponent: React.FC<BottomCTAContentProps> = ({
  image,
  title,
  subtitle,
  secondaryctatext,
  primaryctatext,
  onPrimaryCtaClick,
  onSecondaryCtaClick
}) => {
  return (
    <CTAContent>
      {image?.url ? (
        <CTAImage 
          src={image.url}
          alt={image.alt || "CTA section icon"}
        />
      ) : (
        <CTAIcon>
          {/* Cube icon placeholder */}
          <Box
            sx={{
              width: 16,
              height: 16,
              backgroundColor: 'white',
              borderRadius: '2px'
            }}
          />
        </CTAIcon>
      )}
      
      <CTATitle>{title}</CTATitle>
      <CTASubtitle>{subtitle}</CTASubtitle>
      
      <CTAButtons>
        <Button 
          variant="secondary" 
          onClick={onSecondaryCtaClick}
          sx={{ 
            minWidth: '140px',
            fontSize: '14px',
            padding: '8px 24px',
            [theme => theme.breakpoints.down('sm')]: {
              fontSize: '16px',
              padding: '12px 24px',
              width: '100%',
              maxWidth: '280px'
            }
          }}
        >
          {secondaryctatext}
        </Button>
        <Button 
          variant="primary" 
          onClick={onPrimaryCtaClick}
          sx={{ 
            minWidth: '140px',
            fontSize: '14px',
            padding: '8px 24px',
            [theme => theme.breakpoints.down('sm')]: {
              fontSize: '16px',
              padding: '12px 24px',
              width: '100%',
              maxWidth: '280px'
            }
          }}
        >
          {primaryctatext}
        </Button>
      </CTAButtons>
    </CTAContent>
  );
};

const BottomCTASection: React.FC = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery<GetHomepageData>(GET_HOMEPAGE_DATA);

  const handlePrimaryCtaClick = () => {
    navigate('/login');
  };

  const handleSecondaryCtaClick = () => {
    // You can customize this to navigate to a demo page or contact form
    console.log('Request demo clicked');
  };

  if (loading || error) {
    return (
      <CTAContainer>
        <LoadingSpinner 
          variant="section" 
          error={error} 
          errorMessage={errorMessages.homepageSections}
        />
      </CTAContainer>
    );
  }

  const ctaData = data?.homepage?.bottomctasection;
  const content = ctaData || fallbackBottomCTAData;

  return (
    <CTAContainer>
      <Container maxWidth="lg">
        <BottomCTAContentComponent
          image={content.image}
          title={content.title}
          subtitle={content.subtitle}
          secondaryctatext={content.secondaryctatext}
          primaryctatext={content.primaryctatext}
          onPrimaryCtaClick={handlePrimaryCtaClick}
          onSecondaryCtaClick={handleSecondaryCtaClick}
        />
      </Container>
    </CTAContainer>
  );
};

export default BottomCTASection;