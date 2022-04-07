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
import { listCate, onRemoveCate } from './api/category'
import ProductAdd from './pages/admin/ProductAdd'
import ProductEdit from './pages/admin/ProductEdit'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import ProductPage from './pages/ProductPage'
import PrivateRoute from './components/PrivateRouter'
import { CategoryType } from './pages/types/category'
import CategoryManager from './pages/admin/CategoryManager'



function App() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list()
      setProducts(data)
    }
    getProducts()
  }, [])

  const removeItem = (id: string) => {
    onRemove(id);
    setProducts(products.filter(item => item._id !== id))
  }

  const onHandleAdd = (data: any) => {
    add(data);
    setProducts([...products, data])
  }

  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    // reRender
    setProducts(products.map(item => item._id === data.id ? data : item));
  }

  // const LimitProducts =  async (products:ProductType) => {
  //   const {data } = await listLimit(products:)
  //   setProducts(data.slice(0,3))
  //}

  // category
  const [categories, setCategory] = useState<CategoryType[]>([])
  useEffect(() => {
    const getCategry = async () => {
      const { data } = await listCate()
      setCategory(data)
    }
    getCategry()
  }, [])
  const removeCate =  (id:string) => {
    onRemoveCate(id);
    setCategory(categories.filter(item => item._id !== id))
  }


  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Homepage product={products.slice(0, 4)} />} />
          <Route path="products">
            <Route index element={<ProductPage product={products} />} />
            <Route path=':id' element={<h1>Product Detail</h1>} />
          </Route>
        </Route>

        {/* admin */}
        <Route path='admin' element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<h1>Dashboard</h1>} />
          <Route path="products">
            <Route index element={<ProductManager products={products} onRemove={removeItem} />} />
            <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
            <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
          </Route>
          <Route path='category' >
            <Route index element ={<CategoryManager category={categories} onRemoveCate={removeCate}/>}/>
            <Route path='add' element={<h1>add category</h1>}/>
          </Route>
        </Route>
        
        <Route path='signup' element={<Signup />} />
        <Route path='signin' element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App
