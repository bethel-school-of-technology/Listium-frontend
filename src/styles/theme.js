const breakpoints = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  };

  const colors = {
      primary: '#FF5865',
      secondary: '#6D9EF0',
      accent1: '#FDBC62',
      accent2: '#EF98C8',
      accent3: '#89C6E8'
    };
  

  const neutrals = {
      extraDark: '#252446',
      dark: '#44408A',
      grey: '#6D6D77',
      lightGrey: '#D4D4DC' 
    };
 
  const overlays = {
    light: {
      _100: 'rgba(255, 255, 255, .08)',
      _200: 'rgba(255, 255, 255, .16)',
      _300: 'rgba(255, 255, 255, .32)',
      _400: 'rgba(255, 255, 255, .72)'
    }
  };

  const elevation = {
    shadow: {
      low: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      medium: '0px 8px 20px rgba(0, 0, 0, 0.2)',
      high: '0px 12px 32px rgba(0, 0, 0, 0.40)'
    }
  }

  const mediaQueries = {
    mobileS: `@media (max-width: ${breakpoints.mobileS})`,
    mobileM: `@media (max-width: ${breakpoints.mobileM})`,
    mobileL: `@media (max-width: ${breakpoints.mobileL})`,
    tablet: `@media (max-width: ${breakpoints.tablet})`,
    laptop: `@media (max-width: ${breakpoints.laptop})`,
    laptopL: `@media (max-width: ${breakpoints.laptopL})`,
    desktop: `@media (max-width: ${breakpoints.desktop})`,
    desktopL: `@media (max-width: ${breakpoints.desktop})`
  };

  const layouts = {
    spacing: {
      none: '0px',
      xs: '4px',
      s: '8px',
      m: '16px',
      l: '24px',
      xl: '32px',
      xxl: '64px'
    }
  };

const theme = {
    mediaQueries,
    layouts,
    elevation,
    breakpoints,
    colors,
    overlays,
    neutrals
};

export default theme;
