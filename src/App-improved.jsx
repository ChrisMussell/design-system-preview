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
        padding: `${cssVars['spacing-xl']} ${cssVars['spacing-lg']}`,
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
          marginBottom: cssVars['spacing-xl'],
          paddingBottom: cssVars['spacing-lg'],
          borderBottom: `1px solid ${cssVars['bg-subtle']}`
        }}>
          <div>
            <h1
              style={{
                fontFamily: cssVars['fontFamilies-heading'],
                fontSize: cssVars['fontSizes-h1'],
                margin: 0,
                marginBottom: cssVars['spacing-xs'],
                background: `linear-gradient(135deg, ${cssVars['accent-default']}, ${cssVars['colors-purple-500'] || cssVars['accent-default']})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Design System
            </h1>
            <p style={{ 
              margin: 0, 
              color: cssVars['fg-muted'],
              fontSize: cssVars['fontSizes-body']
            }}>
              A living component library built with design tokens
            </p>
          </div>
          <Button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            variant="secondary"
            cssVars={cssVars}
          >
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </Button>
        </div>

        {/* Tabs */}
        <div style={{ 
          display: 'flex', 
          gap: cssVars['spacing-sm'],
          marginBottom: cssVars['spacing-xl'],
          overflowX: 'auto',
          paddingBottom: cssVars['spacing-sm']
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: `${cssVars['spacing-sm']} ${cssVars['spacing-lg']}`,
                backgroundColor: activeTab === tab.id 
                  ? cssVars['accent-default'] 
                  : cssVars['bg-muted'],
                color: activeTab === tab.id 
                  ? cssVars['accent-onAccent'] 
                  : cssVars['fg-default'],
                border: 'none',
                borderRadius: cssVars['borderRadius-lg'],
                cursor: 'pointer',
                fontSize: cssVars['fontSizes-body'],
                fontFamily: cssVars['fontFamilies-heading'],
                fontWeight: activeTab === tab.id ? 'bold' : '500',
                transition: 'all 0.2s ease',
                boxShadow: activeTab === tab.id 
                  ? `0 4px 12px rgba(0,0,0,0.15)` 
                  : 'none',
                transform: activeTab === tab.id ? 'translateY(-2px)' : 'none',
              }}
              onMouseOver={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.backgroundColor = cssVars['bg-subtle'];
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.backgroundColor = cssVars['bg-muted'];
                }
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
              <p style={{ 
                marginTop: 0, 
                marginBottom: cssVars['spacing-md'],
                color: cssVars['fg-muted']
              }}>
                Buttons come in multiple sizes and variants to fit different use cases.
              </p>
              
              <div style={{ marginBottom: cssVars['spacing-lg'] }}>
                <h4 style={{ 
                  margin: 0, 
                  marginBottom: cssVars['spacing-sm'],
                  fontSize: cssVars['fontSizes-h6'],
                  color: cssVars['fg-default']
                }}>
                  Sizes
                </h4>
                <div style={{ display: 'flex', gap: cssVars['spacing-md'], flexWrap: 'wrap', alignItems: 'center' }}>
                  <Button size="small" cssVars={cssVars}>Small</Button>
                  <Button size="medium" cssVars={cssVars}>Medium</Button>
                  <Button size="large" cssVars={cssVars}>Large</Button>
                </div>
              </div>

              <div>
                <h4 style={{ 
                  margin: 0, 
                  marginBottom: cssVars['spacing-sm'],
                  fontSize: cssVars['fontSizes-h6'],
                  color: cssVars['fg-default']
                }}>
                  Variants
                </h4>
                <div style={{ display: 'flex', gap: cssVars['spacing-md'], flexWrap: 'wrap' }}>
                  <Button variant="primary" cssVars={cssVars}>Primary Action</Button>
                  <Button variant="secondary" cssVars={cssVars}>Secondary Action</Button>
                </div>
              </div>
            </Card>

            <Card title="Cards" cssVars={cssVars}>
              <p style={{ marginTop: 0, color: cssVars['fg-muted'] }}>
                Cards are flexible containers for grouping related content. They use design tokens 
                for consistent padding, border radius, background colors, and elevation.
              </p>
              <div style={{ 
                display: 'flex', 
                gap: cssVars['spacing-md'], 
                marginTop: cssVars['spacing-md'],
                flexWrap: 'wrap'
              }}>
                <Button cssVars={cssVars}>Primary Action</Button>
                <Button variant="secondary" cssVars={cssVars}>Learn More</Button>
              </div>
            </Card>

            <Card title="Form Elements" cssVars={cssVars}>
              <p style={{ 
                marginTop: 0, 
                marginBottom: cssVars['spacing-md'],
                color: cssVars['fg-muted']
              }}>
                Form inputs inherit token-based styling for consistent appearance across your application.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: cssVars['spacing-md'], maxWidth: '500px' }}>
                <div>
                  <label style={{ 
                    display: 'block',
                    marginBottom: cssVars['spacing-xs'],
                    fontSize: cssVars['fontSizes-sm'],
                    fontWeight: '600',
                    color: cssVars['fg-default']
                  }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    style={{
                      width: '100%',
                      padding: cssVars['spacing-sm'],
                      borderRadius: cssVars['borderRadius-sm'],
                      border: `2px solid ${cssVars['bg-subtle']}`,
                      fontSize: cssVars['fontSizes-body'],
                      backgroundColor: cssVars['bg-default'],
                      color: cssVars['fg-default'],
                      transition: 'border-color 0.2s ease',
                      outline: 'none',
                    }}
                    onFocus={(e) => e.target.style.borderColor = cssVars['accent-default']}
                    onBlur={(e) => e.target.style.borderColor = cssVars['bg-subtle']}
                  />
                </div>

                <div>
                  <label style={{ 
                    display: 'block',
                    marginBottom: cssVars['spacing-xs'],
                    fontSize: cssVars['fontSizes-sm'],
                    fontWeight: '600',
                    color: cssVars['fg-default']
                  }}>
                    Message
                  </label>
                  <textarea
                    placeholder="Enter your message"
                    rows={4}
                    style={{
                      width: '100%',
                      padding: cssVars['spacing-sm'],
                      borderRadius: cssVars['borderRadius-sm'],
                      border: `2px solid ${cssVars['bg-subtle']}`,
                      fontSize: cssVars['fontSizes-body'],
                      fontFamily: cssVars['fontFamilies-body'],
                      backgroundColor: cssVars['bg-default'],
                      color: cssVars['fg-default'],
                      transition: 'border-color 0.2s ease',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                    onFocus={(e) => e.target.style.borderColor = cssVars['accent-default']}
                    onBlur={(e) => e.target.style.borderColor = cssVars['bg-subtle']}
                  />
                </div>

                <Button cssVars={cssVars}>Submit Form</Button>
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
