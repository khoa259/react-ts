import logo from './logo.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import { useEffect, useState } from 'react'
import { ProductType } from './pages/types/product'
import ProductManager from './pages/ProductManager'
import { add, list, onRemove } from './api/products'
import ProductAdd from './pages/ProductAdd'



function App() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const getProducts = async () =>{
      const { data } = await list()
      setProducts(data)
    }
    getProducts()
  },[])

  const removeItem = (id:string) => {
    onRemove(id);
    setProducts(products.filter(item => item._id !== id))
    console.log(id);
    
  }


  const onHanldeAdd = (data:any) => {
    add(data);
    setProducts([...products,data])
  }

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<WebsiteLayout/>}>
          <Route index element={<Homepage/>}/>
          <Route path="products">
              <Route index element={<h1>Product Page</h1>} />
              <Route path=':id' element={<h1>Product Detail</h1>}/>
          </Route>

        </Route>

        {/* admin */}
        <Route path="admin" element={<AdminLayout/>}>
          <Route index element={<Navigate to='products'/>}/>
          <Route path= "products" element={<ProductManager products={products} onRemove={removeItem} />} />
          <Route path='products/add' element={<ProductAdd onAdd={onHanldeAdd} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
