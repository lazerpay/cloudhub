import React from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { GET_HOMEPAGE_DATA, GetHomepageData, HeroImage } from '../graphql/homepage';
import LoadingSpinner from './LoadingSpinner';
import Button from './ui/Button';
import { fallbackBottomCTAData, errorMessages } from '../data/fallbackData';

const CTAContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
  borderTop: '1px solid rgba(0, 0, 0, 0.05)',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0)
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0)
  }
}));

const CTAContent = styled(Stack)(({ theme }) => ({
  textAlign: 'center',
  alignItems: 'center'
}));

const CTAIcon = styled(Box)(({ theme }) => ({
  width: 94,
  height: 94,
  background: 'linear-gradient(315deg, #FB432C 0%, #FF591E 100%)',
  borderRadius: '8px',
  marginBottom: theme.spacing(5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: 80,
    height: 80,
    marginBottom: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    width: 64,
    height: 64,
    marginBottom: theme.spacing(3)
  }
}));

const CTAImage = styled('img')(({ theme }) => ({
  width: 94,
  height: 94,
  objectFit: 'contain',
  marginBottom: '40px',
  [theme.breakpoints.down('md')]: {
    width: 80,
    height: 80,
    marginBottom: '32px'
  },
  [theme.breakpoints.down('sm')]: {
    width: 64,
    height: 64,
    marginBottom: '24px'
  }
}));

const CTATitle = styled(Typography)(({ theme }) => ({
  fontSize: '26px',
  fontWeight: 700,
  color: '#171717',
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    marginBottom: theme.spacing(2.5)
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    marginBottom: theme.spacing(2),
    lineHeight: '28px'
  }
}));

const CTASubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 400,
  color: '#525252',
  marginBottom: theme.spacing(6),
  maxWidth: '600px',
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
    marginBottom: theme.spacing(5),
    maxWidth: '500px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    marginBottom: theme.spacing(4),
    maxWidth: '300px',
    lineHeight: '24px'
  }
}));

const CTAButtons = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(2.5),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
    width: '100%'
  }
}));



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