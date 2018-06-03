import React from 'react';
import Orders from './components/pages/Orders.jsx';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Orders />
  </MuiThemeProvider>
);

export default App;
