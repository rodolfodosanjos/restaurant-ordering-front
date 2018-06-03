import React from 'react';
import ProductsMenu from './components/pages/ProductsMenu.jsx';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ProductsMenu />
  </MuiThemeProvider>
);

export default App;
