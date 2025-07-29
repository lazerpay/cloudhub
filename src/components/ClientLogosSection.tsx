import React from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import { GET_HOMEPAGE_DATA, GetHomepageData, HeroImage } from '../graphql/homepage';
import LoadingSpinner from './LoadingSpinner';
import { fallbackClientTitle, staticImagePaths, errorMessages } from '../data/fallbackData';

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
  const { loading, error, data } = useQuery<GetHomepageData>(GET_HOMEPAGE_DATA);

  if (loading || error) {
    return (
      <ClientLogosContainer>
        <LoadingSpinner 
          variant="section" 
          error={error} 
          errorMessage={errorMessages.homepageSections}
        />
      </ClientLogosContainer>
    );
  }

  const clientData = data?.homepage?.clientsection;

  return (
    <ClientLogosContainer>
      <Container maxWidth="xl">
        <SectionTitle>
          {clientData?.title || fallbackClientTitle}
        </SectionTitle>
        
        <LogosGrid>
          <LogosRow>
            <LogoItem 
              image={clientData?.crowdstrike}
              fallbackSrc={staticImagePaths.crowdstrikeLogo}
              alt="Crowdstrike"
            />
            <LogoItem 
              image={clientData?.airbus}
              fallbackSrc={staticImagePaths.airbusLogo}
              alt="Airbus"
            />
            <LogoItem 
              image={clientData?.hays}
              fallbackSrc={staticImagePaths.haysLogo}
              alt="Hays"
            />
            <LogoItem 
              image={clientData?.sentry}
              fallbackSrc={staticImagePaths.sentryLogo}
              alt="Sentry"
            />
          </LogosRow>
          
          <LogosRow>
            <LogoItem 
              image={clientData?.medwing}
              fallbackSrc={staticImagePaths.medwingLogo}
              alt="Medwing"
            />
            <LogoItem 
              image={clientData?.cathaypacific}
              fallbackSrc={staticImagePaths.cathayPacificLogo}
              alt="Cathay Pacific"
            />
            <LogoItem 
              image={clientData?.liquidweb}
              fallbackSrc={staticImagePaths.liquidWebLogo}
              alt="Liquid Web"
            />
            <LogoItem 
              image={clientData?.autotrader}
              fallbackSrc={staticImagePaths.autotraderLogo}
              alt="AutoTrader"
            />
          </LogosRow>
        </LogosGrid>
      </Container>
    </ClientLogosContainer>
  );
};

export default ClientLogosSection;