import { useEffect, useState } from "react";

import API from "../services/api";


function Cart() {

    const [cart, setCart] = useState([]);


    useEffect(() => {

        fetchCart();

    }, []);


    const fetchCart = async () => {

        try {

            const res = await API.get("/cart");

            setCart(res.data.data);

        } catch (error) {

            console.log(error);

        }

    };


    const placeOrder = async () => {

        try {

            await API.post("/orders");

            alert("Order Placed Successfully");

            fetchCart();

        } catch (error) {

            alert(error.response.data.message);

        }

    };


    return (

    <div className="container">

        <h1 className="page-title">
            Cart
        </h1>

        {
            cart.length === 0 ? (

                <div className="empty-state">

                    <h2>
                        Your Cart Is Empty
                    </h2>

                    <p>
                        Add products to continue shopping
                    </p>

                </div>

            ) : (

                <div className="cart-layout">

                    {
                        cart.map((item) => (

                            <div
                                className="cart-item"
                                key={item._id}
                            >

                                <div className="cart-left">

                                    <h2>
                                        {item.product.title}
                                    </h2>

                                    <p>
                                        Quantity:
                                        {item.quantity}
                                    </p>

                                    <p>
                                        Price:
                                        ₹ {item.product.price}
                                    </p>

                                </div>

                                <h2>
                                    ₹ {
                                        item.product.price *
                                        item.quantity
                                    }
                                </h2>

                            </div>

                        ))
                    }

                </div>

            )
        }


        {
            cart.length > 0 && (

                <div className="total-box">

                    <button
                        className="btn"
                        onClick={placeOrder}
                    >
                        Place Order
                    </button>

                </div>

            )
        }

    </div>

);
}

export default Cart;