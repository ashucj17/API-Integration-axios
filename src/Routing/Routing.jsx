import { Route, Routes } from 'react-router-dom'
import Home from '../Component/Home/Home'
import Products from '../Component/Products/Products'
import Articles from '../Component/Articles/Articles'
import Admin from '../Component/Admin/Admin'
import Contact from '../Component/Contact/Contact'
import NotFound from '../Component/NotFound/NotFound'
import SingleProducts from '../Component/Products/SingleProducts'
import Sales from '../Component/Admin/Sales'
import Marketing from '../Component/Admin/Marketing'

const Routing = () => {
  return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<SingleProducts />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/admin' element={<Admin />} >
            <Route path='sales' element={<Sales />} />
            <Route path='marketing' element={<Marketing />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
  )
}

export default Routing