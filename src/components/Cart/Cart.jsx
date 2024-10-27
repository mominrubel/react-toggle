import React from 'react';

const Cart = ({selectedProducts, handleDelete}) => {
    return (
        <div>
           { selectedProducts.map((product)) = (
            <div className='flex'>
            <img src="" alt="" />
            <p>{products.name}</p>

            <button onClick={()=>handleDelete(product.id)}>Deleted</button>
        </div>
           )
            }   
        </div>
    );
};

export default Cart;