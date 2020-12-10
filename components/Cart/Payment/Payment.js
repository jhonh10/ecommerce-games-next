import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { STIPE_TOKEN } from '../../../utils/constants';
import FormPayment from './FormPayment';

const stripePromise = loadStripe(STIPE_TOKEN);

export default function Payment({ products, adress }) {
    return (
        <div className="payment">
            <div className="title">Pago</div>
            <div className="data">
                <Elements stripe={stripePromise}>
                    <FormPayment products={products} adress={adress} />
                </Elements>
            </div>
        </div>
    )
}
