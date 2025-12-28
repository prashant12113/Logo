import React, { useState } from 'react';

const ChowkBrandShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('logos');

  const colors = {
    coral: '#E07A5F',
    terracotta: '#C45C3A',
    peach: '#F6AE8C',
    apricot: '#E89A6E',
    charcoal: '#2D2521',
    warmBrown: '#3D3028',
    cream: '#FFFAF8',
    offWhite: '#FFF5F0'
  };

  // Logo Mark Component
  const LogoMark = ({ size = 100, variant = 'color', showCenter = true }) => {
    const getColors = () => {
      switch(variant) {
        case 'mono-black':
          return { primary: '#2D2521', secondary: '#2D2521', secondaryOpacity: 0.6, center: '#FFFFFF' };
        case 'mono-white':
          return { primary: '#FFFFFF', secondary: '#FFFFFF', secondaryOpacity: 0.6, center: '#1A1614' };
        case 'white':
          return { primary: '#FFFFFF', secondary: '#FFFFFF', secondaryOpacity: 0.7, center: colors.terracotta };
        default:
          return { primary: 'url(#mark-primary)', secondary: 'url(#mark-secondary)', secondaryOpacity: 1, center: colors.cream };
      }
    };
    const c = getColors();
    
    return (
      <svg viewBox="0 0 100 100" style={{ width: size, height: size }}>
        <defs>
          <linearGradient id="mark-primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.coral}/>
            <stop offset="100%" stopColor={colors.terracotta}/>
          </linearGradient>
          <linearGradient id="mark-secondary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.peach}/>
            <stop offset="100%" stopColor={colors.apricot}/>
          </linearGradient>
        </defs>
        {/* Cardinal petals */}
        <path d="M50 6 Q60 20 54 36 L50 32 L46 36 Q40 20 50 6" fill={c.primary}/>
        <path d="M94 50 Q80 60 64 54 L68 50 L64 46 Q80 40 94 50" fill={c.primary}/>
        <path d="M50 94 Q40 80 46 64 L50 68 L54 64 Q60 80 50 94" fill={c.primary}/>
        <path d="M6 50 Q20 40 36 46 L32 50 L36 54 Q20 60 6 50" fill={c.primary}/>
        {/* Diagonal petals */}
        <path d="M80 20 Q72 30 60 38 L58 34 Q66 28 74 18 Q78 16 80 20" fill={c.secondary} opacity={c.secondaryOpacity}/>
        <path d="M80 80 Q72 70 60 62 L58 66 Q66 72 74 82 Q78 84 80 80" fill={c.secondary} opacity={c.secondaryOpacity}/>
        <path d="M20 80 Q28 70 40 62 L42 66 Q34 72 26 82 Q22 84 20 80" fill={c.secondary} opacity={c.secondaryOpacity}/>
        <path d="M20 20 Q28 30 40 38 L42 34 Q34 28 26 18 Q22 16 20 20" fill={c.secondary} opacity={c.secondaryOpacity}/>
        {/* Center */}
        {showCenter && (
          <>
            <circle cx="50" cy="50" r="12" fill={c.primary}/>
            <circle cx="50" cy="50" r="5" fill={c.center}/>
          </>
        )}
      </svg>
    );
  };

  // Full Logo Component
  const FullLogo = ({ variant = 'color', scale = 1 }) => {
    const textColor = variant === 'dark' || variant === 'mono-white' ? '#FFFFFF' : colors.warmBrown;
    const markVariant = variant === 'mono-black' ? 'mono-black' : variant === 'mono-white' ? 'mono-white' : 'color';
    
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 * scale }}>
        <LogoMark size={80 * scale} variant={markVariant} />
        <span style={{ 
          fontFamily: "'Nunito', system-ui, sans-serif", 
          fontSize: 44 * scale, 
          fontWeight: 700, 
          color: textColor,
          letterSpacing: 1
        }}>
          chowk
        </span>
      </div>
    );
  };

  const tabs = [
    { id: 'logos', label: 'Logo Versions' },
    { id: 'colors', label: 'Colors' },
    { id: 'icons', label: 'App Icons' },
    { id: 'usage', label: 'Usage' }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: darkMode 
        ? 'linear-gradient(135deg, #1a1614 0%, #2d2521 100%)' 
        : 'linear-gradient(135deg, #fdfbf9 0%, #f8f4f0 100%)',
      padding: '40px 24px',
      fontFamily: "'Nunito', system-ui, sans-serif",
      transition: 'all 0.3s ease'
    }}>
      {/* Header */}
      <div style={{ maxWidth: 1000, margin: '0 auto 40px', textAlign: 'center' }}>
        <div style={{ marginBottom: 24 }}>
          <LogoMark size={80} />
        </div>
        <h1 style={{ 
          fontSize: 36, 
          fontWeight: 800, 
          color: darkMode ? '#fff' : colors.charcoal,
          marginBottom: 8
        }}>
          Chowk Brand Kit
        </h1>
        <p style={{ 
          fontSize: 16, 
          color: darkMode ? '#a89f9a' : '#6b5f58',
          marginBottom: 20
        }}>
          Final logo package — Converging Petals
        </p>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            background: darkMode ? '#3d3532' : '#e8e2dc',
            color: darkMode ? '#fff' : colors.charcoal,
            border: 'none',
            padding: '10px 20px',
            borderRadius: 20,
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: 600
          }}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Tabs */}
      <div style={{ 
        maxWidth: 1000, 
        margin: '0 auto 32px',
        display: 'flex',
        gap: 8,
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: activeTab === tab.id 
                ? `linear-gradient(135deg, ${colors.coral} 0%, ${colors.terracotta} 100%)`
                : (darkMode ? '#2d2521' : '#fff'),
              color: activeTab === tab.id ? '#fff' : (darkMode ? '#e8e2dc' : colors.charcoal),
              border: `2px solid ${activeTab === tab.id ? 'transparent' : (darkMode ? '#3d3532' : '#e8e2dc')}`,
              padding: '10px 20px',
              borderRadius: 10,
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 600,
              transition: 'all 0.2s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        
        {/* Logos Tab */}
        {activeTab === 'logos' && (
          <div style={{ display: 'grid', gap: 24 }}>
            {/* Primary Logo */}
            <div style={{
              background: darkMode ? '#2d2521' : '#fff',
              borderRadius: 20,
              padding: 40,
              boxShadow: darkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(45,37,33,0.06)'
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: darkMode ? '#a89f9a' : '#6b5f58', marginBottom: 24, textTransform: 'uppercase', letterSpacing: 1 }}>
                Primary Logo
              </h3>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FullLogo variant="color" scale={1.2} />
              </div>
            </div>

            {/* Dark Mode Logo */}
            <div style={{
              background: '#1a1614',
              borderRadius: 20,
              padding: 40
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: '#a89f9a', marginBottom: 24, textTransform: 'uppercase', letterSpacing: 1 }}>
                Dark Mode
              </h3>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FullLogo variant="dark" scale={1.2} />
              </div>
            </div>

            {/* Monochrome Versions */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div style={{
                background: darkMode ? '#2d2521' : '#fff',
                borderRadius: 20,
                padding: 32,
                boxShadow: darkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(45,37,33,0.06)'
              }}>
                <h3 style={{ fontSize: 12, fontWeight: 700, color: darkMode ? '#a89f9a' : '#6b5f58', marginBottom: 20, textTransform: 'uppercase', letterSpacing: 1 }}>
                  Mono Black
                </h3>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <FullLogo variant="mono-black" scale={0.9} />
                </div>
              </div>
              <div style={{
                background: colors.charcoal,
                borderRadius: 20,
                padding: 32
              }}>
                <h3 style={{ fontSize: 12, fontWeight: 700, color: '#a89f9a', marginBottom: 20, textTransform: 'uppercase', letterSpacing: 1 }}>
                  Mono White
                </h3>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <FullLogo variant="mono-white" scale={0.9} />
                </div>
              </div>
            </div>

            {/* Stacked Version */}
            <div style={{
              background: darkMode ? '#2d2521' : '#fff',
              borderRadius: 20,
              padding: 40,
              boxShadow: darkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(45,37,33,0.06)'
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: darkMode ? '#a89f9a' : '#6b5f58', marginBottom: 24, textTransform: 'uppercase', letterSpacing: 1 }}>
                Stacked Version
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                <LogoMark size={100} />
                <span style={{ 
                  fontFamily: "'Nunito', system-ui, sans-serif", 
                  fontSize: 32, 
                  fontWeight: 700, 
                  color: darkMode ? '#fff' : colors.warmBrown,
                  letterSpacing: 1
                }}>
                  chowk
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Colors Tab */}
        {activeTab === 'colors' && (
          <div style={{
            background: darkMode ? '#2d2521' : '#fff',
            borderRadius: 20,
            padding: 40,
            boxShadow: darkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(45,37,33,0.06)'
          }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: darkMode ? '#a89f9a' : '#6b5f58', marginBottom: 32, textTransform: 'uppercase', letterSpacing: 1 }}>
              Brand Colors
            </h3>
            
            <div style={{ marginBottom: 40 }}>
              <h4 style={{ fontSize: 13, fontWeight: 600, color: darkMode ? '#fff' : colors.charcoal, marginBottom: 16 }}>Primary</h4>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {[
                  { name: 'Coral', hex: colors.coral },
                  { name: 'Terracotta', hex: colors.terracotta }
                ].map(c => (
                  <div key={c.name} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: 80,
                      height: 80,
                      borderRadius: 16,
                      background: c.hex,
                      boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                      marginBottom: 8
                    }} />
                    <div style={{ fontSize: 13, fontWeight: 600, color: darkMode ? '#fff' : colors.charcoal }}>{c.name}</div>
                    <div style={{ fontSize: 11, color: darkMode ? '#6a5f5a' : '#a89f9a', fontFamily: 'monospace' }}>{c.hex}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 40 }}>
              <h4 style={{ fontSize: 13, fontWeight: 600, color: darkMode ? '#fff' : colors.charcoal, marginBottom: 16 }}>Secondary</h4>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {[
                  { name: 'Peach', hex: colors.peach },
                  { name: 'Apricot', hex: colors.apricot }
                ].map(c => (
                  <div key={c.name} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: 80,
                      height: 80,
                      borderRadius: 16,
                      background: c.hex,
                      boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                      marginBottom: 8
                    }} />
                    <div style={{ fontSize: 13, fontWeight: 600, color: darkMode ? '#fff' : colors.charcoal }}>{c.name}</div>
                    <div style={{ fontSize: 11, color: darkMode ? '#6a5f5a' : '#a89f9a', fontFamily: 'monospace' }}>{c.hex}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: 13, fontWeight: 600, color: darkMode ? '#fff' : colors.charcoal, marginBottom: 16 }}>Neutrals</h4>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {[
                  { name: 'Charcoal', hex: colors.charcoal },
                  { name: 'Warm Brown', hex: colors.warmBrown },
                  { name: 'Cream', hex: colors.cream },
                  { name: 'Off-White', hex: colors.offWhite }
                ].map(c => (
                  <div key={c.name} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: 80,
                      height: 80,
                      borderRadius: 16,
                      background: c.hex,
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                      marginBottom: 8,
                      border: c.hex === colors.cream || c.hex === colors.offWhite ? '1px solid #e8e2dc' : 'none'
                    }} />
                    <div style={{ fontSize: 13, fontWeight: 600, color: darkMode ? '#fff' : colors.charcoal }}>{c.name}</div>
                    <div style={{ fontSize: 11, color: darkMode ? '#6a5f5a' : '#a89f9a', fontFamily: 'monospace' }}>{c.hex}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Icons Tab */}
        {activeTab === 'icons' && (
          <div style={{ display: 'grid', gap: 24 }}>
            {/* App Icon Variations */}
            <div style={{
              background: darkMode ? '#2d2521' : '#fff',
              borderRadius: 20,
              padding: 40,
              boxShadow: darkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(45,37,33,0.06)'
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: darkMode ? '#a89f9a' : '#6b5f58', marginBottom: 32, textTransform: 'uppercase', letterSpacing: 1 }}>
                App Icon Options
              </h3>
              <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
                {/* Light background */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: 120,
                    height: 120,
                    borderRadius: 28,
                    background: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.offWhite} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    marginBottom: 12
                  }}>
                    <LogoMark size={80} />
                  </div>
                  <div style={{ fontSize: 12, color: darkMode ? '#a89f9a' : '#6b5f58' }}>Light Background</div>
                </div>
                {/* Colored background */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: 120,
                    height: 120,
                    borderRadius: 28,
                    background: `linear-gradient(135deg, ${colors.coral} 0%, ${colors.terracotta} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                    marginBottom: 12
                  }}>
                    <LogoMark size={80} variant="white" />
                  </div>
                  <div style={{ fontSize: 12, color: darkMode ? '#a89f9a' : '#6b5f58' }}>Colored Background</div>
                </div>
              </div>
            </div>

            {/* Size Test */}
            <div style={{
              background: darkMode ? '#2d2521' : '#fff',
              borderRadius: 20,
              padding: 40,
              boxShadow: darkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(45,37,33,0.06)'
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: darkMode ? '#a89f9a' : '#6b5f58', marginBottom: 32, textTransform: 'uppercase', letterSpacing: 1 }}>
                Scale Test
              </h3>
              <div style={{ display: 'flex', gap: 24, justifyContent: 'center', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                {[120, 80, 48, 32, 24, 16].map(size => (
                  <div key={size} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: size,
                      height: size,
                      background: darkMode ? '#1a1614' : '#f8f4f0',
                      borderRadius: size > 32 ? 12 : size > 16 ? 6 : 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 8
                    }}>
                      <LogoMark size={size * 0.75} />
                    </div>
                    <div style={{ fontSize: 10, color: darkMode ? '#6a5f5a' : '#a89f9a' }}>{size}px</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Usage Tab */}
        {activeTab === 'usage' && (
          <div style={{ display: 'grid', gap: 24 }}>
            {/* Do's */}
            <div style={{
              background: darkMode ? '#2d2521' : '#fff',
              borderRadius: 20,
              padding: 32,
              boxShadow: darkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(45,37,33,0.06)'
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: '#4CAF50', marginBottom: 20 }}>
                ✓ Do
              </h3>
              <ul style={{ 
                margin: 0, 
                padding: '0 0 0 20px', 
                color: darkMode ? '#e8e2dc' : colors.charcoal,
                lineHeight: 2,
                fontSize: 14
              }}>
                <li>Use provided logo files without modification</li>
                <li>Maintain minimum clear space around logo</li>
                <li>Use appropriate version for background color</li>
                <li>Scale logo proportionally</li>
                <li>Use monochrome versions for single-color applications</li>
              </ul>
            </div>

            {/* Don'ts */}
            <div style={{
              background: darkMode ? '#2d2521' : '#fff',
              borderRadius: 20,
              padding: 32,
              boxShadow: darkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(45,37,33,0.06)'
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: '#F44336', marginBottom: 20 }}>
                ✗ Don't
              </h3>
              <ul style={{ 
                margin: 0, 
                padding: '0 0 0 20px', 
                color: darkMode ? '#e8e2dc' : colors.charcoal,
                lineHeight: 2,
                fontSize: 14
              }}>
                <li>Stretch or distort the logo</li>
                <li>Change logo colors outside brand palette</li>
                <li>Add effects (shadows, outlines, glows)</li>
                <li>Place on busy or low-contrast backgrounds</li>
                <li>Rotate the logo</li>
                <li>Rearrange or separate logo elements</li>
              </ul>
            </div>

            {/* Typography */}
            <div style={{
              background: darkMode ? '#2d2521' : '#fff',
              borderRadius: 20,
              padding: 32,
              boxShadow: darkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(45,37,33,0.06)'
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: darkMode ? '#a89f9a' : '#6b5f58', marginBottom: 20, textTransform: 'uppercase', letterSpacing: 1 }}>
                Typography
              </h3>
              <div style={{ color: darkMode ? '#e8e2dc' : colors.charcoal }}>
                <p style={{ marginBottom: 16 }}>
                  <strong>Primary Font:</strong> Nunito (Google Fonts)
                </p>
                <p style={{ marginBottom: 16 }}>
                  <strong>Fallbacks:</strong> Poppins, Avenir, system-ui, sans-serif
                </p>
                <p style={{ marginBottom: 16 }}>
                  <strong>Wordmark:</strong> Nunito Bold (700), lowercase, letter-spacing: 1px
                </p>
                <div style={{ 
                  background: darkMode ? '#1a1614' : '#f8f4f0', 
                  padding: 24, 
                  borderRadius: 12,
                  marginTop: 20
                }}>
                  <span style={{ 
                    fontFamily: "'Nunito', system-ui, sans-serif", 
                    fontSize: 48, 
                    fontWeight: 700, 
                    color: darkMode ? '#fff' : colors.warmBrown,
                    letterSpacing: 1
                  }}>
                    chowk
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ 
        maxWidth: 600, 
        margin: '48px auto 0', 
        textAlign: 'center',
        color: darkMode ? '#6a5f5a' : '#a89f9a',
        fontSize: 13
      }}>
        Chowk Brand Kit v1.0 — Converging Petals Logo
      </div>
    </div>
  );
};

export default ChowkBrandShowcase;