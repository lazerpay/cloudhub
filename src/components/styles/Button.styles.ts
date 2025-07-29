import { styled } from '@mui/material/styles';
import { Button as MuiButton } from '@mui/material';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

export const StyledButton = styled(MuiButton)<{ 
  buttonvariant: ButtonVariant; 
  buttonsize: ButtonSize;
}>(({ theme, buttonvariant, buttonsize }) => {
  const sizeStyles = {
    small: {
      padding: theme.spacing(1, 2),
      fontSize: theme.typography.caption.fontSize,
      borderRadius: '20px',
    },
    medium: {
      padding: theme.spacing(1.5, 3),
      fontSize: theme.typography.body2.fontSize,
      borderRadius: '24px',
    },
    large: {
      padding: theme.spacing(1.5, 4),
      fontSize: theme.typography.body2.fontSize,
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
      border: `1px solid ${theme.palette.grey[300]}`,
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
      backgroundColor: theme.palette.error?.main || '#d32f2f',
      color: theme.palette.error?.contrastText || theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.error?.dark || '#b71c1c',
      },
      '&:disabled': {
        backgroundColor: theme.palette.grey[300],
        color: theme.palette.grey[500],
      },
    },
  };

  return {
    fontWeight: theme.typography.button.fontWeight,
    textTransform: theme.typography.button.textTransform as 'none',
    transition: 'all 0.2s ease-in-out',
    ...sizeStyles[buttonsize],
    ...variantStyles[buttonvariant],
  };
});