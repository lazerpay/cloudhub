import { styled } from '@mui/material/styles';
import { AppBar, Button, IconButton, Stack, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: 'none',
  borderBottom: 'none',
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.appBar,
}));

export const NavButton = styled(Button)<{ active?: boolean }>(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  ...theme.typography.button,
  padding: theme.spacing(1, 2),
  position: 'relative',
  minWidth: 'auto',
  textDecoration: 'none',
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    fontWeight: 400,
    padding: theme.spacing(2, 0),
    width: '100%',
    justifyContent: 'flex-start',
    color: theme.palette.text.primary,
  },
  '&:hover': {
    backgroundColor: 'transparent',
    '&::after': {
      width: '100%',
    },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: active ? '100%' : '0%',
    height: '2px',
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.3s ease-in-out',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

export const NavLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

export const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  ...theme.typography.button,
  padding: theme.spacing(1.5, 3),
  borderRadius: '32px',
  minWidth: 'auto',
  fontSize: '14px',
  fontWeight: 600,
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    fontWeight: 600,
    padding: theme.spacing(2, 3),
    width: '100%',
    borderRadius: '32px',
    marginTop: theme.spacing(1),
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const LoginButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  ...theme.typography.button,
  padding: theme.spacing(1, 2),
  minWidth: 'auto',
  fontSize: '14px',
  fontWeight: 600,
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    fontWeight: 400,
    padding: theme.spacing(2, 0),
    width: '100%',
    justifyContent: 'flex-start',
    color: theme.palette.text.primary,
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  color: theme.palette.text.primary,
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
}));

export const DesktopNav = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const DesktopActions = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    padding: theme.spacing(3, 2),
    backgroundColor: theme.palette.background.default,
  },
}));

export const MobileMenuHeader = styled(Stack)(({ theme }) => ({
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  paddingBottom: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: theme.spacing(1),
}));