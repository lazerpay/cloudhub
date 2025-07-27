import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LoginIllustration from './LoginIllustration';
import LoginForm from './LoginForm';

const LoginContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}));

const LeftSection = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(8),
  position: 'relative',
  overflow: 'hidden',
  borderRight: `1px solid ${theme.palette.grey[200]}`,
  [theme.breakpoints.down('md')]: {
    minHeight: '40vh',
    padding: theme.spacing(4),
    borderRight: 'none',
    borderBottom: `1px solid ${theme.palette.grey[200]}`
  }
}));

const RightSection = styled(Box)(({ theme }) => ({
  flex: 1.2, // Expanded from flex: 1 to give more width
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(8),
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4)
  }
}));

interface LoginPageProps {
  onLogin?: (email: string, password: string, rememberMe: boolean) => Promise<void>;
  onSocialLogin?: (provider: 'google' | 'github') => Promise<void>;
  onForgotPassword?: (email: string) => Promise<void>;
  loading?: boolean;
  error?: string | null;
}

const LoginPage: React.FC<LoginPageProps> = ({
  onLogin,
  onSocialLogin,
  onForgotPassword,
  loading = false,
  error = null
}) => {
  return (
    <LoginContainer>
      <LeftSection>
        <LoginIllustration />
      </LeftSection>

      <RightSection>
        <LoginForm
          onLogin={onLogin}
          onSocialLogin={onSocialLogin}
          onForgotPassword={onForgotPassword}
          loading={loading}
          error={error}
        />
      </RightSection>
    </LoginContainer>
  );
};

export default LoginPage;