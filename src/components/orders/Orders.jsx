import React from 'react';
import OrdersList from '../orders/OrdersList.jsx';

export default () => (
	<div>
		<OrdersList orders={[{
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
		}, {
			_id: 321,
			table: 'Mesa 50',
			notes: 'Com pepino',
			products: [{
				_id: 567,
				imageSrc: 'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000wKrzFEAS/5984e607e4b03424676c8a33.jpg&w=620&h=400',
				name: 'Sushi 20 peças',
				category: 'sushi',
				description: 'Sushi, sashimi e outros',
				price: 50
			}]
		}]}/>
	</div>
);