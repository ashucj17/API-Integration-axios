import { Route, Routes } from 'react-router-dom'
import NavBar from './Component/Navbar/NavBar'
import Home from './Component/Home/Home'
import Products from './Component/Products/Products'
import Articles from './Component/Articles/Articles'
import Admin from './Component/Admin/Admin'
import Contact from './Component/Contact/Contact'
import NotFound from './Component/NotFound/NotFound'
import SingleProducts from './Component/Products/SingleProducts'
import './index.css'

function App() {


  return (
    <>
    <div className='app'>
      <NavBar />

      <main className='app_main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<SingleProducts />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      </div>
    </>
  )
}

export default App
