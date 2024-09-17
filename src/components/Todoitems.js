import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const Todoitems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>

      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
        <img src={isComplete ? tick : not_tick} alt="" className='w-7'/>
        <p className={`tex-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through italic text-slate-400" : ""}`}>{text}</p>
      </div>

    <img onClick={() => {deleteTodo(id)}} src={delete_icon} alt="" className='w-5 cursor-pointer transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300'/>

    </div>
  )
}

export default Todoitems
