import React from 'react';
import {ThemeProvider} from 'styled-components'
import AppRoutes from './Routes/AppRoutes';
import GlobalStyle from './Config/GlobalStyle';
import theme from './Config/theme';

function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>

  );
}

export default App;
