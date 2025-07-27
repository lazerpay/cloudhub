import React from 'react';
import { Box, Typography, Stack, Container, CircularProgress, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import { GET_HOMEPAGE_SECTIONS, GetHomepageSectionsData, HeroImage } from '../graphql/queries';

const ClientLogosContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0, 12, 0),
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0, 8, 0)
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0, 6, 0)
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '54px',
  fontWeight: 600,
  lineHeight: '63px',
  letterSpacing: '-1.5px',
  color: theme.palette.text.primary,
  textAlign: 'center',
  marginBottom: theme.spacing(7),
  [theme.breakpoints.down('lg')]: {
    fontSize: '48px',
    lineHeight: '56px',
    marginBottom: theme.spacing(6)
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '42px',
    lineHeight: '50px',
    marginBottom: theme.spacing(5)
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '32px',
    lineHeight: '38px',
    letterSpacing: '-1px',
    marginBottom: theme.spacing(4)
  }
}));

const LogosGrid = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(3)
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2)
  }
}));

const LogosRow = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(4),
  [theme.breakpoints.down('lg')]: {
    gap: theme.spacing(3)
  },
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing(2)
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(3)
  }
}));

const LogoImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  maxWidth: '180px',
  maxHeight: '60px',
  objectFit: 'contain',
  opacity: 1,
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('md')]: {
    maxWidth: '140px',
    maxHeight: '50px'
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '120px',
    maxHeight: '40px'
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

interface LogoItemProps {
  image?: HeroImage;
  fallbackSrc: string;
  alt: string;
}

const LogoItem: React.FC<LogoItemProps> = ({ image, fallbackSrc, alt }) => {
  return (
    <LogoImage 
      src={image?.url || fallbackSrc}
      alt={image?.alt || alt}
    />
  );
};

const ClientLogosSection: React.FC = () => {
  const { loading, error, data } = useQuery<GetHomepageSectionsData>(GET_HOMEPAGE_SECTIONS);

  if (loading) {
    return (
      <ClientLogosContainer>
        <LoadingContainer>
          <CircularProgress size={60} />
        </LoadingContainer>
      </ClientLogosContainer>
    );
  }

  if (error) {
    return (
      <ClientLogosContainer>
        <ErrorContainer>
          <Alert severity="error" sx={{ maxWidth: 600 }}>
            Failed to load client logos. Please try again later.
          </Alert>
        </ErrorContainer>
      </ClientLogosContainer>
    );
  }

  const clientData = data?.homepage?.clientsection;
  
  // Fallback data
  const fallbackTitle = "Loved By Designers At";

  return (
    <ClientLogosContainer>
      <Container maxWidth="xl">
        <SectionTitle>
          {clientData?.title || fallbackTitle}
        </SectionTitle>
        
        <LogosGrid>
          <LogosRow>
            <LogoItem 
              image={clientData?.crowdstrike}
              fallbackSrc="/images/crowdstrike-logo.png"
              alt="Crowdstrike"
            />
            <LogoItem 
              image={clientData?.airbus}
              fallbackSrc="/images/airbus-logo.png"
              alt="Airbus"
            />
            <LogoItem 
              image={clientData?.hays}
              fallbackSrc="/images/hays-logo.svg"
              alt="Hays"
            />
            <LogoItem 
              image={clientData?.sentry}
              fallbackSrc="/images/sentry-logo.svg"
              alt="Sentry"
            />
          </LogosRow>
          
          <LogosRow>
            <LogoItem 
              image={clientData?.medwing}
              fallbackSrc="/images/medwing-logo.png"
              alt="Medwing"
            />
            <LogoItem 
              image={clientData?.cathaypacific}
              fallbackSrc="/images/cathay-pacific-logo.png"
              alt="Cathay Pacific"
            />
            <LogoItem 
              image={clientData?.liquidweb}
              fallbackSrc="/images/liquid-web-logo.png"
              alt="Liquid Web"
            />
            <LogoItem 
              image={clientData?.autotrader}
              fallbackSrc="/images/autotrader-logo.png"
              alt="AutoTrader"
            />
          </LogosRow>
        </LogosGrid>
      </Container>
    </ClientLogosContainer>
  );
};

export default ClientLogosSection;