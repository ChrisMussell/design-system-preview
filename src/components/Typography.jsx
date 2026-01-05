import React from 'react';
import { cssVars } from '../tokens/transform';

export const Typography = () => {
  return (
    <div style={{ color: cssVars['fg-default'] }}>
      <h1
        style={{
          fontFamily: cssVars['fontFamilies-heading'],
          fontSize: cssVars['fontSizes-h1'],
          fontWeight: 'bold',
          lineHeight: cssVars['lineHeights-heading'],
          marginBottom: cssVars['spacing-md'],
        }}
      >
        Heading 1
      </h1>
      
      <h2
        style={{
          fontFamily: cssVars['fontFamilies-heading'],
          fontSize: cssVars['fontSizes-h2'],
          fontWeight: 'bold',
          lineHeight: cssVars['lineHeights-heading'],
          marginBottom: cssVars['spacing-sm'],
        }}
      >
        Heading 2
      </h2>
      
      <h3
        style={{
          fontFamily: cssVars['fontFamilies-heading'],
          fontSize: cssVars['fontSizes-h3'],
          fontWeight: 'bold',
          lineHeight: cssVars['lineHeights-heading'],
          marginBottom: cssVars['spacing-sm'],
        }}
      >
        Heading 3
      </h3>
      
      <p
        style={{
          fontFamily: cssVars['fontFamilies-body'],
          fontSize: cssVars['fontSizes-body'],
          lineHeight: cssVars['lineHeights-body'],
          marginBottom: cssVars['spacing-md'],
        }}
      >
        This is body text using the Roboto font family. It demonstrates how typography tokens work in the design system.
      </p>
      
      <p
        style={{
          fontFamily: cssVars['fontFamilies-body'],
          fontSize: cssVars['fontSizes-sm'],
          color: cssVars['fg-muted'],
          lineHeight: cssVars['lineHeights-body'],
        }}
      >
        Small text for captions and helper text.
      </p>
    </div>
  );
};
