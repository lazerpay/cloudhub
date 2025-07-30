import React from 'react';
import { Container, useMediaQuery, useTheme } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_HOMEPAGE_DATA, GetHomepageData, HeroImage } from '../graphql/homepage';
import LoadingSpinner from './LoadingSpinner';
import {
  LogosContainer,
  LogosGrid,
  LogoImage,
  LogoWrapper,
} from './styles/CompanyLogos.styles';

interface LogoItemProps {
  image?: HeroImage;
  alt: string;
  fallbackSrc?: string;
}

const LogoItem: React.FC<LogoItemProps> = ({ image, alt, fallbackSrc }) => {
  // Don't render if no image URL is available
  if (!image?.url && !fallbackSrc) {
    return null;
  }

  return (
    <LogoWrapper>
      <LogoImage 
        src={image?.url || fallbackSrc}
        alt={image?.alt || alt}
      />
    </LogoWrapper>
  );
};

const CompanyLogos: React.FC = () => {
  const { loading, error, data } = useQuery<GetHomepageData>(GET_HOMEPAGE_DATA);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (loading) {
    return (
      <LogosContainer>
        <Container maxWidth="xl">
          <LoadingSpinner variant="section" />
        </Container>
      </LogosContainer>
    );
  }

  if (error) {
    return (
      <LogosContainer>
        <Container maxWidth="xl">
          <LoadingSpinner 
            variant="section" 
            error={error}
            errorMessage="Failed to load company logos"
          />
        </Container>
      </LogosContainer>
    );
  }

  const companyLogos = data?.homepage?.companylogossection;

  // Define all logos with their data
  const allLogos = [
    { image: companyLogos?.patreon, alt: "Patreon" },
    { image: companyLogos?.airbnb, alt: "Airbnb" },
    { image: companyLogos?.fiberplane, alt: "Fiberplane" },
    { image: companyLogos?.coinbase, alt: "Coinbase" },
    { image: companyLogos?.griffin, alt: "Griffin" },
    { image: companyLogos?.helpscout, alt: "Help Scout" },
    { image: companyLogos?.plaid, alt: "Plaid" },
  ];

  // On mobile, show only first 6 logos (excluding plaid which is last)
  const logosToShow = isMobile ? allLogos.slice(0, 6) : allLogos;

  return (
    <LogosContainer>
      <Container maxWidth="xl">
        <LogosGrid>
          {logosToShow.map((logo, index) => (
            <LogoItem 
              key={logo.alt}
              image={logo.image}
              alt={logo.alt}
            />
          ))}
        </LogosGrid>
      </Container>
    </LogosContainer>
  );
};

export default CompanyLogos;