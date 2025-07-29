import React from 'react';
import { CircularProgress, Alert } from '@mui/material';
import {
  LoadingContainer,
  ErrorContainer,
  SectionLoadingContainer,
  SectionErrorContainer,
} from './styles/LoadingSpinner.styles';

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