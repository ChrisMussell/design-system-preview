import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  cssVars
}) => {
  // If cssVars not passed, try to get from CSS variables
  const getVar = (key) => {
    if (cssVars && cssVars[key]) return cssVars[key];
    return getComputedStyle(document.documentElement).getPropertyValue(`--${key}`).trim();
  };

  const styles = {
    primary: {
      backgroundColor: getVar('button-primary-background'),
      color: getVar('button-primary-text'),
      border: 'none',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: getVar('accent-default'),
      border: `2px solid ${getVar('accent-default')}`,
    },
  };

  const sizes = {
    small: {
      padding: `${getVar('spacing-xs')} ${getVar('spacing-sm')}`,
      fontSize: getVar('fontSizes-sm'),
    },
    medium: {
      padding: `${getVar('spacing-sm')} ${getVar('spacing-md')}`,
      fontSize: getVar('fontSizes-body'),
    },
    large: {
      padding: `${getVar('spacing-md')} ${getVar('spacing-lg')}`,
      fontSize: getVar('fontSizes-h6'),
    },
  };

  return (
    <button
      onClick={onClick}
      style={{
        ...styles[variant],
        ...sizes[size],
        borderRadius: getVar('button-borderRadius'),
        cursor: 'pointer',
        fontFamily: getVar('fontFamilies-heading'),
        fontWeight: '600',
        transition: 'all 0.2s ease',
      }}
    >
      {children}
    </button>
  );
};
