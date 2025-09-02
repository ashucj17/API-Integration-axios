import { useEffect, useState } from "react"

const Marketing = () => {
    const [name, setName] = useState('')
    useEffect(()=>{
        document.title = `Name is ${name}`
        document.querySelector('h3').style.color ="Amble"
        console.log("Document mount")
       return () =>{
        console.log("component unmount !")
       }
    },[name])
    return <>
        <h3> Makteting Department</h3>
        <label>Enter Name: </label>
        <input onChange={(e)=>{setName(e.target.value)}} type="text" name="" id=""/>
    </>
}


export default Marketing