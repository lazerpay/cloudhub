import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ResponsiveHeroSectionProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const HeroContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  textAlign: "center",
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[50]} 100%)`,
  
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(7, 0),
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(6, 0),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 0, 3, 0),
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: "54px",
  fontWeight: 600,
  lineHeight: "63px",
  letterSpacing: "-1.5px",
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(3),
  
  [theme.breakpoints.down("lg")]: {
    fontSize: "48px",
    lineHeight: "56px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "42px",
    lineHeight: "50px",
    marginBottom: theme.spacing(2.5),
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
    lineHeight: "38px",
    letterSpacing: "-1px",
    marginBottom: theme.spacing(2),
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "28px",
    lineHeight: "34px",
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "30px",
  color: theme.palette.text.secondary,
  maxWidth: "600px",
  margin: "0 auto",
  marginBottom: theme.spacing(4),
  
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
    lineHeight: "28px",
    maxWidth: "500px",
    marginBottom: theme.spacing(3.5),
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    lineHeight: "24px",
    maxWidth: "100%",
    marginBottom: theme.spacing(3),
    paddingX: theme.spacing(1),
  },
}));

const ResponsiveHeroSection: React.FC<ResponsiveHeroSectionProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <HeroContainer>
      <Container 
        maxWidth="lg" 
        sx={{ 
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
        {children}
      </Container>
    </HeroContainer>
  );
};

export default ResponsiveHeroSection;