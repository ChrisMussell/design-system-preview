import React from 'react';

export const Card = ({ children, title, cssVars }) => {
  const getVar = (key) => {
    if (cssVars && cssVars[key]) return cssVars[key];
    return getComputedStyle(document.documentElement).getPropertyValue(`--${key}`).trim();
  };

  return (
    <div
      style={{
        backgroundColor: cssVars['bg-default'],
        borderRadius: getVar('borderRadius-lg'),
        padding: getVar('spacing-lg'),
        border: `1px solid ${getVar('bg-subtle')}`,
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
            fontSize: getVar('fontSizes-h3'),
            fontWeight: 'bold',
          }}
        >
          {title}
        </h3>
      )}
      <div style={{ color: getVar('fg-default') }}>{children}</div>
    </div>
  );
};
