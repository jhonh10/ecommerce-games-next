import { useState, useEffect } from 'react';
import { Grid, Button } from 'semantic-ui-react'
import { map, size } from 'lodash'
import { getAdressesApi, deleteAdressApi } from '../../../api/adress';
import useAuth from '../../../hooks/useAuth';

export default function ListAdress({ reloadAdresess, setReloadAdresess, openModal }) {
    const [adresses, setAdresses] = useState(null);
    const { auth, logout } = useAuth();


    useEffect(() => {
        (async () => {
            const response = await getAdressesApi(auth.idUser, logout);
            setAdresses(response || []);
            setReloadAdresess(false);
        })()
    }, [reloadAdresess]);


    if (!adresses) return null;
    return (
        <div className="list-adress">
            {size(adresses) === 0 ? (
                <h3>No hay ninguna direccion creada</h3>
            ) : (
                    <Grid>
                        {map(adresses, (adress) => (
                            <Grid.Column key={adress.id} mobile={16} tablet={8} computer={4}>
                                <Adress adress={adress} logout={logout} setReloadAdresess={setReloadAdresess} openModal={openModal}/>
                            </Grid.Column>
                        ))}
                    </Grid>
                )}
        </div>
    )
}


function Adress({ adress, logout, setReloadAdresess, openModal }) {

    const [loadingDelete, setLoadingDelete] = useState(false);

    const deleteAdress = async () => {
        setLoadingDelete(true);
        const response = await deleteAdressApi(adress._id, logout)
        if (response) setReloadAdresess(true);
        setLoadingDelete(false);
    }

    return (
        <div className="adress">
            <p>{adress.title}</p>
            <p>{adress.name}</p>
            <p>{adress.adress}</p>
            <p>{adress.state}, {adress.city}, {adress.postalCode}</p>
            <p>{adress.phone}</p>
            <div className="actions">
                <Button primary onClick={() => openModal(`Editar: ${adress.title}`, adress)}>Editar</Button>
                <Button onClick={deleteAdress} loading={loadingDelete} disabled={loadingDelete}>Eliminar</Button>
            </div>
        </div>
    )

}