import { styled } from '@mui/material/styles';
import { Box, Typography, Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const FooterContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  backgroundColor: theme.palette.grey[50],
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 0),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3, 0),
  },
}));

export const FooterContent = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(3),
  },
}));

export const FooterTop = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'flex-start',
  gap: theme.spacing(17.5),
  [theme.breakpoints.down('lg')]: {
    gap: theme.spacing(8),
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(6),
    alignItems: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(4),
  },
}));

export const FooterLinks = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(10),
  [theme.breakpoints.down('lg')]: {
    gap: theme.spacing(6),
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(4),
    alignItems: 'center',
    textAlign: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(3),
  },
}));

export const FooterColumn = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1.5),
  },
}));

export const FooterColumnTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  fontWeight: theme.typography.h6.fontWeight,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.body2.fontSize,
    marginBottom: theme.spacing(0.5),
  },
}));

export const FooterLink = styled(Link)(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.body2.fontSize,
  },
  '&:hover': {
    color: theme.palette.text.primary,
    textDecoration: 'underline',
  },
}));

export const FooterRouterLink = styled(RouterLink)(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.body2.fontSize,
  },
  '&:hover': {
    color: theme.palette.text.primary,
    textDecoration: 'underline',
  },
}));

export const FooterBottom = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(4),
  borderTop: `1px solid ${theme.palette.grey[200]}`,
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(2),
  },
}));

export const CopyrightText = styled(Typography)(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}));

export const FooterLogoIcon = styled(Box)(({ theme }) => ({
  width: 94,
  height: 94,
  background: `linear-gradient(315deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  borderRadius: theme.shape.borderRadius + 'px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: 80,
    height: 80,
  },
  [theme.breakpoints.down('sm')]: {
    width: 64,
    height: 64,
  },
}));

export const FooterLogoImage = styled('img')(({ theme }) => ({
  width: 94,
  height: 94,
  objectFit: 'contain',
  [theme.breakpoints.down('md')]: {
    width: 80,
    height: 80,
  },
  [theme.breakpoints.down('sm')]: {
    width: 64,
    height: 64,
  },
}));