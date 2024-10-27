import React from 'react';

const cartContainer = ({handleIsActiveState, isActive, selectedProducts, handleDelete}) => {
    return (
        <div>

            <div className= "flex">
                <div onClick={handleIsActiveState("cart")} 
                className={`${isActive.cart? "btn": "active"}`}></div>
                <div onClick={handleIsActiveState("about")} 
                className={`${isActive.cart? "btn": "active btn"}`}></div>
            </div>

            {isActive.cart? <Cart 
            handleDelete={handleDelete}
            selectedProducts={selectedProducts}></Cart>:<About></About>}
            
        </div>
    );
};

export default cartContainer;