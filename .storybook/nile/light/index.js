import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'black',
  colorSecondary: '#27272a',

  // UI
  appBg: '#e5e7eb',
  appContentBg: '#f3f4f6',
  appBorderColor: 'gray',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Nile',
  brandUrl: 'https://nile.io',
  brandImage: 'https://file.mir4global.com/nile/resources/icons/common/logo/icon_logo_main.svg',
  brandTarget: '_self',
});
