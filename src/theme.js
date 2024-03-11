import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import {
  grey, blue, red, lightGreen,
} from '@mui/material/colors';

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
      primary: {
        100: '#e9f6f3',
        200: '#d3eee8',
        300: '#bde5dc',
        400: '#a7ddd1',
        500: '#91d4c5',
        600: '#74aa9e',
        700: '#577f76',
        800: '#3a554f',
        900: '#1d2a27',
      },
      secondary: {
        100: '#fae9e3',
        200: '#f6d3c7',
        300: '#f1bdab',
        400: '#eda78f',
        500: '#e89173',
        600: '#ba745c',
        700: '#8b5745',
        800: '#5d3a2e',
        900: '#2e1d17',
      },
      deepOrange: {
        100: '#f7d9d0',
        200: '#efb4a1',
        300: '#e88e73',
        400: '#e06944',
        500: '#d84315',
        600: '#ad3611',
        700: '#82280d',
        800: '#561b08',
        900: '#2b0d04',
      },
      gray: {
        100: '#ececec',
        200: '#d8d8d8',
        300: '#c5c5c5',
        400: '#b1b1b1',
        500: '#9e9e9e',
        600: '#7e7e7e',
        700: '#5f5f5f',
        800: '#3f3f3f',
        900: '#202020',
      },
      darkBlue: {
        100: '#d1d6dc',
        200: '#a3adb9',
        300: '#748395',
        400: '#465a72',
        500: '#18314f',
        600: '#13273f',
        700: '#0e1d2f',
        800: '#0a1420',
        900: '#050a10',
      },
      eerieBlack: {
        100: '#d1d1d1',
        200: '#a3a3a3',
        300: '#757575',
        400: '#474747',
        500: '#191919',
        600: '#141414',
        700: '#0f0f0f',
        800: '#0a0a0a',
        900: '#050505',
      },
    }
    : {
      primary: {
        100: '#d9dcf0',
        200: '#b2b9e1',
        300: '#8c97d3',
        400: '#6574c4',
        500: '#3f51b5',
        600: '#324191',
        700: '#26316d',
        800: '#192048',
        900: '#0d1024',
      },
      secondary: {
        100: '#f6dcd3',
        200: '#edb8a7',
        300: '#e5957c',
        400: '#dc7150',
        500: '#d34e24',
        600: '#a93e1d',
        700: '#7f2f16',
        800: '#541f0e',
        900: '#2a1007',
      },
      imperialRed: {
        100: '#fed7d9',
        200: '#fdafb3',
        300: '#fd868c',
        400: '#fc5e66',
        500: '#fb3640',
        600: '#c92b33',
        700: '#972026',
        800: '#64161a',
        900: '#320b0d',
      },
      lavender: {
        100: '#f7faff',
        200: '#eff4ff',
        300: '#e8efff',
        400: '#e0e9ff',
        500: '#d8e4ff',
        600: '#adb6cc',
        700: '#828999',
        800: '#565b66',
        900: '#2b2e33',
      },
      raisinBlack: {
        100: '#d2d4d6',
        200: '#a6a8ad',
        300: '#797d84',
        400: '#4d515b',
        500: '#202632',
        600: '#1a1e28',
        700: '#13171e',
        800: '#0d0f14',
        900: '#06080a',
      },
      gray: {
        100: '#ececec',
        200: '#d8d8d8',
        300: '#c5c5c5',
        400: '#b1b1b1',
        500: '#9e9e9e',
        600: '#7e7e7e',
        700: '#5f5f5f',
        800: '#3f3f3f',
        900: '#202020',
      },
    }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
          // Palette values for dark mode
          primary: {
            light: colors.primary[400],
            main: colors.primary[500], // Amber
            dark: colors.primary[700],
            contrastText: '#FFF',
          },
          secondary: {
            main: colors.secondary[500], // Cyan
            contrastText: '#FFF',
          },
          gray: {
            light: colors.gray[100],
            main: colors.gray[500],
            dark: colors.gray[600],
          },
          error: {
            main: colors.deepOrange[500], // Deep Orange
          },
          background: {
            default: colors.eerieBlack[500], // Dark background
            paper: colors.eerieBlack[600], // Slightly lighter for paper
            accent: colors.darkBlue[800], // Light green as an accent
          },
          text: {
            primary: '#d7deea', // Light grey for primary text
            secondary: '#BDBDBD', // Dimmed grey for secondary text
          },
        }
        : {
          // Palette values for light mode
          primary: {
            light: colors.primary[400],
            main: colors.primary[500], // Indigo
            dark: colors.primary[700],
            contrastText: '#FFF',
          },
          secondary: {
            main: colors.secondary[500], // Pink
            contrastText: '#FFF',
          },
          gray: {
            light: colors.gray[100],
            main: colors.gray[500],
            dark: colors.gray[600],
          },
          error: {
            main: colors.imperialRed[500], // Red
          },
          background: {
            default: '#f4f3fd', // Light grey for main background
            paper: '#FFFFFF', // White for paper
            accent: colors.lavender[500], // Light green as an accent
          },
          text: {
            primary: colors.raisinBlack[600], // Dark grey for primary text
            secondary: colors.raisinBlack[400], // Medium grey for secondary text
          },
        }),
    },
    typography: {
      fontFamily: 'Source Code Pro, serif',
      h1: {
        fontWeight: 700,
        fontSize: '3rem',
      },
      h2: {
        fontWeight: 600,
        fontSize: '2rem',
      },
      h3: {
        fontWeight: 500,
        fontSize: '1.5rem',
      },
      h4: {
        fontWeight: 500,
        fontSize: '1rem',
      },
      h5: {
        fontWeight: 500,
        fontSize: '0.875rem',
      },
      h6: {
        fontWeight: 300,
        fontSize: '0.75rem',
      },
      body1: {
        fontWeight: 400,
        fontSize: '1rem',
      },
      body2: {
        fontWeight: 400,
        fontSize: '0.875rem',
      },
      button: {
        fontSize: '0.875rem',
        fontWeight: 400,
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          // Custom "code" style
          code: {
            fontFamily: '"Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", monospace',
            color: '#d7deea',
            fontSize: '0.875rem', // 14px when the base font size is 16px
          },
        },
      },
    },
    constants: { appBarHeight: 70 },
  };
};
// return {
//   palette: {
//     mode,
//     ...(mode === 'dark'
//       ? {
//         // palette values for dark mode
//         primary: {
//           main: grey[500],
//         },
//         secondary: {
//           main: blue[500],
//         },
//         neutral: {
//           // dark: colors.grey[700],
//           main: red[500],
//           // light: colors.grey[100],
//         },
//         background: {
//           default: '#001e3c',
//         },
//       }
//       : {
//         // palette values for light mode
//         primary: {
//           light: colors.primary[100],
//           main: colors.primary[500],
//           dark: colors.primary[900],
//         },
//         secondary: {
//           main: colors.secondary[500],
//         },
//         background: {
//           default: '#f4f3fd',
//           paper: '#f9f9f9',
//           accent: colors.lightBlueAccent[500],
//         },
//         text: {
//           primary: #0f0f0f
//         }
//         error: {
//           main: '#ff8a00',
//         },
//         contrastThreshold: 3,
//         tonalOffset: 0.2,
//       }),
//   },
//   typography: {
//     fontFamily: ['Source Code Pro', 'sans-serif'].join(','),
//     fontSize: 12,
//     h1: {
//       fontFamily: ['Source Code Pro', 'sans-serif'].join(','),
//       fontSize: 40,
//       fontWeight: 700,
//     },
//     h2: {
//       fontFamily: ['Source Code Pro', 'sans-serif'].join(','),
//       fontSize: 32,
//     },
//     h3: {
//       fontFamily: ['Source Code Pro', 'sans-serif'].join(','),
//       fontSize: 24,
//     },
//     h4: {
//       fontFamily: ['Source Code Pro', 'sans-serif'].join(','),
//       fontSize: 20,
//     },
//     h5: {
//       fontFamily: ['Source Code Pro', 'sans-serif'].join(','),
//       fontSize: 16,
//     },
//     h6: {
//       fontFamily: ['Source Code Pro', 'sans-serif'].join(','),
//       fontSize: 14,
//     },
//   },
//   constants: { appBarHeight: 70 },
// };

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [],
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
