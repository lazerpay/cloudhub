import React from 'react';
import { Container } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_HOMEPAGE_DATA, GetHomepageData, HeroImage } from '../graphql/homepage';
import LoadingSpinner from './LoadingSpinner';
import { fallbackClientTitle, staticImagePaths, errorMessages } from '../data/fallbackData';
import {
  ClientLogosContainer,
  SectionTitle,
  LogosGrid,
  LogosRow,
  LogoImage,
} from './styles/ClientLogosSection.styles';


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