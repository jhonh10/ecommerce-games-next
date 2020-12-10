import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import { size } from 'lodash';
import useAuth from '../../../../hooks/useAuth';
import useCart from '../../../../hooks/useCart';
import { paymentCardApi } from '../../../../api/cart';


export default function FormPayment({ adress, products }) {
    const [loading, setLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const { auth, logout } = useAuth();
    const { removeAllProductsCart } = useCart();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);
        const result = await stripe.createToken(cardElement);
        if (result.error) {
            toast.error(result.error.message)
        } else {
            const response = await paymentCardApi(
                result.token,
                products,
                auth.idUser,
                adress,
                logout
            );
            if (size(response) > 0) {
                toast.success("Pedido realizado correctamente");
                removeAllProductsCart();
                router.push("/orders");
            } else {
                toast.error("Error al realizar el pedido")
            }
        }
        setLoading(false);
    }
    return (
        <form className="form-payment" onSubmit={handleSubmit}>
            <CardElement />
            <Button type="submit" loading={loading} disabled={!stripe}>Pagar</Button>
        </form>
    )
}
