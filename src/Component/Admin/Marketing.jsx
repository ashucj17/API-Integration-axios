import Loader from "../Common/Loader"
import axios from "axios"
import { useEffect, useState } from "react"

const Marketing = () => {
    const [name, setName] = useState('')
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((res)=>res.json())
    //     .then((data)=>(
    //         console.log(data)
    //     )).catch((error)=>{})
    // },[])


    const [users,setUsers] = useState([])

    const [isLoading, setIsLoading] = useState(false);

    const [errors, setErrors] = useState("")

    useEffect(()=>{
        fetchUser();
    //     setIsLoading(true)
    //     axios
    //     .get('https://jsonplaceholder.typicode.com/users')
    //     .then((res)=>{setUsers(res.data);
    //     setIsLoading(false)
    //     })
    //     .catch((err)=> {setErrors(err.message);
    //     setIsLoading(false);}
    // )

    },[])

    const fetchUser = async () =>{
        try{
        setIsLoading(true)
        const res = await axios
        .get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data);
        setIsLoading(false)
        } catch (err) {
                    setErrors(err.message);
        setIsLoading(false);
        } finally {
            console.log("Are you good !!")
        }
    }

    const addUser = () =>{
        const newUser = {
            name,  // When key and value are same we need to right it only once.
            id: users.length + 1
        }
        setUsers([newUser, ...users])
        axios.post('https://jsonplaceholder.typicode.com/users', newUser).then((res)=>{
            setUsers([res.data, ...users])
        }).catch((err)=>{
            setErrors(err.message)
            setUsers(users)
        })
    }

    return <>
        <h3> Marketing Department</h3>
        <label>Enter Name: </label>
        <input onChange={(e)=>{setName(e.target.value)}} type="text" name="" id=""/>
        <button onClick={addUser}>Add Data</button>
        {isLoading && <Loader />}
        {errors && <em>{errors}</em>}
        {users.map((user)=> (
            <p key={user.id}>{user.name}</p>
        ))}
    </>
}


export default Marketing