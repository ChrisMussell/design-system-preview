import React from 'react';
import { cssVars } from '../tokens/transform';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick 
}) => {
  const styles = {
    primary: {
      backgroundColor: cssVars['button-primary-background'],
      color: cssVars['button-primary-text'],
      border: 'none',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: cssVars['accent-default'],
      border: `2px solid ${cssVars['accent-default']}`,
    },
  };

  const sizes = {
    small: {
      padding: `${cssVars['spacing-xs']} ${cssVars['spacing-sm']}`,
      fontSize: cssVars['fontSizes-sm'],
    },
    medium: {
      padding: `${cssVars['spacing-sm']} ${cssVars['spacing-md']}`,
      fontSize: cssVars['fontSizes-body'],
    },
    large: {
      padding: `${cssVars['spacing-md']} ${cssVars['spacing-lg']}`,
      fontSize: cssVars['fontSizes-h6'],
    },
  };

  return (
    <button
      onClick={onClick}
      style={{
        ...styles[variant],
        ...sizes[size],
        borderRadius: cssVars['button-borderRadius'],
        cursor: 'pointer',
        fontFamily: cssVars['fontFamilies-heading'],
        fontWeight: '600',
        transition: 'all 0.2s ease',
      }}
    >
      {children}
    </button>
  );
};
