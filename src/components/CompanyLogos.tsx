import React from 'react';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const LogosContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default
}));

const LogosImage = styled('img')({
  width: '100%',
  height: 'auto',
  maxWidth: '1280px',
  display: 'block',
  margin: '0 auto'
});

const CompanyLogos: React.FC = () => {
  return (
    <LogosContainer>
      <Container maxWidth="xl">
        <LogosImage 
          src="/images/company-logos.svg" 
          alt="Trusted by companies like Patreon, Airbnb, Fiberplane, Coinbase, Griffin, Help Scout, and Plaid"
        />
      </Container>
    </LogosContainer>
  );
};

export default CompanyLogos;