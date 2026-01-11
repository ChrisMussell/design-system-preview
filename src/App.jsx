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
  
  React.useEffect(() => {
    const vars = generateCSSVariables(theme);
    setCssVars(vars);
    const root = document.documentElement;
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [theme]);

  const tabs = [
    { id: 'components', label: 'Components (H3 bold)' },
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
        fontFamily: cssVars['fontFamilies-body'],
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: `${cssVars['spacing-xl']} ${cssVars['spacing-lg']}`
      }}>
        {/* Header - Centered */}
        <div style={{ 
          textAlign: 'center',
          marginBottom: cssVars['spacing-xl']
        }}>
          <h1
            style={{
              fontFamily: cssVars['fontFamilies-heading'],
              fontSize: cssVars['fontSizes-h1'],
              fontWeight: 'bold',
              margin: 0,
              marginBottom: cssVars['spacing-xs'],
            }}
          >
            A Design System (H1 Bold)
          </h1>
          <p style={{ 
            margin: 0,
            fontSize: cssVars['fontSizes-body'],
            color: cssVars['fg-muted']
          }}>
            A living component library built with design tokens (Body)
          </p>
        </div>

        {/* Tabs Navigation */}
        <div style={{ 
          display: 'flex', 
          gap: cssVars['spacing-lg'],
          marginBottom: cssVars['spacing-xl'],
          justifyContent: 'center',
          borderBottom: `1px solid ${cssVars['bg-subtle']}`,
          paddingBottom: cssVars['spacing-sm']
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: `${cssVars['spacing-xs']} 0`,
                backgroundColor: 'transparent',
                color: activeTab === tab.id 
                  ? cssVars['accent-default'] 
                  : cssVars['fg-muted'],
                border: 'none',
                borderBottom: activeTab === tab.id 
                  ? `2px solid ${cssVars['accent-default']}` 
                  : '2px solid transparent',
                cursor: 'pointer',
                fontSize: cssVars['fontSizes-body'],
                fontFamily: cssVars['fontFamilies-body'],
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
            {/* Buttons Section */}
            <div style={{ marginBottom: cssVars['spacing-xl'] }}>
              <h2
                style={{
                  fontFamily: cssVars['fontFamilies-heading'],
                  fontSize: cssVars['fontSizes-h2'],
                  fontWeight: 'bold',
                  marginTop: 0,
                  marginBottom: cssVars['spacing-sm'],
                }}
              >
                Buttons (H2 Bold)
              </h2>
              <p style={{ 
                marginTop: 0,
                marginBottom: cssVars['spacing-md'],
                fontSize: cssVars['fontSizes-body'],
                color: cssVars['fg-default']
              }}>
                Buttons come in multiple sizes and variants to fit different use cases. (Body)
              </p>

              {/* Sizes */}
              <h3
                style={{
                  fontFamily: cssVars['fontFamilies-heading'],
                  fontSize: cssVars['fontSizes-h3'],
                  fontWeight: 'bold',
                  marginTop: 0,
                  marginBottom: cssVars['spacing-sm'],
                }}
              >
                Sizes H3 Bold
              </h3>
              <div style={{ 
                display: 'flex', 
                gap: cssVars['spacing-md'], 
                marginBottom: cssVars['spacing-lg'],
                flexWrap: 'wrap',
                alignItems: 'center'
              }}>
                <Button size="small" cssVars={cssVars}>Small (H4 Regular)</Button>
                <Button size="medium" cssVars={cssVars}>Medium (H3 Regular)</Button>
                <Button size="large" cssVars={cssVars}>Large (H2 Regular)</Button>
              </div>

              {/* Variants */}
              <h3
                style={{
                  fontFamily: cssVars['fontFamilies-heading'],
                  fontSize: cssVars['fontSizes-h3'],
                  fontWeight: 'bold',
                  marginTop: 0,
                  marginBottom: cssVars['spacing-sm'],
                }}
              >
                Variants
              </h3>
              <div style={{ 
                display: 'flex', 
                gap: cssVars['spacing-md'], 
                flexWrap: 'wrap'
              }}>
                <Button variant="primary" cssVars={cssVars}>Primary Action</Button>
                <Button variant="secondary" cssVars={cssVars}>Secondary Action</Button>
              </div>
            </div>

            {/* Cards Section */}
            <div style={{ marginBottom: cssVars['spacing-xl'] }}>
              <h2
                style={{
                  fontFamily: cssVars['fontFamilies-heading'],
                  fontSize: cssVars['fontSizes-h2'],
                  fontWeight: 'bold',
                  marginTop: 0,
                  marginBottom: cssVars['spacing-sm'],
                }}
              >
                Cards
              </h2>
              
              <Card cssVars={cssVars}>
                <p style={{ 
                  margin: 0,
                  marginBottom: cssVars['spacing-md'],
                  fontSize: cssVars['fontSizes-body']
                }}>
                  Cards are flexible containers for grouping related content. They use design tokens for consistent padding, border radius, background colors, and elevation.
                </p>
                <div style={{ 
                  display: 'flex', 
                  gap: cssVars['spacing-md'],
                  flexWrap: 'wrap'
                }}>
                  <Button variant="primary" cssVars={cssVars}>Primary Action</Button>
                  <Button variant="secondary" cssVars={cssVars}>Learn More</Button>
                </div>
              </Card>
            </div>

            {/* Form Elements Section */}
            <div style={{ marginBottom: cssVars['spacing-xl'] }}>
              <h2
                style={{
                  fontFamily: cssVars['fontFamilies-heading'],
                  fontSize: cssVars['fontSizes-h2'],
                  fontWeight: 'bold',
                  marginTop: 0,
                  marginBottom: cssVars['spacing-sm'],
                }}
              >
                Form Elements
              </h2>
              <p style={{ 
                marginTop: 0,
                marginBottom: cssVars['spacing-md'],
                fontSize: cssVars['fontSizes-body']
              }}>
                Form inputs inherit token-based styling for consistent appearance across your application.
              </p>

              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: cssVars['spacing-md'],
                maxWidth: '400px'
              }}>
                <div>
                  <label style={{ 
                    display: 'block',
                    marginBottom: cssVars['spacing-xs'],
                    fontSize: cssVars['fontSizes-body'],
                    fontWeight: 'normal',
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
                      border: `1px solid ${cssVars['bg-subtle']}`,
                      fontSize: cssVars['fontSizes-body'],
                      backgroundColor: cssVars['bg-default'],
                      color: cssVars['fg-default'],
                      fontFamily: cssVars['fontFamilies-body'],
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ 
                    display: 'block',
                    marginBottom: cssVars['spacing-xs'],
                    fontSize: cssVars['fontSizes-body'],
                    fontWeight: 'normal',
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
                      border: `1px solid ${cssVars['bg-subtle']}`,
                      fontSize: cssVars['fontSizes-body'],
                      fontFamily: cssVars['fontFamilies-body'],
                      backgroundColor: cssVars['bg-default'],
                      color: cssVars['fg-default'],
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <Button variant="primary" cssVars={cssVars} style={{ width: '100%' }}>
                  Submit Form
                </Button>
              </div>
            </div>
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
