import React from 'react';
import { Stack, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ResponsivePricingGridProps {
  children: React.ReactNode;
}

const GridContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacing(4),
  justifyContent: "center",
  alignItems: "stretch",
  flexWrap: "wrap",
  minHeight: "fit-content",
  
  // Ensure all direct children have equal height
  "& > *": {
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
  },
  
  // Large screens (3 cards in a row)
  [theme.breakpoints.up("lg")]: {
    gap: theme.spacing(4),
    maxWidth: "1200px",
    margin: "0 auto",
    "& > *": {
      flex: "1 1 350px",
      maxWidth: "350px",
    },
  },
  
  // Medium screens (3 cards but closer together)
  [theme.breakpoints.between("md", "lg")]: {
    gap: theme.spacing(3),
    maxWidth: "1000px",
    margin: "0 auto",
    "& > *": {
      flex: "1 1 320px",
      maxWidth: "320px",
    },
  },
  
  // Small to medium screens (stacked vertically)
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(3),
    flexWrap: "nowrap",
    maxWidth: "400px",
    margin: "0 auto",
    "& > *": {
      flex: "none",
      width: "100%",
      maxWidth: "400px",
    },
  },
  
  // Extra small screens
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(2),
    maxWidth: "100%",
    "& > *": {
      maxWidth: "100%",
    },
  },
}));

const ResponsivePricingGrid: React.FC<ResponsivePricingGridProps> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <GridContainer>
      {children}
    </GridContainer>
  );
};

export default ResponsivePricingGrid;