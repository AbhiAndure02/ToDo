import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

export default function Item(props) {
    const [done, setDone] = useState(false);
  return (
    <div onClick={() => setDone(!done)} className='select-none cursor-pointer w-full border-b-2 p-2 flex justify-between'>
        <div>
            <span className="p-2 text-[13px] text-slate-400">
                {props.time}
            </span>
            <span className={`${
      done === true ? 'line-through' : ''
    } text-[20px]`}>
                {props.item}
            </span>
        </div>
        <div onClick={()=> props.removeHandler(props.id)} className="p-2">
            <FaRegTrashCan className="text-[#e74c3c] " />

        </div>
      
    </div>
  )
}
