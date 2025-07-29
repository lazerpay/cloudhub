import React from 'react';
import {
  Paper,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from './Button';
import CheckIcon from '../icons/CheckIcon';

interface PricingCardProps {
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

const Card = styled(Paper)<{ popular?: boolean }>(({ theme, popular }) => ({
  padding: theme.spacing(4),
  borderRadius: '16px',
  border: popular
    ? `2px solid ${theme.palette.primary.main}`
    : '1px solid rgba(0, 0, 0, 0.1)',
  position: 'relative',
  maxWidth: '350px',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    maxWidth: '100%',
  },
}));

const PopularBadge = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: -12,
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: 600,
  fontSize: '12px',
}));

const PlanName = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
}));

const PlanDescription = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(3),
}));

const PriceContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const Price = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  fontWeight: 700,
  color: theme.palette.text.primary,
  lineHeight: 1,
}));

const PriceUnit = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  color: theme.palette.text.secondary,
  marginLeft: theme.spacing(1),
}));

const FeatureList = styled(List)(({ theme }) => ({
  padding: 0,
}));

const FeatureItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0.5, 0),
  alignItems: 'flex-start',
}));

const FeatureIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 24,
  marginTop: theme.spacing(0.5),
}));

const FeatureText = styled(ListItemText)(({ theme }) => ({
  margin: 0,
  '& .MuiListItemText-primary': {
    fontSize: '14px',
    color: theme.palette.text.primary,
  },
}));

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  description,
  price,
  unit,
  features,
  buttonText,
  buttonVariant = 'secondary',
  popular = false,
  onButtonClick,
}) => {
  return (
    <Card popular={popular}>
      {popular && <PopularBadge label="Most Popular" />}
      
      <PlanName>{name}</PlanName>
      <PlanDescription>{description}</PlanDescription>
      
      <PriceContainer>
        <Stack direction="row" alignItems="baseline">
          <Price>{price}</Price>
          {unit && <PriceUnit>{unit}</PriceUnit>}
        </Stack>
      </PriceContainer>
      
      <Button
        variant={buttonVariant}
        fullWidth
        onClick={onButtonClick}
        sx={{ marginBottom: 3 }}
      >
        {buttonText}
      </Button>
      
      <FeatureList>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureIcon>
              <CheckIcon width={16} height={16} color="#22C55E" />
            </FeatureIcon>
            <FeatureText primary={feature} />
          </FeatureItem>
        ))}
      </FeatureList>
    </Card>
  );
};

export default PricingCard;