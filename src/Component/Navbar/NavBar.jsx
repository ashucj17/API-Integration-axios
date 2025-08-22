import { NavLink } from 'react-router-dom'
import '../Navbar/NavBar.css'

const NavBar = () => {
    return <nav>
        <ul className='menu-items' >
            <li> <NavLink to="/home">Home</NavLink></li>
            <li> <NavLink to="/products">Products</NavLink></li>
            <li> <NavLink to="/articles">Articles</NavLink></li>
            <li> <NavLink to="/admin">Admin</NavLink></li>
            <li> <NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </nav>
}

export default NavBar