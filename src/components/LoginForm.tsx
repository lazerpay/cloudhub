import React, { useState } from 'react';
import { 
  Typography, 
  Stack, 
  TextField, 
  Button, 
  Checkbox, 
  FormControlLabel, 
  Link, 
  Divider, 
  Paper, 
  CircularProgress, 
  Alert, 
  IconButton, 
  InputAdornment,
  Box 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '500px', // Expanded from 400px
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4),
    boxShadow: 'none',
    backgroundColor: 'transparent',
    maxWidth: '100%'
  }
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  fontSize: '28px',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
  textAlign: 'center'
}));

const FormSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
  textAlign: 'center'
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px'
  }
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: '16px',
  fontWeight: 600,
  textTransform: 'none',
  padding: '12px 24px',
  borderRadius: '8px',
  marginBottom: theme.spacing(3),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  },
  '&:disabled': {
    backgroundColor: theme.palette.grey[300]
  }
}));

const SocialButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  color: theme.palette.text.primary,
  fontSize: '14px',
  fontWeight: 600,
  textTransform: 'none',
  padding: '10px 20px',
  borderRadius: '8px',
  marginBottom: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.grey[50]
  }
}));

const DividerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: theme.spacing(3, 0),
  '& .MuiDivider-root': {
    flex: 1
  }
}));

const DividerText = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: theme.palette.text.secondary,
  margin: theme.spacing(0, 2)
}));

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface LoginFormProps {
  onLogin?: (email: string, password: string, rememberMe: boolean) => Promise<void>;
  onSocialLogin?: (provider: 'google' | 'github') => Promise<void>;
  onForgotPassword?: (email: string) => Promise<void>;
  loading?: boolean;
  error?: string | null;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onLogin,
  onSocialLogin,
  onForgotPassword,
  loading = false,
  error = null
}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const errors: { email?: string; password?: string } = {};

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field: keyof LoginFormData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = field === 'rememberMe' ? event.target.checked : event.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear field error when user starts typing
    if (formErrors[field as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      if (onLogin) {
        await onLogin(formData.email, formData.password, formData.rememberMe);
      } else {
        // Mock login success
        console.log('Login successful:', formData);
        navigate('/');
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'github') => {
    try {
      if (onSocialLogin) {
        await onSocialLogin(provider);
      } else {
        // Mock social login
        console.log(`${provider} login successful`);
        navigate('/');
      }
    } catch (err) {
      console.error(`${provider} login failed:`, err);
    }
  };

  const handleForgotPassword = () => {
    if (onForgotPassword && formData.email) {
      onForgotPassword(formData.email);
    } else {
      console.log('Forgot password clicked');
    }
  };

  const isFormValid = formData.email && formData.password && Object.keys(formErrors).length === 0;

  return (
    <FormContainer>
      <FormTitle>Welcome back</FormTitle>
      <FormSubtitle>Sign in to your account</FormSubtitle>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <StyledTextField
          fullWidth
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleInputChange('email')}
          error={!!formErrors.email}
          helperText={formErrors.email}
          disabled={loading}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon color="action" />
              </InputAdornment>
            )
          }}
        />

        <StyledTextField
          fullWidth
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={handleInputChange('password')}
          error={!!formErrors.password}
          helperText={formErrors.password}
          disabled={loading}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon color="action" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  disabled={loading}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.rememberMe}
                onChange={handleInputChange('rememberMe')}
                disabled={loading}
              />
            }
            label="Remember me"
          />
          <Link
            component="button"
            type="button"
            onClick={handleForgotPassword}
            sx={{ textDecoration: 'none', fontSize: '14px' }}
            disabled={loading}
          >
            Forgot password?
          </Link>
        </Stack>

        <SubmitButton
          fullWidth
          type="submit"
          disabled={!isFormValid || loading}
          startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </SubmitButton>
      </form>

      <DividerContainer>
        <Divider />
        <DividerText>Or continue with</DividerText>
        <Divider />
      </DividerContainer>

      <Stack spacing={2}>
        <SocialButton
          fullWidth
          onClick={() => handleSocialLogin('google')}
          disabled={loading}
          startIcon={<GoogleIcon />}
        >
          Continue with Google
        </SocialButton>
        <SocialButton
          fullWidth
          onClick={() => handleSocialLogin('github')}
          disabled={loading}
          startIcon={<GitHubIcon />}
        >
          Continue with GitHub
        </SocialButton>
      </Stack>

      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Typography variant="body2" color="text.secondary">
          Don't have an account?{' '}
          <Link
            component="button"
            type="button"
            onClick={() => navigate('/signup')}
            sx={{ textDecoration: 'none', fontWeight: 600 }}
            disabled={loading}
          >
            Sign up
          </Link>
        </Typography>
      </Box>
    </FormContainer>
  );
};

export default LoginForm;