import { styled } from '@mui/material/styles';
import { Box, Typography, Stack } from '@mui/material';

export const ClientLogosContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0, 12, 0),
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0, 8, 0)
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0, 6, 0)
  }
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  color: theme.palette.text.primary,
  textAlign: 'center',
  marginBottom: theme.spacing(7),
  [theme.breakpoints.down('lg')]: {
    fontSize: '48px',
    lineHeight: '56px',
    marginBottom: theme.spacing(6)
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '42px',
    lineHeight: '50px',
    marginBottom: theme.spacing(5)
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '32px',
    lineHeight: '38px',
    letterSpacing: '-1px',
    marginBottom: theme.spacing(4)
  }
}));

export const LogosGrid = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(3)
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2)
  }
}));

export const LogosRow = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(4),
  [theme.breakpoints.down('lg')]: {
    gap: theme.spacing(3)
  },
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing(2)
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(3)
  }
}));

export const LogoImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  maxWidth: '180px',
  maxHeight: '60px',
  objectFit: 'contain',
  opacity: 1,
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('md')]: {
    maxWidth: '140px',
    maxHeight: '50px'
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '120px',
    maxHeight: '40px'
  }
}));