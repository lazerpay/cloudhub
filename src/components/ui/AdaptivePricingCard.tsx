import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import PricingCard from './PricingCard';
import MobilePricingCard from './MobilePricingCard';

interface AdaptivePricingCardProps {
  name: string;
  description: string;
  price: string;
  unit?: string;
  features: string[];
  buttonText: string;
  buttonVariant?: 'primary' | 'secondary';
  popular?: boolean;
  onButtonClick?: () => void;
}

const AdaptivePricingCard: React.FC<AdaptivePricingCardProps> = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return isMobile ? (
    <MobilePricingCard {...props} />
  ) : (
    <PricingCard {...props} />
  );
};

export default AdaptivePricingCard;