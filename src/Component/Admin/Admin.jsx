import { Link,Outlet,Navigate } from "react-router-dom"


const Admin = () =>{
    const user = {role:"user"}
    if (user.role !=="admin"){
        return <Navigate to='/' />
    }
 return <div>
 <h2>Admin</h2>
 <ul>
    <li>
        <Link to='/admin/sales'>Sales</Link>
    </li>
    <li>
        <Link to="/admin/marketing">Marketing</Link>
    </li>
 </ul>
 <Outlet/>
 </div>
}

export default Admin