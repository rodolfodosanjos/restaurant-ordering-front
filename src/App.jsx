import React from 'react';
import ProductsToOrderDialog from './components/pages/ProductsToOrderDialog.jsx';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
	palette: {
		primary: blue,
	},
});

const App = () => (
	<MuiThemeProvider theme={theme}>
		<ProductsToOrderDialog open={true} onClose={() => {}}/>
	</MuiThemeProvider>
);

export default App;
