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
import ProductPage from './pages/ProductPage'



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

  // const LimitProducts =  async (products:ProductType) => {
  //   const {data } = await listLimit(products:)
  //   setProducts(data.slice(0,3))
  //}


  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<WebsiteLayout/>}>
          <Route index element={<Homepage product={products.slice(0,4)} />}/>
          <Route path="products">
              <Route index element={<ProductPage product={products}/>} />
              <Route path=':id' element={<h1>Product Detail</h1>}/>
          </Route>
          <Route path='signup' element={<Signup/>} />
          <Route path='signin' element={<Signin/>}/>
        </Route>

        {/* admin */}
        <Route path="admin" element={<PrivateRouter><AdminLayout/></PrivateRouter>}>
          <Route index element= {<Navigate to="dashboard"/>}/>
          <Route path="dashboard" element={<h1>Dashboard</h1>}/>
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
