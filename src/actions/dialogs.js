export const OPEN_ORDER_SAVE_DIALOG = 'OPEN_ORDER_SAVE_DIALOG';
export const CLOSE_ORDER_SAVE_DIALOG = 'CLOSE_ORDER_SAVE_DIALOG';
export const OPEN_PRODUCTS_TO_ORDER_DIALOG = 'OPEN_PRODUCTS_TO_ORDER_DIALOG';
export const CLOSE_PRODUCTS_TO_ORDER_DIALOG = 'CLOSE_PRODUCTS_TO_ORDER_DIALOG';

export const openOrderSaveDialog = () => ({
	type: OPEN_ORDER_SAVE_DIALOG
});

export const closeOrderSaveDialog = () => ({
	type: CLOSE_ORDER_SAVE_DIALOG
});

export const openProductsToOrderDialog = () => ({
	type: OPEN_PRODUCTS_TO_ORDER_DIALOG
});

export const closeProductsToOrderDialog = () => ({
	type: CLOSE_PRODUCTS_TO_ORDER_DIALOG
});
