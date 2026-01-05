import React from 'react';
import tokens from '../tokens/tokens.json';

export const ColorPalette = () => {
  const colors = tokens.core.colors;
  
  const renderColorScale = (name, scale) => {
    if (typeof scale.$value === 'string') {
      // Single color
      return (
        <div key={name} style={{ marginBottom: '20px' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>{name}</div>
          <div
            style={{
              backgroundColor: scale.$value,
              height: '60px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: name === 'white' ? '#000' : '#fff',
              fontFamily: 'monospace',
            }}
          >
            {scale.$value}
          </div>
        </div>
      );
    }
    
    // Color scale
    return (
      <div key={name} style={{ marginBottom: '30px' }}>
        <div style={{ fontWeight: 'bold', marginBottom: '12px', textTransform: 'capitalize' }}>
          {name}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '8px' }}>
          {Object.entries(scale).map(([shade, token]) => (
            <div key={shade}>
              <div
                style={{
                  backgroundColor: token.$value,
                  height: '60px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                }}
              />
              <div style={{ fontSize: '12px', marginTop: '4px', textAlign: 'center' }}>
                {shade}
              </div>
              <div style={{ fontSize: '10px', color: '#666', textAlign: 'center', fontFamily: 'monospace' }}>
                {token.$value}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div>
      <h2 style={{ marginBottom: '24px' }}>Color Palette</h2>
      {Object.entries(colors).map(([name, scale]) => renderColorScale(name, scale))}
    </div>
  );
};
