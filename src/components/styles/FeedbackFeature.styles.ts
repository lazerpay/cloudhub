import { styled } from '@mui/material/styles';
import { Box, Typography, Stack, Chip, Button } from '@mui/material';

export const FeatureContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: theme.palette.background.default
}));

export const FeatureGrid = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(10),
    justifyContent: 'space-evenly'
  }
}));

export const FeatureContent = styled(Stack)(({ theme }) => ({
  flex: 1,
  maxWidth: '547px',
  order: { xs: 1, md: 2 }
}));

export const FeatureImage = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  order: { xs: 2, md: 1 }
}));

export const FeatureChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: theme.typography.caption.fontSize,
  fontWeight: theme.typography.h6.fontWeight,
  marginBottom: theme.spacing(2),
  width: 'fit-content'
}));

export const FeatureTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    fontSize: '42px',
    lineHeight: '50px'
  }
}));

export const FeatureDescription = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4)
}));

export const DemoButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.h6.fontWeight,
  textTransform: theme.typography.button.textTransform as 'none',
  padding: 0,
  justifyContent: 'flex-start',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline'
  }
}));

export const PlayIconContainer = styled(Box)(({ theme }) => ({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(1)
}));

export const MockupImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '650px',
  height: 'auto',
  borderRadius: '24px'
}));