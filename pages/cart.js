import { useState, useEffect } from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { getGameByUrlApi } from '../api/game';
import useCart from '../hooks/useCart';
import SummaryCart from '../components/Cart/SummaryCart';
import ShippingAdress from '../components/Cart/ShippingAdress';
import Payment from '../components/Cart/Payment';
import Seo from '../components/Seo';


export default function Cart() {
    const { getProductsCart } = useCart();
    const products = getProductsCart();
    return !products ? <EmptyCart /> : <FullCart products={products} />

}

function EmptyCart() {
    return (
        <BasicLayout className="empty-cart">
            <Seo title="Carrito de compra"/>
            <h2>No hay productos en el carrito</h2>
        </BasicLayout>
    )
}

function FullCart({ products }) {
    const [productsData, setProductsData] = useState(null);
    const [reloadCart, setReloadCart] = useState(false);
    const [adress, setAdress] = useState(null);

    useEffect(() => {
        (async () => {
            const productsTemp = [];
            for await (const product of products) {
                const data = await getGameByUrlApi(product);
                productsTemp.push(data);
            }
            setProductsData(productsTemp)
        })()
        setReloadCart(false);
    }, [reloadCart])
    return (
        <BasicLayout className="empty-cart">
            <Seo title="Carrito de compra"/>
            <SummaryCart products={productsData} setReloadCart={setReloadCart} reloadCart={reloadCart} />
            <ShippingAdress setAdress={setAdress}/>
            {adress && <Payment  products={productsData} adress={adress}/>}
        </BasicLayout>
    )
}
