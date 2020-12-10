import { toast } from 'react-toastify';
import { BASE_PATH, CART } from '../utils/constants';
import { size, includes, remove } from 'lodash'
import { authFetch } from '../utils/fetch';


export function getProductsCart() {
    const cart = localStorage.getItem(CART);
    if (!cart) {
        return null;
    } else {
        const products = cart.split(",");
        return products;
    }
}

export function addProductCart(product) {
    const cart = getProductsCart();
    if (!cart) {
        localStorage.setItem(CART, product);
        toast.success("Agregado Correctamente")
    } else {
        const productFound = includes(cart, product);
        if (productFound) {
            toast.warning("Ya has añadido este producto");
        } else {
            cart.push(product);
            localStorage.setItem(CART, cart);
            toast.success("Añadido Correctamente")
        }
    }
}

export function countProductsCart() {
    const cart = getProductsCart();
    if (!cart) {
        return 0;
    } else {
        return size(cart);
    }
}

export function removeProductCart(product) {
    const cart = getProductsCart();
    remove(cart, (item) => {
        return item === product;
    });

    if (size(cart) > 0) {
        localStorage.setItem(CART, cart)
    } else {
        localStorage.removeItem(CART)
    }
}

export async function paymentCardApi(token, products, idUser, adress, logout) {
    try {
        const adressShipping = adress;
        delete adressShipping.user;
        delete adressShipping.createdAt;

        const url = `${BASE_PATH}/orders`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token,
                products,
                idUser,
                adressShipping
            })
        };
        const result = await authFetch(url, params, logout);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export function removeAllProductsCart(){
    localStorage.removeItem(CART);
}