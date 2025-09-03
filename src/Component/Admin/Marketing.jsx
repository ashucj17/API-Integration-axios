import axios from "axios"
import { useEffect, useState } from "react"
import Loader from "../Common/Loader"

const Marketing = () => {
    // const [name, setName] = useState('')
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((res)=>res.json())
    //     .then((data)=>(
    //         console.log(data)
    //     )).catch((error)=>{})
    // },[])


    const [users,setUsers] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{setUsers(res.data);
        setIsLoading(false)
        })
        .catch((error)=>{
            console.log(error)
        })

    },[])

    return <>
        <h3> Marketing Department</h3>
        <label>Enter Name: </label>
        <input onChange={(e)=>{setName(e.target.value)}} type="text" name="" id=""/>
        {isLoading && <Loader />}
        {users.map((user)=> (
            <p key={user.id}>{user.name}</p>
        ))}
    </>
}


export default Marketing