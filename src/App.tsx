import React from 'react';
import {ThemeProvider, createMuiTheme } from '@material-ui/core';
import Home from './pages/Home';



function App() {
  const theme = createMuiTheme({
    spacing:4,
    palette:{
      // type:'dark',

      primary:{
        main:'#f44336',
      },

      secondary:{
        main:'#3f51b5',
      },

      background:{
        default:'#232323',
        // dark: '#181818',
        paper:'#232323',
      },
    },
  });

  
  return (
    <ThemeProvider theme={theme}>{/** O Theme Provader envolve a aplicação */}
      <Home />
    </ThemeProvider>
  );
}

export default App;
