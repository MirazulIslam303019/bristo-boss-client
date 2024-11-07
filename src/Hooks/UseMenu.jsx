import { useEffect, useState } from "react";


const UseMenu = () => {
    const [menu,setMenu]=useState([]);
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
 
     fetch('http://localhost:1500/menu')
     .then(res=>res.json())
     .then(data=>{
        
        //  console.log(PopularManu)
        //  setMenu(PopularManu)
        setMenu(data)
        setLoading(false)

     })
    },[])
    return [menu]
};

export default UseMenu;