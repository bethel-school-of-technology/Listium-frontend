const breakpoints = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  };

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

  const elevation = {
    shadow: {
      low: '0px 4px 8px rgba(0, 0, 0, 0.08)',
      medium: '0px 8px 20px rgba(0, 0, 0, 0.1)',
      high: '0px 12px 32px rgba(0, 0, 0, 0.12)'
    }
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
    breakpoints
}

export default theme;
