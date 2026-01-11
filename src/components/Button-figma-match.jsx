import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  cssVars,
  style = {}
}) => {
  const getVar = (key) => {
    if (cssVars && cssVars[key]) return cssVars[key];
    return getComputedStyle(document.documentElement).getPropertyValue(`--${key}`).trim();
  };

  const styles = {
    primary: {
      backgroundColor: getVar('accent-default'),
      color: getVar('accent-onAccent'),
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
      padding: `${getVar('spacing-xs')} ${getVar('spacing-md')}`,
      fontSize: getVar('fontSizes-h4'),
      fontWeight: 'normal',
    },
    medium: {
      padding: `${getVar('spacing-sm')} ${getVar('spacing-lg')}`,
      fontSize: getVar('fontSizes-h3'),
      fontWeight: 'normal',
    },
    large: {
      padding: `${getVar('spacing-md')} ${getVar('spacing-xl')}`,
      fontSize: getVar('fontSizes-h2'),
      fontWeight: 'normal',
    },
  };

  return (
    <button
      onClick={onClick}
      style={{
        ...styles[variant],
        ...sizes[size],
        ...style,
        borderRadius: getVar('borderRadius-sm'),
        cursor: 'pointer',
        fontFamily: getVar('fontFamilies-heading'),
        transition: 'all 0.2s ease',
      }}
    >
      {children}
    </button>
  );
};
