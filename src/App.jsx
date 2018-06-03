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
		<ProductsToOrderDialog
			open={true}
			onClose={() => {}}
			order={{
				_id: 123,
				table: 'Mesa 25',
				notes: 'Sem pepino',
				products: [{
					_id: 123,
					imageSrc: 'https://portal.minervafoods.com/files/styles/blog_full_page/public/como_fazer_hamburguer_caseiro.jpg?itok=CyGvXnuY',
					name: 'Hamburguer com batata frita',
					category: 'hamburguer',
					description: 'Hamburguer com queijo, carne e batata frita',
					price: 40
				}, {
					_id: 321,
					imageSrc: 'http://d2gtpjxvvd720b.cloudfront.net/system/newsletter_item/social_image/182/default_hungry-girl-healthy-spaghetti-squash-shrimp-scampi.jpg',
					name: 'Macarrão com camarão',
					category: 'massas',
					description: 'Espaguete com camarão',
					price: 45.4
				}]
			}}/>
	</MuiThemeProvider>
);

export default App;
