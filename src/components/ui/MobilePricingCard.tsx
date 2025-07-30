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
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from './Button';
import CheckIcon from '../icons/CheckIcon';

interface MobilePricingCardProps {
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

const MobileCard = styled(Paper)<{ popular?: boolean }>(({ theme, popular }) => ({
  padding: theme.spacing(3),
  borderRadius: '12px',
  border: popular
    ? `2px solid ${theme.palette.primary.main}`
    : '1px solid rgba(0, 0, 0, 0.1)',
  position: 'relative',
  width: '100%',
  maxWidth: '340px',
  margin: '0 auto',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  display: 'flex',
  flexDirection: 'column',
}));

const MobilePopularBadge = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: -10,
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: 600,
  fontSize: '11px',
  height: '20px',
}));

const MobilePlanHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(2.5),
}));

const MobilePlanName = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(0.5),
}));

const MobilePlanDescription = styled(Typography)(({ theme }) => ({
  fontSize: '13px',
  color: theme.palette.text.secondary,
  lineHeight: 1.4,
}));

const MobilePriceContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(2.5),
}));

const MobilePrice = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 700,
  color: theme.palette.text.primary,
  lineHeight: 1,
}));

const MobilePriceUnit = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: theme.palette.text.secondary,
  marginLeft: theme.spacing(0.5),
}));

const MobileFeatureList = styled(List)(({ theme }) => ({
  padding: 0,
  marginBottom: theme.spacing(2.5),
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
}));

const MobileFeatureItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0.5, 0),
  alignItems: 'flex-start',
}));

const MobileFeatureIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 20,
  marginTop: theme.spacing(0.25),
}));

const MobileFeatureText = styled(ListItemText)(({ theme }) => ({
  margin: 0,
  '& .MuiListItemText-primary': {
    fontSize: '13px',
    color: theme.palette.text.primary,
    lineHeight: 1.4,
  },
}));

const MobileCardContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));

const MobileCardFooter = styled(Box)(({ theme }) => ({}));

const MobilePricingCard: React.FC<MobilePricingCardProps> = ({
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!isMobile) {
    return null; // Only render on mobile
  }

  return (
    <MobileCard popular={popular}>
      {popular && <MobilePopularBadge label="Most Popular" />}
      
      <MobileCardContent>
        <Box>
          <MobilePlanHeader>
            <MobilePlanName>{name}</MobilePlanName>
            <MobilePlanDescription>{description}</MobilePlanDescription>
          </MobilePlanHeader>
          
          <MobilePriceContainer>
            <Stack direction="row" alignItems="baseline" justifyContent="center">
              <MobilePrice>{price}</MobilePrice>
              {unit && <MobilePriceUnit>{unit}</MobilePriceUnit>}
            </Stack>
          </MobilePriceContainer>
          
          <Button
            variant={buttonVariant}
            fullWidth
            onClick={onButtonClick}
            size="medium"
            sx={{ marginBottom: 2.5 }}
          >
            {buttonText}
          </Button>
        </Box>
        
        <MobileCardFooter>
          <MobileFeatureList>
            {features.map((feature, index) => (
              <MobileFeatureItem key={index}>
                <MobileFeatureIcon>
                  <CheckIcon width={14} height={14} color="#22C55E" />
                </MobileFeatureIcon>
                <MobileFeatureText primary={feature} />
              </MobileFeatureItem>
            ))}
          </MobileFeatureList>
        </MobileCardFooter>
      </MobileCardContent>
    </MobileCard>
  );
};

export default MobilePricingCard;