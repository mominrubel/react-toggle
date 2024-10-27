

const Navbar = ({selectedProducts, price}) => {

    return (
        <div>
            <div><h2>Logo</h2></div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Cart {selectedProducts.length}</li>
                    <li>$ {price}</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;