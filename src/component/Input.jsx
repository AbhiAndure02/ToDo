 import { useRef } from "react";
import { FaPlus } from "react-icons/fa";

export default function Input(props) {
  const inputBox = useRef();
  return (
    <div className="p-3 flex justify-between">
    <input type="text" placeholder="Enter data" className="p-3 rounded border w-[85%] border-slate-400 " ref = {inputBox}/>
    <div className="cursor-pointer w-[50px] h-[50px] bg-[#e74c3c] text-white rounded-[50%] flex justify-center text-3xl items-center hover:bg-red-800" 
    onClick={() =>{
      props.handler(inputBox.current.value)
      inputBox.current.value =""
    }
       }>
        <FaPlus/></div>
      
    </div>
  )
}
