import { useEffect, useState } from "react";

import API from "../services/api";

import ProductCard from "../components/ProductCard";


function Products() {

    const [products, setProducts] = useState([]);

    const [showForm, setShowForm] = useState(false);

    const [formData, setFormData] = useState({
        productId: "",
        title: "",
        description: "",
        price: "",
        category: "",
        discount: ""
    });


    useEffect(() => {

        fetchProducts();

    }, []);


    const fetchProducts = async () => {

        try {

            const res = await API.get("/products");

            setProducts(
                res.data.data.products
            );

        } catch (error) {

            console.log(error);

        }

    };


    const addToCart = async (productId) => {

        try {

            await API.post("/cart", {
                productId,
                quantity: 1
            });

            alert("Added To Cart");

        } catch (error) {

            alert(error.response.data.message);

        }

    };


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.post(
                "/products",
                formData
            );

            alert("Product Added Successfully");

            fetchProducts();

            setFormData({
                productId: "",
                title: "",
                description: "",
                price: "",
                category: "",
                discount: ""
            });

            setShowForm(false);

        } catch (error) {

            alert(error.response.data.message);

        }

    };


    return (

        <div className="container">


            <div className="products-header">

                <div className="hero-section">

    <h1 className="hero-title">
        Premium Store
    </h1>

    <p className="hero-subtitle">
        Explore premium gadgets and electronics
    </p>

</div>


                <button
                    className="btn"
                    onClick={() =>
                        setShowForm(!showForm)
                    }
                >
                    {
                        showForm
                            ? "Close"
                            : "Add Product"
                    }
                </button>

            </div>


            {
                showForm && (

                    <div className="admin-form">

                        <h2>Add New Product</h2>

                        <br />

                        <form onSubmit={handleSubmit}>

                            <input
                                type="number"
                                name="productId"
                                placeholder="Product ID"
                                value={formData.productId}
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                name="title"
                                placeholder="Product Title"
                                value={formData.title}
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                name="description"
                                placeholder="Description"
                                value={formData.description}
                                onChange={handleChange}
                            />

                            <input
                                type="number"
                                name="price"
                                placeholder="Price"
                                value={formData.price}
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                name="category"
                                placeholder="Category"
                                value={formData.category}
                                onChange={handleChange}
                            />

                            <input
                                type="number"
                                name="discount"
                                placeholder="Discount"
                                value={formData.discount}
                                onChange={handleChange}
                            />

                            <button
                                className="btn"
                                type="submit"
                            >
                                Add Product
                            </button>

                        </form>

                    </div>

                )
            }


            <div className="products-grid">

                {
                    products.map((product) => (

                        <ProductCard
                            key={product._id}
                            product={product}
                            addToCart={addToCart}
                        />

                    ))
                }

            </div>

        </div>

    );

}

export default Products;