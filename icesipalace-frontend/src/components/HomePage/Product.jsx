import "../../styles/HomePage/Product.css";

function Product(props) {
    return (
        <div className="product">
            <div className="product-image">
                <img src={props.image} alt="product" />
            </div>
            <div className="product-info">
                <div className="product-name">
                    <span>{props.name}</span>
                </div>
                <div className="product-price">
                    <span>{props.price}</span>
                </div>

            </div>
        </div>
    )
}

export default Product;