import React from "react";
import "../../styles/HomePage/HomePage.css";
import Product from "./Product";
import axios from "../../api/axios";
import LeftSideNav from "./LeftSideNav";
import CreatePostForm from "../CreatePostForm"

function HomePage() {

    const [products, setProducts] = React.useState([]);


    const [isPopupOpen, setIsPopupOpen] = React.useState(false);

    React.useEffect(() => {
        axios.get("/api/v1/post/list-all-post")
            .then((response) => setProducts(response.data.posts))
            .catch((err) => console.log(err));
    }, []);


    const createPostForm = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    return (
        <div className="home-page">
            <LeftSideNav onClick={createPostForm} />
            <div className="products-section">
                <div className="products-header">
                    <span className="products-title">Sugerencias para ti</span>
                </div>
                <CreatePostForm trigger={isPopupOpen} setTrigger={createPostForm} />
                <div className="products">
                    {products.map(product => (
                        <Product key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;