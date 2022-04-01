import logo from './logo.svg'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import { useEffect, useState } from 'react'
import { ProductType } from './pages/types/product'
import ProductManager from './pages/admin/ProductManager'
import { add, list, onRemove, update } from './api/products'
import ProductAdd from './pages/admin/ProductAdd'
import ProductEdit from './pages/admin/ProductEdit'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import PrivateRouter from './components/PrivateRouter'


function App() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const getProducts = async () =>{
      const { data } = await list()
      setProducts(data)
    }
    getProducts()
  },[])

  const removeItem = (id:number) => {
    onRemove(id);
    setProducts(products.filter(item => item.id !== id))
  }

  const onHandleAdd = (data:any) => {
    add(data);
    setProducts([...products,data])
  }

  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    // reRender
    setProducts(products.map(item => item.id === data.id ? data : item ));
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
          <Route path='signup' element={<Signup/>} />
          <Route path='signin' element={<Signin/>}/>
        </Route>

        {/* admin */}
        <Route path="admin" element={<PrivateRouter><AdminLayout/></PrivateRouter>}>
          <Route path="products">
            <Route index element={<ProductManager products={products} onRemove={removeItem}/>} />
              <Route path="add" element={<ProductAdd onAdd={onHandleAdd}/>}/>
              <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>}/>
            </Route>
          </Route>
      </Routes>
    </div>
  )
}

export default App
