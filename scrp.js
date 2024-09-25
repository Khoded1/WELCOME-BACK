// //importing module
// import {
// 	addToCart,
// 	totalPrice as price,
// 	totalQuantity,
// } from './shoppingCart.js';
// addToCart(' bread', 5);
// console.log(price, totalQuantity);
// import * as ShoppingCart from './shoppingCart.js';
// // ShoppingCart.addToCart('bread', 5);

console.log('Importing module');

import add, { cart } from './shoppingCart.js';
add('bread', 5);
add('pizza', 7);
add('apple', 5);

console.log(cart);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await res.json();
	// console.log(data);

	return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// NOT VERY CLEAN
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

const ShoppingCart2 = (function () {
	const cart = [];
	const shoppingCost = 10;
	const totalPrice = 237;
	const totalQuantity = 23;

	const addToCart = function (product, quantity) {
		cart.push({ product, quantity });
		console.log(
			`${quantity} ${product} added to cart (shipping cost is ${shoppingCost})`
		);
	};

	const orderStock = function (product, quantity) {
		console.log(`${quantity} ${product} ordered from supplier`);
	};

	return {
		addToCart,
		cart,
		totalPrice,
		totalQuantity,
	};
})();
ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
	cart: [
		{ product: 'bread', quantity: 5 },
		{ product: 'pizza', quantity: 10 },
	],
	user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);
