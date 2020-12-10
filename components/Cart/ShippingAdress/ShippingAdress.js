import { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { map, size } from 'lodash';
import Link from 'next/link';
import classNames from 'classnames';
import { getAdressesApi } from '../../../api/adress';
import useAuth from '../../../hooks/useAuth';

export default function ShippingAdress({ setAdress }) {
    const [adresess, setAdresess] = useState(null);
    const [adressActive, setAdressActive] = useState(null);
    const { auth, logout } = useAuth()

    useEffect(() => {
        (async () => {
            const response = await getAdressesApi(auth.idUser, logout)
            setAdresess(response || []);
        })()
    }, []);
    return (
        <div className="adress-shipping">
            <div className="title">Direccion de envio</div>
            <div className="data">
                {size(adresess) === 0 ? (
                    <h3>No hay direcciones creada
                        <Link href="/account">
                            <a>
                                Añadir Direccion
                            </a>
                        </Link>
                    </h3>
                ) : (
                        <Grid>
                            {map(adresess, (adress) => (
                                <Grid.Column key={adress.id} mobile={16} tablet={8} computer={4}>
                                    <Adress
                                        adress={adress}
                                        adressActive={adressActive}
                                        setAdressActive={setAdressActive}
                                        setAdress={setAdress} />
                                </Grid.Column>
                            ))}
                        </Grid>
                    )}
            </div>
        </div>
    )
}

function Adress({ adress, adressActive, setAdressActive, setAdress }) {

    const changeAdress = () => {
        setAdressActive(adress._id);
        setAdress(adress);
    }
    return (
        <div className={classNames("adress", {
            active: adressActive === adress._id,
        })}
            onClick={changeAdress}
        >
            <p>{adress.title}</p>
            <p>{adress.name}</p>
            <p>{adress.adress}</p>
            <p>{adress.city}, {adress.state}, {adress.postalCode}</p>
            <p>{adress.phone}</p>
        </div>
    )
}
