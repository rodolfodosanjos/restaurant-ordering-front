import React from 'react';
import ProductsMenu from './components/pages/ProductsMenu.jsx';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

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
