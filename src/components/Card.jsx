import React from 'react';

export const Card = ({ children, title, cssVars }) => {
  // If cssVars not passed, try to get from CSS variables
  const getVar = (key) => {
    if (cssVars && cssVars[key]) return cssVars[key];
    return getComputedStyle(document.documentElement).getPropertyValue(`--${key}`).trim();
  };

  return (
    <div
      style={{
        backgroundColor: getVar('card-background'),
        borderRadius: getVar('card-borderRadius'),
        padding: getVar('card-padding'),
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: getVar('spacing-md'),
      }}
    >
      {title && (
        <h3
          style={{
            marginTop: 0,
            marginBottom: getVar('spacing-sm'),
            color: getVar('fg-default'),
            fontFamily: getVar('fontFamilies-heading'),
            fontSize: getVar('fontSizes-h4'),
          }}
        >
          {title}
        </h3>
      )}
      <div style={{ color: getVar('fg-muted') }}>{children}</div>
    </div>
  );
};
