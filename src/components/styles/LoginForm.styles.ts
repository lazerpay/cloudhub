import { styled } from '@mui/material/styles';
import { Paper, Typography, TextField, Button, Box } from '@mui/material';

export const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '500px',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4),
    boxShadow: 'none',
    backgroundColor: 'transparent',
    maxWidth: '100%',
  },
}));

export const FormTitle = styled(Typography)(({ theme }) => ({
  fontSize: '28px',
  fontWeight: theme.typography.h2.fontWeight,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
  textAlign: 'center',
}));

export const FormSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
  textAlign: 'center',
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius + 'px',
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.h6.fontWeight,
  textTransform: theme.typography.button.textTransform as 'none',
  padding: theme.spacing(1.5, 3),
  borderRadius: theme.shape.borderRadius + 'px',
  marginBottom: theme.spacing(3),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  '&:disabled': {
    backgroundColor: theme.palette.grey[300],
  },
}));

export const SocialButton = styled(Button)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[300]}`,
  color: theme.palette.text.primary,
  fontSize: theme.typography.caption.fontSize,
  fontWeight: theme.typography.h6.fontWeight,
  textTransform: theme.typography.button.textTransform as 'none',
  padding: theme.spacing(1.25, 2.5),
  borderRadius: theme.shape.borderRadius + 'px',
  marginBottom: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.grey[50],
  },
}));

export const DividerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: theme.spacing(3, 0),
  '& .MuiDivider-root': {
    flex: 1,
  },
}));

export const DividerText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  color: theme.palette.text.secondary,
  margin: theme.spacing(0, 2),
}));