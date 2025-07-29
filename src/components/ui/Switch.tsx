import React from 'react';
import {
  SwitchProps as MuiSwitchProps,
  FormControlLabel,
  Typography,
} from '@mui/material';
import { StyledSwitch } from '../styles/Switch.styles';

interface SwitchProps extends Omit<MuiSwitchProps, 'size'> {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  labelPlacement?: 'start' | 'end' | 'top' | 'bottom';
}

const Switch: React.FC<SwitchProps> = ({
  label,
  size = 'medium',
  labelPlacement = 'end',
  ...props
}) => {
  const switchComponent = (
    <StyledSwitch
      switchsize={size}
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  );

  if (label) {
    return (
      <FormControlLabel
        control={switchComponent}
        label={<Typography variant="body2">{label}</Typography>}
        labelPlacement={labelPlacement}
      />
    );
  }

  return switchComponent;
};

export default Switch;