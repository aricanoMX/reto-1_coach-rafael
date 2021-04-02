import { createGlobalStyle } from 'styled-components';

export const palette = {
  firstColor: ``,
  secondColor: ``,
  iconsColor: `#1c85e8`,
  iconsColorAlpha: `rgba(28,133,232,0.5)`,
  secondColorAlphaColor: `rgba()`,
  firstDarkerColorAlpha: `rgba()`,
  firstTextColor: `#27261a`,
  secondTextColor: `#aaa`,
  borderColor: `#ececec`,
  borderColorAlpha: `rgba(236, 236, 236, .25)`,
  dividerColor: `#e3e3e4`,
  dividerColorAlpha: `rgba(227, 227, 228, 0.5)`,
};

export const fonts = {
  font: `'Nunito Sans', sans-serif`,
  // font: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  titleFont: `'Sansita', sans-serif`,
};
export const sizes = {
  mobile: `375px`,
  tablet: `768px`,
  desktop: `1024px`,
  desktopLarge: `1440px`,
};
export const devices = {
  breakpointsMobile: `(min-width: ${sizes.mobile})`,
  breakpointsTablet: `(min-width: ${sizes.tablet})`,
  breakpointsDesktop: `(min-width: ${sizes.desktop})`,
  breakpointsDesktopLarge: `(min-width: ${sizes.desktopLarge})`,
};

export const GlobalStyle = createGlobalStyle`
*,
&::after,
&::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
  font-family: ${fonts.font};
  scroll-behavior: smooth;
  height: 100vh;
}
body {
  margin: 0;
  overflow-x: hidden;
}
a{
  display: block;
  text-align: center;
  text-decoration: none;
  transition: all 0.5 ease-out;
  margin: 0;
  &:hover{
    opacity: 0.75;
  }
}
p {
  margin: 0;
}
img {
  max-width: 100%;
  height: auto;
}
li{
  list-style: none;
}

`;
