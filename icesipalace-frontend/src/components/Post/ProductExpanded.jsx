import React from 'react';
import "../../styles/Product/ProductExpanded.css";



export default function ProductExpanded(props) {

    return props.trigger ? (
        <div className='popup'>
            <div className='popup-inner'>
                <div className="d-flex flex-row-reverse mb-3">
                    <button className="btn btn-danger rounded-circle" onClick={() => props.setTrigger()}>X</button>
                </div>

                    <div className='row'>

                        <div className='col'>
                            <div className="product-expanded-image">
                                <img src={props.product.image} alt="product" />
                            </div>
                            <div className="mt-3">
                                <span>Description: {props.product.description}</span>
                            </div>
                        </div>

                        <div className='col'>
                            <div className="h2 text-capitalize text-center mb-3">
                                <span>{props.product.name}</span>
                            </div>
                            <div className="">
                                <span>Creator: {props.product.userId}</span>
                            </div>
                            <div className="">
                                <span>Price: $ {props.product.price}</span>
                            </div>
                            <div className="category">
                                <span>Category: {props.product.category}</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}