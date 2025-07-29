import { styled } from '@mui/material/styles';
import { Box, Typography, Stack } from '@mui/material';

export const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
}));

export const HeroContent = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  textAlign: 'center',
  zIndex: 2,
  maxWidth: '900px',
  margin: '0 auto',
  transform: 'translateY(-10vh)',
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    fontSize: '42px',
    lineHeight: '50px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '32px',
    lineHeight: '38px',
  },
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
  maxWidth: '600px',
  margin: `0 auto ${theme.spacing(4)} auto`,
}));

export const GetInTouchLink = styled(Typography)(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.secondary,
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const HeroBackgroundImage = styled('img')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  zIndex: 1,
  opacity: 0.8,
  objectFit: 'contain',
});