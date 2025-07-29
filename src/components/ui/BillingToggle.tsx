import React from 'react';
import {
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';

interface BillingToggleProps {
  value: 'monthly' | 'yearly';
  onChange: (event: React.MouseEvent<HTMLElement>, newValue: 'monthly' | 'yearly') => void;
  showSavingsBadge?: boolean;
  savingsText?: string;
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  borderRadius: '32px',
  padding: theme.spacing(0.5),
  marginBottom: theme.spacing(6),
  '& .MuiToggleButton-root': {
    border: 'none',
    borderRadius: '28px',
    padding: theme.spacing(1, 3),
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'none',
    color: theme.palette.text.secondary,
    '&.Mui-selected': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.text.primary,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      '&:hover': {
        backgroundColor: theme.palette.common.white,
      },
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

const SavingsBadge = styled(Chip)<{ visible?: boolean }>(
  ({ theme, visible }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontSize: '12px',
    fontWeight: 600,
    marginLeft: theme.spacing(1.5),
    opacity: visible ? 1 : 0.5,
    transition: 'opacity 0.3s ease',
  })
);

const ToggleContainer = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(6),
}));

const BillingToggle: React.FC<BillingToggleProps> = ({
  value,
  onChange,
  showSavingsBadge = false,
  savingsText = 'Save 20%',
}) => {
  return (
    <ToggleContainer direction="row" spacing={1.5}>
      <StyledToggleButtonGroup
        value={value}
        exclusive
        onChange={onChange}
        aria-label="billing period"
      >
        <ToggleButton value="monthly" aria-label="monthly billing">
          Monthly
        </ToggleButton>
        <ToggleButton value="yearly" aria-label="yearly billing">
          Yearly
        </ToggleButton>
      </StyledToggleButtonGroup>
      {showSavingsBadge && (
        <SavingsBadge
          label={savingsText}
          visible={value === 'yearly'}
        />
      )}
    </ToggleContainer>
  );
};

export default BillingToggle;