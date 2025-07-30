import { styled } from '@mui/material/styles';
import { Box, Stack } from '@mui/material';

export const LogosContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 0)
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 0)
  }
}));

export const LogosGrid = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(6),
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(5),
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(4),
    // On mobile, show 2 logos per row
    '& > *': {
      flexBasis: 'calc(50% - 16px)',
      maxWidth: 'calc(50% - 16px)',
    }
  }
}));

export const LogoImage = styled('img')(({ theme }) => ({
  height: '56px',
  width: 'auto',
  maxWidth: '160px',
  objectFit: 'contain',
  filter: 'grayscale(100%)',
  opacity: 0.7,
  transition: 'all 0.3s ease',
  '&:hover': {
    filter: 'grayscale(0%)',
    opacity: 1,
  },
  [theme.breakpoints.down('md')]: {
    height: '48px',
    maxWidth: '140px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '40px',
    maxWidth: '120px',
  }
}));

export const LogoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  }
}));