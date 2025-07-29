import React from 'react';
import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
  FormControlLabel,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

interface SwitchProps extends Omit<MuiSwitchProps, 'size'> {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  labelPlacement?: 'start' | 'end' | 'top' | 'bottom';
}

const StyledSwitch = styled(MuiSwitch)<{ switchsize: 'small' | 'medium' | 'large' }>(
  ({ theme, switchsize }) => {
    const sizeStyles = {
      small: {
        width: 32,
        height: 20,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          '&.Mui-checked': {
            transform: 'translateX(12px)',
          },
        },
        '& .MuiSwitch-thumb': {
          width: 16,
          height: 16,
        },
        '& .MuiSwitch-track': {
          borderRadius: 10,
        },
      },
      medium: {
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          '&.Mui-checked': {
            transform: 'translateX(16px)',
          },
        },
        '& .MuiSwitch-thumb': {
          width: 22,
          height: 22,
        },
        '& .MuiSwitch-track': {
          borderRadius: 13,
        },
      },
      large: {
        width: 52,
        height: 32,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          '&.Mui-checked': {
            transform: 'translateX(20px)',
          },
        },
        '& .MuiSwitch-thumb': {
          width: 28,
          height: 28,
        },
        '& .MuiSwitch-track': {
          borderRadius: 16,
        },
      },
    };

    return {
      ...sizeStyles[switchsize],
      '& .MuiSwitch-switchBase': {
        ...sizeStyles[switchsize]['& .MuiSwitch-switchBase'],
        transitionDuration: '300ms',
        '&.Mui-checked': {
          ...sizeStyles[switchsize]['& .MuiSwitch-switchBase']['&.Mui-checked'],
          color: '#fff',
          '& + .MuiSwitch-track': {
            backgroundColor: theme.palette.primary.main,
            opacity: 1,
            border: 0,
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
          },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
          color: theme.palette.primary.main,
          border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
          color: theme.palette.grey[100],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.3,
        },
      },
      '& .MuiSwitch-thumb': {
        ...sizeStyles[switchsize]['& .MuiSwitch-thumb'],
        boxSizing: 'border-box',
        color: '#fff',
      },
      '& .MuiSwitch-track': {
        ...sizeStyles[switchsize]['& .MuiSwitch-track'],
        backgroundColor: theme.palette.grey[400],
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
          duration: 500,
        }),
      },
    };
  }
);

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