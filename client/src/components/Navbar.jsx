import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");


    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");

    };


    return (

        <div className="navbar">

            <div className="logo">
                Ecommerce
            </div>


            <div className="nav-links">

                {
                    token ? (
                        <>

                            <Link to="/products">
                                Products
                            </Link>

                            <Link to="/cart">
                                Cart
                            </Link>

                            <Link to="/orders">
                                Orders
                            </Link>

                            <button
                                className="btn"
                                onClick={logout}
                            >
                                Logout
                            </button>

                        </>
                    ) : (
                        <>

                            <Link to="/">
                                Login
                            </Link>

                            <Link to="/register">
                                Register
                            </Link>

                        </>
                    )
                }

            </div>

        </div>

    );

}

export default Navbar;