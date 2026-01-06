import React from 'react';

export const Card = ({ children, title, cssVars }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  // If cssVars not passed, try to get from CSS variables
  const getVar = (key) => {
    if (cssVars && cssVars[key]) return cssVars[key];
    return getComputedStyle(document.documentElement).getPropertyValue(`--${key}`).trim();
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: getVar('card-background'),
        borderRadius: getVar('borderRadius-xl'),
        padding: getVar('spacing-lg'),
        boxShadow: isHovered 
          ? '0 8px 24px rgba(0,0,0,0.12)' 
          : '0 2px 8px rgba(0,0,0,0.08)',
        marginBottom: getVar('spacing-lg'),
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        border: `1px solid ${getVar('bg-subtle')}`,
      }}
    >
      {title && (
        <h3
          style={{
            marginTop: 0,
            marginBottom: getVar('spacing-md'),
            color: getVar('fg-default'),
            fontFamily: getVar('fontFamilies-heading'),
            fontSize: getVar('fontSizes-h3'),
            fontWeight: 'bold',
            borderBottom: `2px solid ${getVar('accent-default')}`,
            paddingBottom: getVar('spacing-sm'),
            display: 'inline-block',
          }}
        >
          {title}
        </h3>
      )}
      <div style={{ color: getVar('fg-default') }}>{children}</div>
    </div>
  );
};
