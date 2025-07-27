import React from 'react';
import { Box, Typography, Stack, Container, Button, CircularProgress, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { GET_HOMEPAGE_SECTIONS, GetHomepageSectionsData, HeroImage } from '../graphql/queries';

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

const SecondaryButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '14px',
  fontWeight: 600,
  textTransform: 'none',
  padding: '8px 24px',
  borderRadius: '32px',
  minWidth: '140px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    padding: '12px 24px',
    width: '100%',
    maxWidth: '280px'
  },
  '&:hover': {
    backgroundColor: theme.palette.grey[50]
  }
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: '14px',
  fontWeight: 600,
  textTransform: 'none',
  padding: '8px 24px',
  borderRadius: '32px',
  minWidth: '140px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    padding: '12px 24px',
    width: '100%',
    maxWidth: '280px'
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  }
}));

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '200px'
}));

const ErrorContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '200px',
  padding: theme.spacing(4)
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
        <SecondaryButton onClick={onSecondaryCtaClick}>{secondaryctatext}</SecondaryButton>
        <PrimaryButton onClick={onPrimaryCtaClick}>{primaryctatext}</PrimaryButton>
      </CTAButtons>
    </CTAContent>
  );
};

const BottomCTASection: React.FC = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery<GetHomepageSectionsData>(GET_HOMEPAGE_SECTIONS);

  const handlePrimaryCtaClick = () => {
    navigate('/login');
  };

  const handleSecondaryCtaClick = () => {
    // You can customize this to navigate to a demo page or contact form
    console.log('Request demo clicked');
  };

  if (loading) {
    return (
      <CTAContainer>
        <LoadingContainer>
          <CircularProgress size={60} />
        </LoadingContainer>
      </CTAContainer>
    );
  }

  if (error) {
    return (
      <CTAContainer>
        <ErrorContainer>
          <Alert severity="error" sx={{ maxWidth: 600 }}>
            Failed to load CTA section content. Please try again later.
          </Alert>
        </ErrorContainer>
      </CTAContainer>
    );
  }

  const ctaData = data?.homepage?.bottomctasection;
  
  // Fallback to static content if no data
  const fallbackData = {
    title: "Increase your team's visibility and alignment",
    subtitle: "Start for free, flexible for all teams.",
    secondaryctatext: "Request a demo",
    primaryctatext: "Start for free"
  };

  const content = ctaData || fallbackData;

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