import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = ({handleSelectedProduct}) => {

    const [products, setProducts] = useState ([])

    useEffect(()=>{
        fetch()
        .then (res=>res.json())
        .then (data => {
            setProducts(data.products)
        })
    }, [])
    
    return (
        <div>
            {
                products.map((p)=><SingleProduct
                handleSelectedProduct={handleSelectedProduct}
                key = {p.id}
                product={p}></SingleProduct>)
            }
        </div>
    );
};

export default AllProducts;