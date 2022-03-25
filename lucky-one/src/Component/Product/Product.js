import React from 'react';
import '../../Utilities/databsase.json'

const Product = (props) => {
    return (
        <div>
            <div>
                <img src={props.img} alt=""></img>
            </div>
            <h4>{props.name}</h4>
            <h5>{props.price}</h5>
            <button>
                Add to Cart
            </button>
        </div>
    );
};

export default Product;