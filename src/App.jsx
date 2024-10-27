import { useState } from 'react'

import './App.css'
import Navbar from './components/Header/Navbar'

function App() {
  const [isActive, setIsActive] = useState({cart: true,
    status: "active"})

  const [selectedProducts, setSelectedProducts] = useState([])

  const [price, setPrice] = useState(0)


  const handleIsActiveState = (status) => {
    if (status == "cart"){
      setIsActive({
        cart: true,
        status: "active"
      })
    }
    else(
      setIsActive({
        cart: false,
        status: "active"
      })
    )
  }

  const handleSelectedProduct=(product)=>{
    const isexixt = selectedProducts.find((p)=>p.id == product.id)
    if(isexixt){
      alert ('already exist')
    }
    else{
    handleIncreasePrice(product.price)
    const newProduct = [...selectedProducts, product]
    setSelectedProducts(newProduct)}
  }


  const handleDelete = (id) => {
    handleDeletePrice(id)
    const newProduct = selectedProducts.filter((p)=>p.id != id)
    setSelectedProducts(newProduct)
  }


  const handleIncreasePrice =(pr) => {
    setPrice(price+pr)
  }

  const handleDeletePrice =(id) => {
    const product=selectedProducts.find((p)=>p.id == id)
    setPrice(price-product.price)
  }

  return (
    <>
      <Navbar price={price} selectedProducts={selectedProducts}></Navbar>

      <div>
      <AllProducts handleSelectedProduct={handleSelectedProduct}></AllProducts>

      <cartContainer 
      handleDelete= {handleDelete}
      selectedProducts={selectedProducts}
      isActive={isActive} 
      handleIsActiveState= {handleIsActiveState}></cartContainer>
      </div>
    </>
  )
}

export default App
