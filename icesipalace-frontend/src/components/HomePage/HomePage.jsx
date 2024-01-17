import React from "react";
import "../../styles/HomePage/HomePage.css";
import Product from "../Post/Product";
import LeftSideNav from "./LeftSideNav";
import CreatePostForm from "../Post/CreateProductForm"
import DataAccess from "../../services/DataAccess";
import ProductExpanded from "../Post/ProductExpanded";

function HomePage() {

    const [products, setProducts] = React.useState([]);
    const [isProductExpanded, setIsProductExpanded] = React.useState(false);
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [productInExpansion, setProductInExpansion] = React.useState([{}]);

    const handleSearch = (results) => {
        setProducts(results)
    }

    React.useEffect(() => {
        DataAccess.queryAllPosts().then((posts) => {
            if (posts) {
                console.log(posts);
                setProducts(posts);
            }
        })
    }, []);


    const createPostForm = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    const handleProductExpansion = (name, description, price,category, userId ,image) => {
        setProductInExpansion({ name, description, price,category, userId ,image });
        setIsProductExpanded(!isProductExpanded);
    }

    return (
        <div className="home-page">
            <LeftSideNav onClick={createPostForm} onSearchResult={handleSearch} />
            <div className="products-section">
                <div className="products-header">
                    <span className="products-title">Sugerencias para ti</span>
                </div>
                <CreatePostForm trigger={isPopupOpen} setTrigger={createPostForm} />
                <ProductExpanded trigger={isProductExpanded} setTrigger={handleProductExpansion} product={productInExpansion} />
                <div className="products">
                    {products.map(product => (
                        <Product key={product.id} onClick={handleProductExpansion}{...product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;