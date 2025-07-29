import React from 'react';
import { Box, CircularProgress, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
}));

const ErrorContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: theme.spacing(4),
}));

const SectionLoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '400px',
}));

const SectionErrorContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '400px',
  padding: theme.spacing(4),
}));

interface LoadingSpinnerProps {
  size?: number;
  variant?: 'fullscreen' | 'section';
  error?: Error | null;
  errorMessage?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 60,
  variant = 'fullscreen',
  error,
  errorMessage = 'Failed to load content. Please try again later.'
}) => {
  const Container = variant === 'fullscreen' ? LoadingContainer : SectionLoadingContainer;
  const ErrorContainerComponent = variant === 'fullscreen' ? ErrorContainer : SectionErrorContainer;

  if (error) {
    return (
      <ErrorContainerComponent>
        <Alert severity="error" sx={{ maxWidth: 600 }}>
          {errorMessage}
        </Alert>
      </ErrorContainerComponent>
    );
  }

  return (
    <Container>
      <CircularProgress size={size} />
    </Container>
  );
};

export default LoadingSpinner;