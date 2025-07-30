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
  [theme.breakpoints.down('md')]: {
    minHeight: 'auto',
    height: 'auto',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    overflow: 'visible',
  },
}));

export const HeroContent = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  textAlign: 'center',
  zIndex: 2,
  maxWidth: '900px',
  margin: '0 auto',
  transform: 'translateY(-10vh)',
  padding: theme.spacing(0, 2),
  [theme.breakpoints.down('md')]: {
    transform: 'none',
    maxWidth: '100%',
    padding: theme.spacing(0, 3),
    alignItems: 'flex-start',
    textAlign: 'left',
    margin: 0,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 2),
  },
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(3),
  fontWeight: 600,
  lineHeight: 1.2,
  [theme.breakpoints.down('md')]: {
    fontSize: '42px',
    lineHeight: '50px',
    marginBottom: theme.spacing(2),
    textAlign: 'left',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '32px',
    lineHeight: '38px',
    marginBottom: theme.spacing(2),
    textAlign: 'left',
  },
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
  maxWidth: '600px',
  margin: `0 auto ${theme.spacing(4)} auto`,
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    lineHeight: '24px',
    marginBottom: theme.spacing(3),
    maxWidth: '100%',
    margin: `0 0 ${theme.spacing(3)} 0`,
    textAlign: 'left',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    lineHeight: '24px',
    marginBottom: theme.spacing(3),
    textAlign: 'left',
  },
}));

export const GetInTouchLink = styled(Typography)(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.secondary,
  cursor: 'pointer',
  fontSize: '14px',
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    textAlign: 'left',
  },
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const HeroBackgroundImage = styled('img')(({ theme }) => ({
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
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const HeroButtonContainer = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  spacing: 2,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '280px',
    alignItems: 'flex-start',
    margin: 0,
  },
}));