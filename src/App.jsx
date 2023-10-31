import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles'; 
import HomePage from './HomePage';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './I18n';





const customTheme = createTheme({
  typography: {
    fontFamily: 'Rubik Dirt', // Use the chosen font here
  },
});

function App() {
  return (
    <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={customTheme}>
      <HomePage />
    </ThemeProvider>
    </I18nextProvider>

  );
}

export default App;
