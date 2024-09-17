import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'

const Todo = ()=>{

const[todoList, setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")) : []);

const inputRef = useRef();

const add = ()=>{
    const inputText = inputRef.current.value.trim();
    
    if (inputText === "") {
        return null;
    }

    const newTodo={
        id: Date.now(),
        text: inputText,
        isComplete: false,
    }
    setTodoList((prev)=> [...prev, newTodo])
    inputRef.current.value = "";
}

const deleteTodo =(id)=>{
    setTodoList((prvTodos) => {
        return prvTodos.filter((todo) => todo.id !== id)
    })
}

const toggle =(id)=>{
    setTodoList((prevTodos) => {
        return prevTodos.map((todo) => {
            if(todo.id === id){
                return {...todo, isComplete: !todo.isComplete}
            }
            return todo;
        })
    })
}

useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList))
}, [todoList])

  return (
    <div className='outline outline-offset-4 outline-gray-950 dark:outline-white bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl border-solid border-2 border-slate-950'>

        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon} alt="" />
            <h1 className='text-3xl font-semibold'>To-Do List</h1>
        </div>

        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
            <button onClick={add} className='border-double border-4 delay-150 hover:-translate-y-1 hover:scale-110 duration-3 border-orange-600 rounded-full bg-orange-500 hover:bg-orange-600 transition duration-500 ease-in-out w-32 h-14 text-white text-lg font-medium cursor-pointer shadow-lg hover:shadow-orange-600/40 '>ADD +</button>
        </div>

        <div>
        {todoList.map((item,index)=>{
            return<Todoitems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
        })}

        </div>
      
    </div>
  )
}

export default Todo
