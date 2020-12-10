import { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify'
import useAuth from '../../../hooks/useAuth';
import { createAdressApi, updateAdressApi } from '../../../api/adress'


export default function AdressForm({ setShowModal, setReloadAdresess, newAdress, adress }) {
    const [loading, setLoading] = useState(false);
    const { auth, logout } = useAuth();

    const formik = useFormik({
        initialValues: initialValues(adress),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            newAdress ? createAdress(formData) : updateAdress(formData)
        }
    });

    const createAdress = async (formData) => {
        setLoading(true);
        const formDataTemp = {
            ...formData,
            user: auth.idUser
        };
        const response = await createAdressApi(formDataTemp, logout)
        if (!response) {
            toast.warning("Error al crear la direccion")
            setLoading(false)
        } else {
            formik.resetForm();
            setLoading(false);
            setReloadAdresess(true);
            setShowModal(false);
        }
        setLoading(false);

    }

    const updateAdress = async (formData) => {
        setLoading(true);
        const formDataTemp = {
            ...formData,
            user: auth.idUser,
        };
        const response = await updateAdressApi(adress._id, formDataTemp, logout)
        if(!response) {
            toast.warning("Error al actulizar la direccion");
            setLoading(false);
        }else{
            formik.resetForm();
            setReloadAdresess(true);
            setLoading(false);
            setShowModal(false);
        }
    }
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Input
                name="title"
                type="text"
                label="Titulo de la direccion"
                placeholder="Titulo de la dirección"
                onChange={formik.handleChange}
                value={formik.values.title}
                error={formik.errors.title}
            />

            <Form.Group widths="equal">
                <Form.Input
                    name="name"
                    type="text"
                    label="Nombre y Apellido"
                    placeholder="Nombre y Apellido"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.errors.name}
                />
                <Form.Input
                    name="adress"
                    type="text"
                    label="Direccion"
                    placeholder="Direccion"
                    onChange={formik.handleChange}
                    value={formik.values.adress}
                    error={formik.errors.adress}
                />
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input
                    name="city"
                    type="text"
                    label="Ciudad"
                    placeholder="Ciudad"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    error={formik.errors.city}
                />
                <Form.Input
                    name="state"
                    type="text"
                    label="Estado/Provincia/Region"
                    placeholder="Estado/Provincia/Region"
                    onChange={formik.handleChange}
                    value={formik.values.state}
                    error={formik.errors.state}
                />
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input
                    name="postalCode"
                    type="text"
                    label="Código postal"
                    placeholder="Código postal"
                    onChange={formik.handleChange}
                    value={formik.values.postalCode}
                    error={formik.errors.postalCode}
                />
                <Form.Input
                    name="phone"
                    type="text"
                    label="Numero de telefono"
                    placeholder="Numero de telefono"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    error={formik.errors.phone}
                />
            </Form.Group>
            <div className="actions">
                <Button className="submit" type="submit" loading={loading} disabled={loading}>
                    {newAdress ? "Crear direccion" : "Actualizar Direccion"}
                </Button>
            </div>
        </Form>
    )
}


function initialValues(adress) {
    return {
        title: adress?.title || "",
        name: adress?.name || "",
        adress: adress?.adress || "",
        city: adress?.city || "",
        state: adress?.state || "",
        postalCode: adress?.postalCode || "",
        phone: adress?.postalCode || ""
    }
};

function validationSchema() {
    return {
        title: Yup.string().required(true),
        name: Yup.string().required(true),
        adress: Yup.string().required(true),
        city: Yup.string().required(true),
        state: Yup.string().required(true),
        postalCode: Yup.string().required(true),
        phone: Yup.string().required(true),
    }
};