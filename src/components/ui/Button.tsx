import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const StyledButton = styled(MuiButton)<{ 
  buttonvariant: ButtonVariant; 
  buttonsize: ButtonSize;
}>(({ theme, buttonvariant, buttonsize }) => {
  const sizeStyles = {
    small: {
      padding: '8px 16px',
      fontSize: '14px',
      borderRadius: '20px',
    },
    medium: {
      padding: '12px 24px',
      fontSize: '16px',
      borderRadius: '24px',
    },
    large: {
      padding: '12px 32px',
      fontSize: '16px',
      borderRadius: '32px',
    },
  };

  const variantStyles = {
    primary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
      '&:disabled': {
        backgroundColor: theme.palette.grey[300],
        color: theme.palette.grey[500],
      },
    },
    secondary: {
      backgroundColor: 'transparent',
      color: theme.palette.text.primary,
      border: '1px solid rgba(0, 0, 0, 0.2)',
      '&:hover': {
        backgroundColor: theme.palette.grey[50],
      },
      '&:disabled': {
        backgroundColor: 'transparent',
        color: theme.palette.grey[400],
        borderColor: theme.palette.grey[300],
      },
    },
    outline: {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
      '&:disabled': {
        backgroundColor: 'transparent',
        color: theme.palette.grey[400],
        borderColor: theme.palette.grey[300],
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: theme.palette.grey[100],
      },
      '&:disabled': {
        backgroundColor: 'transparent',
        color: theme.palette.grey[400],
      },
    },
    danger: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.error.dark,
      },
      '&:disabled': {
        backgroundColor: theme.palette.grey[300],
        color: theme.palette.grey[500],
      },
    },
  };

  return {
    fontWeight: 600,
    textTransform: 'none',
    transition: 'all 0.2s ease-in-out',
    ...sizeStyles[buttonsize],
    ...variantStyles[buttonvariant],
  };
});

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  loading = false,
  children,
  disabled,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <StyledButton
      buttonvariant={variant}
      buttonsize={size}
      disabled={disabled || loading}
      startIcon={loading ? <CircularProgress size={16} color="inherit" /> : startIcon}
      endIcon={!loading ? endIcon : undefined}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;