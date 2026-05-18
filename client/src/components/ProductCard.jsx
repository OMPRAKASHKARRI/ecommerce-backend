function ProductCard({ product, addToCart }) {

    return (

        <div className="premium-card">

            <div className="image-container">

                <img
                    className="premium-image"
                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000"
                    alt="product"
                />

                <div className="premium-badge">
                    {product.discount}% OFF
                </div>

            </div>


            <div className="premium-content">

                <div className="premium-category">
                    {product.category}
                </div>


                <h2 className="premium-title">
                    {product.title}
                </h2>


                <p className="premium-description">
                    {product.description}
                </p>


                <div className="premium-footer">

                    <div>

                        <div className="premium-price">
                            ₹ {product.price}
                        </div>

                        <p className="premium-delivery">
                            Free Delivery
                        </p>

                    </div>


                    <button
                        className="premium-btn"
                        onClick={() =>
                            addToCart(product.productId)
                        }
                    >
                        Add To Cart
                    </button>

                </div>

            </div>

        </div>

    );

}

export default ProductCard;