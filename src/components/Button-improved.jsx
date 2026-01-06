import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  cssVars
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

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
      boxShadow: isHovered 
        ? '0 6px 20px rgba(0,0,0,0.15)' 
        : '0 2px 8px rgba(0,0,0,0.1)',
      transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: getVar('accent-default'),
      border: `2px solid ${getVar('accent-default')}`,
      boxShadow: 'none',
      transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
    },
  };

  const sizes = {
    small: {
      padding: `${getVar('spacing-xs')} ${getVar('spacing-md')}`,
      fontSize: getVar('fontSizes-sm'),
    },
    medium: {
      padding: `${getVar('spacing-sm')} ${getVar('spacing-lg')}`,
      fontSize: getVar('fontSizes-body'),
    },
    large: {
      padding: `${getVar('spacing-md')} ${getVar('spacing-xl')}`,
      fontSize: getVar('fontSizes-h6'),
    },
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...styles[variant],
        ...sizes[size],
        borderRadius: getVar('borderRadius-lg'),
        cursor: 'pointer',
        fontFamily: getVar('fontFamilies-heading'),
        fontWeight: '600',
        transition: 'all 0.2s ease',
        opacity: isHovered ? 0.9 : 1,
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </button>
  );
};
