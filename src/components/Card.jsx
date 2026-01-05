import React from 'react';
import { cssVars } from '../tokens/transform';

export const Card = ({ children, title }) => {
  return (
    <div
      style={{
        backgroundColor: cssVars['card-background'],
        borderRadius: cssVars['card-borderRadius'],
        padding: cssVars['card-padding'],
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: cssVars['spacing-md'],
      }}
    >
      {title && (
        <h3
          style={{
            marginTop: 0,
            marginBottom: cssVars['spacing-sm'],
            color: cssVars['fg-default'],
            fontFamily: cssVars['fontFamilies-heading'],
            fontSize: cssVars['fontSizes-h4'],
          }}
        >
          {title}
        </h3>
      )}
      <div style={{ color: cssVars['fg-muted'] }}>{children}</div>
    </div>
  );
};
