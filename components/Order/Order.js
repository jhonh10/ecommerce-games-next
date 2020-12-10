import { useState } from 'react';
import { Image, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import moment from 'moment';
import 'moment/locale/es';
import BasicModal from '../Modal/BasicModal';

export default function Orders({ order }) {
    const { game, totalPayment, createdAt, adressShipping } = order;
    const { title, poster, url } = game;
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="order">
                <div className="order__info">
                    <div className="order__info-data">
                        <Link href={`/${url}`}>
                            <a>
                                <Image src={poster.url} alt={title} />
                            </a>
                        </Link>
                        <div>
                            <h2>{title}</h2>
                            <p>{totalPayment} €</p>
                        </div>
                    </div>
                    <div className="order__other">
                        <p className="order__other-date">
                            {moment(createdAt).format("L")} - {moment(createdAt).format("LT")}
                        </p>
                        <Icon name="eye" circular link onClick={() => setShowModal(true)} />
                    </div>
                </div>
            </div>
            <AddressModal
                showModal={showModal}
                setShowModal={setShowModal}
                adressShipping={adressShipping}
                title={title}
            />
        </>
    )
}

function AddressModal({ showModal, setShowModal, adressShipping, title }) {

    return (
        <BasicModal
            show={showModal}
            setShow={setShowModal}
            size="tiny"
            title={title}
        >
            <h3>El pedido se ha enviado a la siguiente dirección:</h3>
            <div>
                <p>{adressShipping.name}</p>
                <p>{adressShipping.address}</p>
                <p>
                    {adressShipping.state}, {adressShipping.city}{" "}
                    {adressShipping.postalCode}
                </p>
                <p>{adressShipping.phone}</p>
            </div>
        </BasicModal>
    );
}