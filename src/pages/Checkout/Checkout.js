import React, { useState } from "react";
import { useCartContext } from "../../context/CartState";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import Divider from "../../components/Divider/Divider";
import Item from "../../components/Item/Item";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Order from "../Order/Order";
const Checkout = () => {
  const { items } = useCartContext();
  const navigate = useNavigate();
  const navigateModal = withReactContent(Swal);
  const [orderId, setOrderId] = useState("");

  let subTotal = 0;

  const handleCalcSubTotal = (qty, price) => {
    let itemSubTotal = qty * price;
    subTotal += itemSubTotal;
  };

  const mainLogo =
    "https://res.cloudinary.com/dbrmekhog/image/upload/v1695282397/logo_primary-removebg_vosnhh.jpg";
  if (items.length === 0) {
    navigateModal
      .fire({
        title: <strong>Borramos ese producto</strong>,
        html: <h5>Volver a la tienda...</h5>,
        confirmButtonText: "Ok",
        icon: "warning",
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate("/shop");
        }
      });
  } else if (orderId) {
    return <Order orderID={orderId} />;
  } else {
    return (
      <div className="purchase__container">
        <div className="checkout">
          <div className="brand">
            <img src={mainLogo} alt="Brand main logo" className="brand__logo" />
          </div>
          <div className="contact">
            <div className="contact__information">
              <h1 className="contact__title">Informacion</h1>
              <CheckoutForm id={orderId} setId={setOrderId} />
            </div>
          </div>
        </div>
        <div className="summary">
          <h1 className="summary__title">Resumen de productos</h1>
          <Divider />
          <div className="summary__items">
            {items.map((product) => {
              handleCalcSubTotal(product.quantity, product.price);
              return (
                <Item showAs="CartItem" product={product} key={product.id} />
              );
            })}
          </div>
          <Divider isCart={true} />
          <div className="flex-row cart__subtotal">
            <h4>Subtotal</h4>
            <span>${subTotal}</span>
          </div>
          <Divider isCart={true} />
          <div className="flex-row cart__total">
            <h4>Total</h4>
            <span>${subTotal}</span>
          </div>
        </div>
      </div>
    );
  }
};

export default Checkout;
