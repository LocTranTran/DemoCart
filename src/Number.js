import React,{useState} from 'react'
import './Number.css'
export const Number = () => {
    const [number,setNumber] = useState(0)

    return (
    <>
            Clicker
        <div className="number">
            <h2>{number}</h2>
        <button style={{border:'none',width:'50px',height:'50px',color:'white',backgroundColor:'green'}} onClick={()=>{setNumber(number+1)}}><i class="fa-solid fa-plus" ></i></button>
        <button style={{border:'none',width:'50px',height:'50px',color:'black',backgroundColor:'yellow'}} onClick={()=>{setNumber(0)}}><i class="fa-solid fa-power-off"></i></button>
        <button style={{border:'none',width:'50px',height:'50px',color:'white',backgroundColor:'red'}} onClick={()=>{setNumber(number-1)}}><i class="fa-solid fa-minus"></i></button>
        </div>
    </>
)
}
