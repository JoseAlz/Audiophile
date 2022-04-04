import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      weights: {
        heading: number;
        subheading: number;
        body: number;
      };
    };
    colors: {
      mainBg: string;
      silver: string;
      brand: string;
      accent: string;
      white: string;
      black: string;
      smokeyBlack: string;
    };
  }
}