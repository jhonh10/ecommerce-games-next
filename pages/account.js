import { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import BasicLayout from '../layouts/BasicLayout';
import { useRouter } from 'next/router';
import { getMeApi } from '../api/user'
import useAuth from '../hooks/useAuth';
import ChangeNameForm from '../components/Account/ChangeNameForm';
import ChangeEmailForm from '../components/Account/ChangeEmailForm';
import ChangePasswordForm from '../components/Account/ChangePasswordForm';
import BasicModal from '../components/Modal/BasicModal';
import AdressForm from '../components/Account/AdressForm';
import ListAdress from '../components/Account/ListAdress/ListAdress';
import Seo from '../components/Seo';


export default function Account() {
    const [user, setUser] = useState(undefined);
    const { auth, logout, setReloadUser } = useAuth()
    const router = useRouter();

    useEffect(() => {
        (async () => {
            const response = await getMeApi(logout);
            setUser(response || null);
        })()
    }, [auth])

    if (user === undefined) return <div>Cargando...</div>;
    if (!auth && !user) {
        router.replace("/");
        return null
    }

    return (
        <BasicLayout className="account">
            <Seo title="Mi Cuenta"/>
            <Configuration user={user} logout={logout} setReloadUser={setReloadUser} />
            <Adresses />
        </BasicLayout>
    );
}

function Configuration({ user, logout, setReloadUser }) {
    return (
        <div className="account__configuration">
            <div className="title">Configuracion</div>
            <div className="data">
                <ChangeNameForm user={user} logout={logout} setReloadUser={setReloadUser} />
                <ChangeEmailForm user={user} logout={logout} setReloadUser={setReloadUser} />
                <ChangePasswordForm user={user} logout={logout} />
            </div>
        </div>
    )
}

function Adresses() {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("");
    const [formModal, setFormModal] = useState(null);
    const [reloadAdresess, setReloadAdresess] = useState(false);


    const openModal = (title, adress) => {
        setTitleModal(title)
        setFormModal(
            <AdressForm
                setReloadAdresess={setReloadAdresess}
                setShowModal={setShowModal}
                newAdress={adress ? false : true}
                adress={adress || null}
            />)
        setShowModal(true)
    }
    return (
        <div className="account__adresses">
            <div className="title">
                Direcciones de envio
                <Icon name="plus" link onClick={() => openModal("Nueva dirección")} />
            </div>
            <div className="data">
                <ListAdress reloadAdresess={reloadAdresess} setReloadAdresess={setReloadAdresess} openModal={openModal} />
            </div>
            <BasicModal show={showModal} setShow={setShowModal} title={titleModal}>
                {formModal}
            </BasicModal>
        </div>
    )

}