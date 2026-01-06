import React, { useState } from 'react';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Typography } from './components/Typography';
import { ColorPalette } from './components/ColorPalette';
import { Spacing } from './components/Spacing';
import { generateCSSVariables } from './tokens/transform';

function App() {
  const [theme, setTheme] = useState('light');
  const [activeTab, setActiveTab] = useState('components');
  const [cssVars, setCssVars] = useState(() => generateCSSVariables('light'));
  
  // Update CSS variables when theme changes
  React.useEffect(() => {
    const vars = generateCSSVariables(theme);
    setCssVars(vars);
    const root = document.documentElement;
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [theme]);

  const tabs = [
    { id: 'components', label: 'Components' },
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'spacing', label: 'Spacing' },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: cssVars['bg-default'],
        color: cssVars['fg-default'],
        padding: cssVars['spacing-lg'],
        fontFamily: cssVars['fontFamilies-body'],
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: cssVars['spacing-xl']
        }}>
          <h1
            style={{
              fontFamily: cssVars['fontFamilies-heading'],
              fontSize: cssVars['fontSizes-h1'],
              margin: 0,
            }}
          >
            Design System Preview
          </h1>
          <Button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            variant="secondary"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </Button>
        </div>

        {/* Tabs */}
        <div style={{ 
          display: 'flex', 
          gap: cssVars['spacing-sm'],
          marginBottom: cssVars['spacing-lg'],
          borderBottom: `2px solid ${cssVars['bg-subtle']}`,
          paddingBottom: cssVars['spacing-sm']
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: `${cssVars['spacing-sm']} ${cssVars['spacing-md']}`,
                backgroundColor: activeTab === tab.id 
                  ? cssVars['accent-default'] 
                  : 'transparent',
                color: activeTab === tab.id 
                  ? cssVars['accent-onAccent'] 
                  : cssVars['fg-muted'],
                border: 'none',
                borderRadius: cssVars['borderRadius-sm'],
                cursor: 'pointer',
                fontSize: cssVars['fontSizes-body'],
                fontFamily: cssVars['fontFamilies-heading'],
                fontWeight: activeTab === tab.id ? 'bold' : 'normal',
                transition: 'all 0.2s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'components' && (
          <div>
            <Card title="Buttons" cssVars={cssVars}>
              <div style={{ display: 'flex', gap: cssVars['spacing-md'], flexWrap: 'wrap', marginBottom: cssVars['spacing-md'] }}>
                <Button size="small" cssVars={cssVars}>Small Button</Button>
                <Button size="medium" cssVars={cssVars}>Medium Button</Button>
                <Button size="large" cssVars={cssVars}>Large Button</Button>
              </div>
              <div style={{ display: 'flex', gap: cssVars['spacing-md'], flexWrap: 'wrap' }}>
                <Button variant="primary" cssVars={cssVars}>Primary</Button>
                <Button variant="secondary" cssVars={cssVars}>Secondary</Button>
              </div>
            </Card>

            <Card title="Cards" cssVars={cssVars}>
              <p>This is a card component using design tokens for padding, border radius, and background color.</p>
              <Button cssVars={cssVars}>Card Action</Button>
            </Card>

            <Card title="Form Example" cssVars={cssVars}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: cssVars['spacing-sm'] }}>
                <input
                  type="text"
                  placeholder="Enter your name"
                  style={{
                    padding: cssVars['spacing-sm'],
                    borderRadius: cssVars['borderRadius-sm'],
                    border: `2px solid ${cssVars['bg-subtle']}`,
                    fontSize: cssVars['fontSizes-body'],
                    backgroundColor: cssVars['bg-default'],
                    color: cssVars['fg-default'],
                  }}
                />
                <textarea
                  placeholder="Enter your message"
                  rows={4}
                  style={{
                    padding: cssVars['spacing-sm'],
                    borderRadius: cssVars['borderRadius-sm'],
                    border: `2px solid ${cssVars['bg-subtle']}`,
                    fontSize: cssVars['fontSizes-body'],
                    fontFamily: cssVars['fontFamilies-body'],
                    backgroundColor: cssVars['bg-default'],
                    color: cssVars['fg-default'],
                  }}
                />
                <Button cssVars={cssVars}>Submit</Button>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'colors' && <ColorPalette />}
        {activeTab === 'typography' && <Typography cssVars={cssVars} />}
        {activeTab === 'spacing' && <Spacing cssVars={cssVars} />}
      </div>
    </div>
  );
}

export default App;
