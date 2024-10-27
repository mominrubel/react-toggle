import React from 'react';

const SingleProduct = ({product, handleSelectedProduct}) => {
    const {id, name, image, price, description, isFeature} = product
    return (
        <div className='card'>
            <img src="" alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <div>{isFeature? "Feature Category":"not category"}</div>

        <button onClick= {()=>handleSelectedProduct(product)}>Add to cart</button>
        </div>
    );
};

export default SingleProduct;