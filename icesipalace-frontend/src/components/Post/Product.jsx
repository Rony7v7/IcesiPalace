import "../../styles/Product/Product.css";

function Product(props) {

    const handleClick = () => {
        props.onClick(props.title, props.description, props.price, props.category,props.userId , props.image);
    }

    return (
        <div className="product" onClick={handleClick}>
            <div className="product-image">
                <img src={props.image} alt="product" />
            </div>
            <div className="product-info">
                <div className="product-name">
                    <span>{props.title}</span>
                </div>
                <div className="product-price">
                    <span>$ {props.price}</span>
                </div>

            </div>
        </div>
    )
}

export default Product;