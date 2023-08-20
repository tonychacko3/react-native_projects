import { createStore } from 'redux';
import { CartReduser } from './CartReduser';

export const myStore=createStore(CartReduser)