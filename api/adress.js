import { BASE_PATH } from '../utils/constants';
import { authFetch } from '../utils/fetch';

export async function createAdressApi(adress, logout) {
    try {
        const url = `${BASE_PATH}/adresses`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(adress),
        };
        const result = await authFetch(url, params, logout);
        return result;
    } catch (error) {
        console.log(error)
        return null;
    }
}

export async function getAdressesApi(idUser, logout) {
    try {
        const url = `${BASE_PATH}/adresses?user=${idUser}`;
        const result = await authFetch(url, null, logout);
        if (result.statusCode === 500) throw "Error del servidor"
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function deleteAdressApi(idAdress, logout) {
    try {
        const url = `${BASE_PATH}/adresses/${idAdress}`;
        const params = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        };
        const result = await authFetch(url, params, logout)
        if (result.statusCode === 500) throw "Error del servidor"
        return true;
    } catch (error) {
        console.log(error)
        return false;
    }
}

export async function updateAdressApi(idAdress, adress, logout) {
    try {
        const url = `${BASE_PATH}/adresses/${idAdress}`;
        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(adress)
        };
        const result = await authFetch(url, params,logout);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }

}
/*
{
    "order": {
        "email": "dora.arroyave@hotmail.com",
        "send_receipt": true,
        "send_fulfillment_receipt": true,
        "line_items": [
            {
                "variant_id": 37681197514925,
                "quantity": 1
            },
            {
                "variant_id": 37674798317741,
                "quantity": 2
            }
        ],
        "customer": {
            "first_name": "Dora",
            "last_name": "Arroyave",
            "email": "dora.arroyave@hotmail.com"
        },
        "billing_address": {
            "first_name": "Dora",
            "last_name": "Arroyave",
            "address1": "123 Fake Street",
            "phone": "3184767977",
            "city": "Bogota",
            "province": "Cundinamarca",
            "country": "Colombia",
            "zip": "110100"
        },
        "shipping_address": {
            "first_name": "Dora",
            "last_name": "Arroyave",
            "address1": "123 Fake Street",
            "phone": "3184767977",
            "city": "Bogota",
            "province": "Cundinamarca",
            "country": "Colombia",
            "zip": "110100"
        },
        "financial_status": "paid",
        "inventory_behaviour": "decrement_obeying_policy"
    }
}
*/