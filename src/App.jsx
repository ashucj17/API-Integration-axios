
import NavBar from './Component/Navbar/NavBar'
import './index.css'
import Routing from './Routing/Routing'

function App() {


  return (
    <>
    <div className='app'>
      <NavBar />

      <main className='app_main'>
        <Routing/>
      </main>
      </div>
    </>
  )
}

export default App
