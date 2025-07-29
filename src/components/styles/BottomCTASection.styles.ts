import { styled } from '@mui/material/styles';
import { Box, Typography, Stack } from '@mui/material';

export const CTAContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.grey[200]}`,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0)
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0)
  }
}));

export const CTAContent = styled(Stack)(({ theme }) => ({
  textAlign: 'center',
  alignItems: 'center'
}));

export const CTAIcon = styled(Box)(({ theme }) => ({
  width: 94,
  height: 94,
  background: `linear-gradient(315deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  borderRadius: theme.shape.borderRadius + 'px',
  marginBottom: theme.spacing(5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: 80,
    height: 80,
    marginBottom: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    width: 64,
    height: 64,
    marginBottom: theme.spacing(3)
  }
}));

export const CTAImage = styled('img')(({ theme }) => ({
  width: 94,
  height: 94,
  objectFit: 'contain',
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    width: 80,
    height: 80,
    marginBottom: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    width: 64,
    height: 64,
    marginBottom: theme.spacing(3)
  }
}));

export const CTATitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h2,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    marginBottom: theme.spacing(2.5)
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    marginBottom: theme.spacing(2),
    lineHeight: '28px'
  }
}));

export const CTASubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: theme.typography.body1.fontWeight,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(6),
  maxWidth: '600px',
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.body1.fontSize,
    marginBottom: theme.spacing(5),
    maxWidth: '500px'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.body2.fontSize,
    marginBottom: theme.spacing(4),
    maxWidth: '300px',
    lineHeight: theme.typography.body2.lineHeight
  }
}));

export const CTAButtons = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(2.5),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
    width: '100%'
  }
}));