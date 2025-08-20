import { Route, Routes } from 'react-router-dom'
import NavBar from './Component/Navbar/NavBar'
import Home from './Component/Home/Home'
import Products from './Component/Products/Products'
import Articles from './Component/Articles/Articles'
import Admin from './Component/Admin/Admin'
import './App.css'

function App() {


  return (
    <>
    <div className='app'>
      <NavBar />

      <main className='app_main'>
        <Routes>
          <Route path='/' element={<Home />} / >
          <Route path='/products' element={<Products />} / >
          <Route path='/articles' element={<Articles />} / >
          <Route path='/Admin' element={<Admin />} / >
        </Routes>
      </main>
      </div>
    </>
  )
}

export default App
