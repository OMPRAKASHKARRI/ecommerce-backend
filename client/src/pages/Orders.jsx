import { useEffect, useState } from "react";

import API from "../services/api";


function Orders() {

    const [orders, setOrders] = useState([]);


    useEffect(() => {

        fetchOrders();

    }, []);


    const fetchOrders = async () => {

        try {

            const res = await API.get("/orders");

            setOrders(res.data.data);

        } catch (error) {

            console.log(error);

        }

    };


    return (

        <div className="container">

            <h1 className="page-title">
                Orders
            </h1>


            {
                orders.length === 0 ? (

                    <div className="empty-state">

                        <h2>
                            No Orders Yet
                        </h2>

                        <p>
                            Place your first order
                        </p>

                    </div>

                ) : (

                    <div className="orders-layout">

                        {
                            orders.map((order) => (

                                <div
                                    className="order-item"
                                    key={order._id}
                                >

                                    <div className="order-left">

                                        <h2>
                                            Order ID
                                        </h2>

                                        <p>
                                            {order._id}
                                        </p>

                                        <p>
                                            Status:
                                            {order.status}
                                        </p>

                                    </div>


                                    <div>

                                        <h1>
                                            ₹ {order.totalAmount}
                                        </h1>

                                    </div>

                                </div>

                            ))
                        }

                    </div>

                )
            }

        </div>

    );

}

export default Orders;