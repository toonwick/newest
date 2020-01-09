import { GET_PRODUCTS } from './constants';

export const getProducts = () => dispatch => {
  return fetch('http://localhost:5000/api/products')
    .then(res => res.json())
    .then(products => dispatch({type: GET_PRODUCTS, payload: products}))
}