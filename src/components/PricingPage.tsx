import React from 'react';
import { Box, Typography, Stack, Container, Button, Paper, List, ListItem, ListItemIcon, ListItemText, Chip, ToggleButton, ToggleButtonGroup, CircularProgress, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useQuery } from '@apollo/client';
import { GET_PRICING_PAGE, GetPricingPageData, PricingPlan } from '../graphql/queries';
import CheckIcon from './icons/CheckIcon';
import Header from './Header';
import Footer from './Footer';

const PricingContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default
}));

const HeroSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0)
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0)
  }
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '54px',
  fontWeight: 600,
  lineHeight: '63px',
  letterSpacing: '-1.5px',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('lg')]: {
    fontSize: '48px',
    lineHeight: '56px'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '42px',
    lineHeight: '50px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '32px',
    lineHeight: '38px',
    letterSpacing: '-1px'
  }
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 400,
  lineHeight: '30px',
  color: theme.palette.text.secondary,
  maxWidth: '600px',
  margin: '0 auto',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
    lineHeight: '28px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    lineHeight: '24px'
  }
}));

const BillingToggle = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  borderRadius: '32px',
  padding: theme.spacing(0.5),
  marginBottom: theme.spacing(6),
  '& .MuiToggleButton-root': {
    border: 'none',
    borderRadius: '28px',
    padding: theme.spacing(1, 3),
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'none',
    color: theme.palette.text.secondary,
    '&.Mui-selected': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.text.primary,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      '&:hover': {
        backgroundColor: theme.palette.common.white
      }
    },
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
}));

const SavingsBadge = styled(Chip)<{ visible?: boolean }>(({ theme, visible }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: '12px',
  fontWeight: 600,
  marginLeft: theme.spacing(1.5),
  opacity: visible ? 1 : 0.5,
  transition: 'opacity 0.3s ease'
}));

const ToggleContainer = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(6)
}));

const PricingSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0)
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0)
  }
}));

const PricingGrid = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(4),
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(3)
  }
}));

const PricingCard = styled(Paper)<{ popular?: boolean }>(({ theme, popular }) => ({
  padding: theme.spacing(4),
  borderRadius: '16px',
  border: popular ? `2px solid ${theme.palette.primary.main}` : '1px solid rgba(0, 0, 0, 0.1)',
  position: 'relative',
  maxWidth: '350px',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    maxWidth: '100%'
  }
}));

const PopularBadge = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: -12,
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: 600,
  fontSize: '12px'
}));

const PlanName = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1)
}));

const PlanDescription = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(3)
}));

const PriceContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3)
}));

const Price = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  fontWeight: 700,
  color: theme.palette.text.primary,
  lineHeight: 1
}));

const PriceUnit = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  color: theme.palette.text.secondary,
  marginLeft: theme.spacing(1)
}));

const OriginalPrice = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  color: theme.palette.text.secondary,
  textDecoration: 'line-through',
  marginTop: theme.spacing(0.5)
}));

const PricingButton = styled(Button)<{ variant: 'primary' | 'secondary' }>(({ theme, variant }) => ({
  width: '100%',
  padding: '12px 24px',
  borderRadius: '32px',
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  marginBottom: theme.spacing(3),
  ...(variant === 'primary' ? {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    }
  } : {
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    border: '1px solid rgba(0, 0, 0, 0.2)',
    '&:hover': {
      backgroundColor: theme.palette.grey[50]
    }
  })
}));

const FeatureList = styled(List)(({ theme }) => ({
  padding: 0
}));

const FeatureItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(0.5, 0),
  alignItems: 'flex-start'
}));

const FeatureIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 24,
  marginTop: theme.spacing(0.5)
}));

const FeatureText = styled(ListItemText)(({ theme }) => ({
  margin: 0,
  '& .MuiListItemText-primary': {
    fontSize: '14px',
    color: theme.palette.text.primary
  }
}));

const CTASection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0)
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0)
  }
}));

const CTATitle = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    fontSize: '28px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px'
  }
}));

const CTASubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
  maxWidth: '500px',
  margin: '0 auto',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px'
  }
}));

const CTAButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  padding: '12px 32px',
  borderRadius: '32px',
  marginTop: theme.spacing(3),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  }
}));

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '400px'
}));

const ErrorContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '400px',
  padding: theme.spacing(4)
}));

const fallbackPricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small teams getting started',
    monthlyPrice: 'Free',
    yearlyPrice: 'Free',
    features: [
      'Up to 5 team members',
      'Basic project management',
      '10GB storage',
      'Email support',
      'Basic integrations'
    ],
    buttonText: 'Get Started',
    buttonVariant: 'secondary' as const
  },
  {
    name: 'Professional',
    description: 'Best for growing teams and businesses',
    monthlyPrice: '$29',
    yearlyPrice: '$24',
    originalYearlyPrice: '$29',
    popular: true,
    features: [
      'Up to 50 team members',
      'Advanced project management',
      '100GB storage',
      'Priority support',
      'All integrations',
      'Custom workflows',
      'Analytics & reporting'
    ],
    buttonText: 'Start Free Trial',
    buttonVariant: 'primary' as const
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    monthlyPrice: '$99',
    yearlyPrice: '$79',
    originalYearlyPrice: '$99',
    features: [
      'Unlimited team members',
      'Enterprise project management',
      'Unlimited storage',
      '24/7 dedicated support',
      'Custom integrations',
      'Advanced security',
      'Custom branding',
      'API access'
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'secondary' as const
  }
];

const PricingPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = React.useState<'monthly' | 'yearly'>('monthly');
  const { loading, error, data } = useQuery<GetPricingPageData>(GET_PRICING_PAGE);

  const handleBillingChange = (
    event: React.MouseEvent<HTMLElement>,
    newBillingPeriod: 'monthly' | 'yearly'
  ) => {
    if (newBillingPeriod !== null) {
      setBillingPeriod(newBillingPeriod);
    }
  };

  const transformPlanData = (plan: PricingPlan, isPopular: boolean = false) => {
    // Ensure features is always an array
    let features: string[] = [];
    if (Array.isArray(plan.features)) {
      features = plan.features;
    } else if (typeof plan.features === 'string') {
      // If features is a string, split by newlines or commas
      features = plan.features.split(/\n|,/).map(f => f.trim()).filter(f => f.length > 0);
    }

    // Remove asterisk marks from feature text
    const cleanedFeatures = features.map(feature => 
      feature.replace(/^\*\s*/, '').trim()
    );

    return {
      name: plan.planname,
      description: plan.fitfor,
      monthlyPrice: plan.monthlyprice,
      yearlyPrice: plan.yearlyprice,
      features: cleanedFeatures,
      buttonText: plan.ctatext,
      buttonVariant: isPopular ? 'primary' as const : 'secondary' as const,
      popular: isPopular
    };
  };

  const getPrice = (plan: any) => {
    return billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getUnit = () => {
    return billingPeriod === 'monthly' ? '/month' : '/year';
  };

  if (loading) {
    return (
      <PricingContainer>
        <Header />
        <LoadingContainer>
          <CircularProgress size={60} />
        </LoadingContainer>
        <Footer />
      </PricingContainer>
    );
  }

  if (error) {
    return (
      <PricingContainer>
        <Header />
        <ErrorContainer>
          <Alert severity="error" sx={{ maxWidth: 600 }}>
            Failed to load pricing data. Please try again later.
          </Alert>
        </ErrorContainer>
        <Footer />
      </PricingContainer>
    );
  }

  const pricingData = data?.pricingpage;
  const pricingPlans = pricingData ? [
    transformPlanData(pricingData.starterplan),
    transformPlanData(pricingData.professionalplan, true),
    transformPlanData(pricingData.enterpriseplan)
  ] : fallbackPricingPlans;

  const heroTitle = pricingData?.title || "Simple, transparent pricing";
  const heroSubtitle = pricingData?.subtitle || "Choose the perfect plan for your team. Start free and scale as you grow.";

  return (
    <PricingContainer>
      <Header />
      
      <HeroSection>
        <Container maxWidth="lg">
          <HeroTitle>
            {heroTitle}
          </HeroTitle>
          <HeroSubtitle>
            {heroSubtitle}
          </HeroSubtitle>
          
          <ToggleContainer direction="row" spacing={1.5}>
            <BillingToggle
              value={billingPeriod}
              exclusive
              onChange={handleBillingChange}
              aria-label="billing period"
            >
              <ToggleButton value="monthly" aria-label="monthly billing">
                Monthly
              </ToggleButton>
              <ToggleButton value="yearly" aria-label="yearly billing">
                Yearly
              </ToggleButton>
            </BillingToggle>
            <SavingsBadge 
              label="Save 20%" 
              visible={billingPeriod === 'yearly'}
            />
          </ToggleContainer>
        </Container>
      </HeroSection>

      <PricingSection>
        <Container maxWidth="lg">
          <PricingGrid>
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} popular={plan.popular}>
                {plan.popular && <PopularBadge label="Most Popular" />}
                
                <PlanName>{plan.name}</PlanName>
                <PlanDescription>{plan.description}</PlanDescription>
                
                <PriceContainer>
                  <Stack direction="row" alignItems="baseline">
                    <Price>{getPrice(plan)}</Price>
                    {getPrice(plan) !== 'Free' && (
                      <PriceUnit>{getUnit()}</PriceUnit>
                    )}
                  </Stack>
                </PriceContainer>
                
                <PricingButton variant={plan.buttonVariant}>
                  {plan.buttonText}
                </PricingButton>
                
                <FeatureList>
                  {plan.features.map((feature, index) => (
                    <FeatureItem key={index}>
                      <FeatureIcon>
                        <CheckIcon width={16} height={16} color="#22C55E" />
                      </FeatureIcon>
                      <FeatureText primary={feature} />
                    </FeatureItem>
                  ))}
                </FeatureList>
              </PricingCard>
            ))}
          </PricingGrid>
        </Container>
      </PricingSection>

      <CTASection>
        <Container maxWidth="lg">
          <CTATitle>
            {pricingData?.bottomctasectiontitle || "Ready to get started?"}
          </CTATitle>
          <CTASubtitle>
            {pricingData?.bottomctasectionsubtitle || "Join thousands of teams already using our platform to streamline their workflow."}
          </CTASubtitle>
          <CTAButton>
            {pricingData?.bottomctatext || "Start your free trial"}
          </CTAButton>
        </Container>
      </CTASection>

      <Footer />
    </PricingContainer>
  );
};

export default PricingPage;