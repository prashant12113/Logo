import React, { useEffect, useState } from 'react';

const ChowkCP1BrandShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('logos');
  const [viewportWidth, setViewportWidth] = useState(() => (
    typeof window !== 'undefined' ? window.innerWidth : 1024
  ));

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isMobile = viewportWidth < 640;
  const isSmallMobile = viewportWidth < 420;

  const colors = {
    flame: '#E85D3B',
    rust: '#D94E2A',
    saffron: '#F4A261',
    coral: '#E76F51',
    charcoal: '#2D2521',
    warmBrown: '#2D2926',
    cream: '#FFF8F5',
    offWhite: '#FFF0EB',
    dark: '#1A1614'
  };

  // Logo Mark Component - Converging Paths Style
  const LogoMark = ({ size = 100, variant = 'color', showCenter = true }) => {
    const getColors = () => {
      switch(variant) {
        case 'mono-black':
          return { primary: '#2D2521', secondary: '#2D2521', secondaryOpacity: 0.6, center: '#FFFFFF' };
        case 'mono-white':
          return { primary: '#FFFFFF', secondary: '#FFFFFF', secondaryOpacity: 0.6, center: colors.dark };
        case 'white':
          return { primary: '#FFFFFF', secondary: '#FFFFFF', secondaryOpacity: 0.7, center: colors.rust };
        default:
          return { primary: 'url(#cp1-mark-primary)', secondary: 'url(#cp1-mark-secondary)', secondaryOpacity: 0.9, center: colors.cream };
      }
    };
    const c = getColors();
    
    return (
      <svg viewBox="0 0 100 100" style={{ width: size, height: size }}>
        <defs>
          <linearGradient id="cp1-mark-primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.flame}/>
            <stop offset="100%" stopColor={colors.rust}/>
          </linearGradient>
          <linearGradient id="cp1-mark-secondary" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.saffron}/>
            <stop offset="100%" stopColor={colors.coral}/>
          </linearGradient>
        </defs>
        {/* Cardinal arrow paths */}
        <path d="M50 8 L50 32 L42 40 L58 40 L50 32 L50 8" fill={c.primary}/>
        <path d="M92 50 L68 50 L60 42 L60 58 L68 50 L92 50" fill={c.primary}/>
        <path d="M50 92 L50 68 L58 60 L42 60 L50 68 L50 92" fill={c.primary}/>
        <path d="M8 50 L32 50 L40 58 L40 42 L32 50 L8 50" fill={c.primary}/>
        {/* Diagonal arrow paths */}
        <path d="M80 20 L62 38 L56 34 L64 26 L72 18 L80 20" fill={c.secondary} opacity={c.secondaryOpacity}/>
        <path d="M80 80 L62 62 L66 56 L74 64 L82 72 L80 80" fill={c.secondary} opacity={c.secondaryOpacity}/>
        <path d="M20 80 L38 62 L34 56 L26 64 L18 72 L20 80" fill={c.secondary} opacity={c.secondaryOpacity}/>
        <path d="M20 20 L38 38 L34 44 L26 36 L18 28 L20 20" fill={c.secondary} opacity={c.secondaryOpacity}/>
        {/* Center */}
        {showCenter && (
          <>
            <circle cx="50" cy="50" r="12" fill={c.primary}/>
            <circle cx="50" cy="50" r="6" fill={c.center}/>
          </>
        )}
      </svg>
    );
  };

  // Full Logo Component
  const FullLogo = ({ variant = 'color', scale = 1 }) => {
    const textColor = variant === 'dark' || variant === 'mono-white' ? '#FFFFFF' : colors.warmBrown;
    const markVariant = variant === 'mono-black' ? 'mono-black' : variant === 'mono-white' ? 'mono-white' : 'color';
    const responsiveScale = scale * (isMobile ? 0.85 : 1);
    
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 * responsiveScale }}>
        <LogoMark size={80 * responsiveScale} variant={markVariant} />
        <span style={{ 
          fontFamily: "'Nunito', system-ui, sans-serif", 
          fontSize: 44 * responsiveScale, 
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

  const heroScale = isMobile ? 1.0 : 1.2;

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: darkMode 
        ? 'linear-gradient(135deg, #1a1614 0%, #2d2521 100%)' 
        : 'linear-gradient(135deg, #fffaf8 0%, #fff5f0 100%)',
      padding: isMobile ? '24px 16px' : '40px 24px',
      fontFamily: "'Nunito', system-ui, sans-serif",
      transition: 'all 0.3s ease'
    }}>
      {/* Header */}
      <div style={{ maxWidth: 1000, margin: `0 auto ${isMobile ? 28 : 40}px`, textAlign: 'center' }}>
        <div style={{ marginBottom: isMobile ? 16 : 24 }}>
          <LogoMark size={isMobile ? 64 : 80} />
        </div>
        <h1 style={{ 
          fontSize: isMobile ? 28 : 36, 
          fontWeight: 800, 
          color: darkMode ? '#fff' : colors.charcoal,
          marginBottom: 8
        }}>
          Chowk Brand Kit
        </h1>
        <h2 style={{ 
          fontSize: isMobile ? 20 : 28, 
          fontWeight: 500, 
          color: darkMode ? '#fff' : colors.charcoal,
          marginBottom: 8
        }}>
          "Chowk" (चौक) is a Hindi term referring to a public square, marketplace, intersection, or gathering place commonly found across South Asia, particularly in India. The word can also mean a crossroads where multiple paths meet, representing community, commerce, and connectivity.
        </h2>
        <p style={{ 
          fontSize: isMobile ? 15 : 16, 
          color: darkMode ? '#a89f9a' : '#6b5f58',
          marginBottom: 6
        }}>
          Converging Paths — Dynamic Arrow Style
        </p>
        <p style={{ 
          fontSize: isMobile ? 12 : 13, 
          color: darkMode ? '#7a716c' : '#9a918c',
          marginBottom: 20,
          fontStyle: 'italic'
        }}>
          Directional, discovery-focused, action-oriented
        </p>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            background: darkMode ? '#3d3532' : '#f0e8e4',
            color: darkMode ? '#fff' : colors.charcoal,
            border: 'none',
            padding: isMobile ? '10px 16px' : '10px 20px',
            borderRadius: 20,
            cursor: 'pointer',
            fontSize: isMobile ? 13 : 14,
            fontWeight: 600
          }}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Tabs */}
      <div style={{ 
        maxWidth: 1000, 
        margin: `0 auto ${isMobile ? 20 : 32}px`,
        display: 'flex',
        gap: isMobile ? 10 : 8,
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: activeTab === tab.id 
                ? `linear-gradient(135deg, ${colors.flame} 0%, ${colors.rust} 100%)`
                : (darkMode ? '#2d2521' : '#fff'),
              color: activeTab === tab.id ? '#fff' : (darkMode ? '#e8e2dc' : colors.charcoal),
              border: `2px solid ${activeTab === tab.id ? 'transparent' : (darkMode ? '#3d3532' : '#f0e8e4')}`,
              padding: isMobile ? '10px 14px' : '10px 20px',
              borderRadius: 10,
              cursor: 'pointer',
              fontSize: isMobile ? 13 : 14,
              fontWeight: 600,
              transition: 'all 0.2s ease',
              minWidth: isMobile ? 140 : undefined
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
          <div style={{ display: 'grid', gap: isMobile ? 16 : 24 }}>
            {/* Primary Logo */}
            <div style={{
              background: darkMode ? '#2d2521' : '#fff',
              borderRadius: isMobile ? 16 : 20,
              padding: isMobile ? 24 : 40,
              boxShadow: darkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(45,37,33,0.06)'
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: darkMode ? '#a89f9a' : '#6b5f58', marginBottom: 24, textTransform: 'uppercase', letterSpacing: 1 }}>
                Primary Logo
              </h3>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FullLogo variant="color" scale={heroScale} />
              </div>
            </div>

            {/* Dark Mode Logo */}
            <div style={{
              background: colors.dark,
              borderRadius: isMobile ? 16 : 20,
              padding: isMobile ? 24 : 40
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: '#a89f9a', marginBottom: 24, textTransform: 'uppercase', letterSpacing: 1 }}>
                Dark Mode
              </h3>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <FullLogo variant="dark" scale={heroScale} />
              </div>
            </div>

            {/* Monochrome Versions */}
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 16 : 24 }}>
              <div style={{
                background: darkMode ? '#2d2521' : '#fff',
                borderRadius: isMobile ? 16 : 20,
                padding: isMobile ? 24 : 32,
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
                borderRadius: isMobile ? 16 : 20,
                padding: isMobile ? 24 : 32
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
              borderRadius: isMobile ? 16 : 20,
              padding: isMobile ? 24 : 40,
              boxShadow: darkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(45,37,33,0.06)'
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: darkMode ? '#a89f9a' : '#6b5f58', marginBottom: 24, textTransform: 'uppercase', letterSpacing: 1 }}>
                Stacked Version
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isMobile ? 12 : 16 }}>
                <LogoMark size={isMobile ? 84 : 100} />
                <span style={{ 
                  fontFamily: "'Nunito', system-ui, sans-serif", 
                  fontSize: isMobile ? 26 : 32, 
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
            borderRadius: isMobile ? 16 : 20,
            padding: isMobile ? 24 : 40,
            boxShadow: darkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(45,37,33,0.06)'
          }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: darkMode ? '#a89f9a' : '#6b5f58', marginBottom: 32, textTransform: 'uppercase', letterSpacing: 1 }}>
              Brand Colors
            </h3>
            
            <div style={{ marginBottom: 40 }}>
              <h4 style={{ fontSize: 13, fontWeight: 600, color: darkMode ? '#fff' : colors.charcoal, marginBottom: 16 }}>Primary</h4>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {[
                  { name: 'Flame', hex: colors.flame },
                  { name: 'Rust', hex: colors.rust }
                ].map(c => (
                  <div key={c.name} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: isMobile ? 64 : 80,
                      height: isMobile ? 64 : 80,
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
                  { name: 'Saffron', hex: colors.saffron },
                  { name: 'Coral', hex: colors.coral }
                ].map(c => (
                  <div key={c.name} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: isMobile ? 64 : 80,
                      height: isMobile ? 64 : 80,
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
                  { name: 'Dark', hex: colors.dark },
                  { name: 'Cream', hex: colors.cream },
                  { name: 'Off-White', hex: colors.offWhite }
                ].map(c => (
                  <div key={c.name} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: isMobile ? 64 : 80,
                      height: isMobile ? 64 : 80,
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

            {/* Gradient Preview */}
            <div style={{ marginTop: 40 }}>
              <h4 style={{ fontSize: 13, fontWeight: 600, color: darkMode ? '#fff' : colors.charcoal, marginBottom: 16 }}>Brand Gradient</h4>
              <div style={{
                height: 60,
                borderRadius: 12,
                background: `linear-gradient(135deg, ${colors.flame} 0%, ${colors.rust} 100%)`,
                boxShadow: '0 4px 16px rgba(232,93,59,0.3)'
              }} />
            </div>
          </div>
        )}

        {/* Icons Tab */}
        {activeTab === 'icons' && (
          <div style={{ display: 'grid', gap: isMobile ? 16 : 24 }}>
            {/* App Icon Variations */}
            <div style={{
              background: darkMode ? '#2d2521' : '#fff',
              borderRadius: isMobile ? 16 : 20,
              padding: isMobile ? 24 : 40,
              boxShadow: darkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(45,37,33,0.06)'
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: darkMode ? '#a89f9a' : '#6b5f58', marginBottom: 32, textTransform: 'uppercase', letterSpacing: 1 }}>
                App Icon Options
              </h3>
              <div style={{ display: 'flex', gap: isMobile ? 20 : 32, justifyContent: 'center', flexWrap: 'wrap' }}>
                {/* Light background */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: isMobile ? 104 : 120,
                    height: isMobile ? 104 : 120,
                    borderRadius: isMobile ? 24 : 28,
                    background: `linear-gradient(135deg, ${colors.cream} 0%, ${colors.offWhite} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    marginBottom: 12
                  }}>
                    <LogoMark size={isMobile ? 64 : 80} />
                  </div>
                  <div style={{ fontSize: 12, color: darkMode ? '#a89f9a' : '#6b5f58' }}>Light Background</div>
                </div>
                {/* Colored background */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: isMobile ? 104 : 120,
                    height: isMobile ? 104 : 120,
                    borderRadius: isMobile ? 24 : 28,
                    background: `linear-gradient(135deg, ${colors.flame} 0%, ${colors.rust} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(232,93,59,0.3)',
                    marginBottom: 12
                  }}>
                    <LogoMark size={isMobile ? 64 : 80} variant="white" />
                  </div>
                  <div style={{ fontSize: 12, color: darkMode ? '#a89f9a' : '#6b5f58' }}>Flame Background</div>
                </div>
                {/* Dark background */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: isMobile ? 104 : 120,
                    height: isMobile ? 104 : 120,
                    borderRadius: isMobile ? 24 : 28,
                    background: colors.charcoal,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                    marginBottom: 12
                  }}>
                    <LogoMark size={isMobile ? 64 : 80} />
                  </div>
                  <div style={{ fontSize: 12, color: darkMode ? '#a89f9a' : '#6b5f58' }}>Dark Background</div>
                </div>
              </div>
            </div>

            {/* Size Test */}
            <div style={{
              background: darkMode ? '#2d2521' : '#fff',
              borderRadius: isMobile ? 16 : 20,
              padding: isMobile ? 24 : 40,
              boxShadow: darkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(45,37,33,0.06)'
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: darkMode ? '#a89f9a' : '#6b5f58', marginBottom: 32, textTransform: 'uppercase', letterSpacing: 1 }}>
                Scale Test
              </h3>
              <div style={{ display: 'flex', gap: isMobile ? 16 : 24, justifyContent: 'center', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                {[120, 80, 48, 32, 24, 16].map(size => (
                  <div key={size} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: size,
                      height: size,
                      background: darkMode ? colors.dark : '#f8f4f0',
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

            {/* Favicon Note */}
            <div style={{
              background: darkMode ? '#2d2521' : '#fff',
              borderRadius: isMobile ? 16 : 20,
              padding: isMobile ? 20 : 24,
              boxShadow: darkMode ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(45,37,33,0.06)',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center',
              gap: isMobile ? 12 : 16
            }}>
              <div style={{
                width: isMobile ? 40 : 48,
                height: isMobile ? 40 : 48,
                background: colors.flame,
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ fontSize: 24 }}>💡</span>
              </div>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 600, color: darkMode ? '#fff' : colors.charcoal, marginBottom: 4 }}>
                  Favicon Tip
                </h4>
                <p style={{ fontSize: 13, color: darkMode ? '#a89f9a' : '#6b5f58', margin: 0, lineHeight: 1.5 }}>
                  At 16-32px, use the simplified favicon version with only the 4 cardinal arrows for better clarity.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Usage Tab */}
        {activeTab === 'usage' && (
          <div style={{ display: 'grid', gap: isMobile ? 16 : 24 }}>
            {/* Do's */}
            {/* <div style={{
              background: darkMode ? '#2d2521' : '#fff',
              borderRadius: isMobile ? 16 : 20,
              padding: isMobile ? 24 : 32,
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
                <li>Use simplified favicon at 16-32px sizes</li>
              </ul>
            </div> */}

            {/* Don'ts */}
            {/* <div style={{
              background: darkMode ? '#2d2521' : '#fff',
              borderRadius: isMobile ? 16 : 20,
              padding: isMobile ? 24 : 32,
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
                <li>Rotate the logo or change arrow directions</li>
                <li>Rearrange or separate logo elements</li>
              </ul>
            </div> */}

            {/* When to use this version */}
            {/* <div style={{
              background: `linear-gradient(135deg, ${colors.flame}15 0%, ${colors.rust}15 100%)`,
              borderRadius: isMobile ? 16 : 20,
              padding: isMobile ? 24 : 32,
              border: `2px solid ${colors.flame}30`
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: darkMode ? '#fff' : colors.charcoal, marginBottom: 20 }}>
                🎯 When to Use Converging Paths
              </h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: 16,
                color: darkMode ? '#e8e2dc' : colors.charcoal,
                fontSize: 14
              }}>
                <div>
                  <strong style={{ color: colors.flame }}>Best For:</strong>
                  <ul style={{ margin: '8px 0 0 0', padding: '0 0 0 18px', lineHeight: 1.8 }}>
                    <li>Discovery features</li>
                    <li>Search interfaces</li>
                    <li>Navigation/wayfinding</li>
                    <li>Action-oriented contexts</li>
                    <li>Launch campaigns</li>
                  </ul>
                </div>
                <div>
                  <strong style={{ color: colors.flame }}>Personality:</strong>
                  <ul style={{ margin: '8px 0 0 0', padding: '0 0 0 18px', lineHeight: 1.8 }}>
                    <li>Dynamic & energetic</li>
                    <li>Directional & purposeful</li>
                    <li>Active & movement-focused</li>
                    <li>Discovery-oriented</li>
                    <li>Modern tech aesthetic</li>
                  </ul>
                </div>
              </div>
            </div> */}

            {/* Typography */}
            <div style={{
              background: darkMode ? '#2d2521' : '#fff',
              borderRadius: isMobile ? 16 : 20,
              padding: isMobile ? 24 : 32,
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
                  background: darkMode ? colors.dark : '#f8f4f0', 
                  padding: 24, 
                  borderRadius: 12,
                  marginTop: 20
                }}>
                  <span style={{ 
                    fontFamily: "'Nunito', system-ui, sans-serif", 
                    fontSize: isMobile ? 38 : 48, 
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
        margin: `${isMobile ? 32 : 48}px auto 0`, 
        textAlign: 'center',
        color: darkMode ? '#6a5f5a' : '#a89f9a',
        fontSize: isMobile ? 12 : 13
      }}>
        Chowk Brand Kit v1.0 — Converging Paths Logo
      </div>
    </div>
  );
};

export default ChowkCP1BrandShowcase;
