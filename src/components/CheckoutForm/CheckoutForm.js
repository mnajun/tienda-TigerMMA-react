import { Form, Formik } from "formik";
import { addNewOrder } from "../../utils/firebaseFetching";
import { useCartContext } from "../../context/CartState";
import { serverTimestamp } from "firebase/firestore";
import TextField from "./TextField";
import * as Yup from "yup";
import { useState } from "react";
import ButtonLoader from "../Loader/ButtonLoader";

const CheckoutForm = ({ setId }) => {
  const { items } = useCartContext();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, resetForm) => {
    setLoading(true);
    const order = {
      purcharse_data: {
        firsName: values.firstName,
        lastName: values.lastName,
        email: values.email.toLowerCase(),
      },
      products: items,
      date: serverTimestamp(),
    };
    const orderId = await addNewOrder(order);
    setId(orderId);
    resetForm({ values: "" });
    setLoading(false);
  };
  const emailRegEx =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Debe tener 15 caracteres o menos")
      .required("Este campo es requerido"),
    lastName: Yup.string()
      .max(15, "Debe tener 15 caracteres o menos")
      .required("Este campo es requerido"),
    email: Yup.string()
      .email("Email invalido", emailRegEx)
      .required("Email requerido"),
    confirmEmail: Yup.string()
      .oneOf([Yup.ref("email"), null], "El Email debe ser igual")
      .required("Confirmar Email"),
  });
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          confirmEmail: "",
        }}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, resetForm);
        }}
      >
        {(formik) => (
          <Form className="form">
            <div className="form__group">
              <TextField
                label="Nombre"
                name="firstName"
                type="text"
                className="form__item"
              />
              <TextField
                label="Apellido"
                name="lastName"
                type="text"
                className="form__item"
              />
            </div>
            <TextField label="Email" name="email" type="text" />
            <TextField label="Confirmar Email" name="confirmEmail" type="text" />
            <button type="submit" className="form__submit">
              {loading ? <ButtonLoader /> : "Comprar"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CheckoutForm;