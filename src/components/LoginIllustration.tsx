import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LoginIllustrationIcon from './icons/LoginIllustrationIcon';

const IllustrationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  padding: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2)
  }
}));

const StyledIllustration = styled(LoginIllustrationIcon)(({ theme }) => ({
  width: '100%',
  maxWidth: '450px',
  height: 'auto',
  [theme.breakpoints.down('lg')]: {
    maxWidth: '380px'
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '320px'
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '250px'
  }
}));

const LoginIllustration: React.FC = () => {
  return (
    <IllustrationContainer>
      <StyledIllustration />
    </IllustrationContainer>
  );
};

export default LoginIllustration;