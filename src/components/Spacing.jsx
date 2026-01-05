import React from 'react';
import { cssVars } from '../tokens/transform';

export const Spacing = () => {
  const spacingSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  
  return (
    <div>
      <h2 style={{ marginBottom: '24px', color: cssVars['fg-default'] }}>Spacing Scale</h2>
      {spacingSizes.map(size => (
        <div key={size} style={{ marginBottom: '20px' }}>
          <div style={{ 
            fontSize: '14px', 
            marginBottom: '8px',
            color: cssVars['fg-muted'],
            fontFamily: 'monospace'
          }}>
            spacing-{size}: {cssVars[`spacing-${size}`]}
          </div>
          <div
            style={{
              height: '40px',
              backgroundColor: cssVars['accent-default'],
              width: cssVars[`spacing-${size}`],
              borderRadius: '4px',
            }}
          />
        </div>
      ))}
    </div>
  );
};
