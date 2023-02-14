import React, { useContext, useState } from 'react'
import './expenseform.css'
import { AppContext } from '../../Context/Context'

const ExpenseForm = () => {
    const {dispatch} = useContext(AppContext)

    const[name,setName] = useState("")
    const[cost,setCost] = useState("")

    const onsubmitHandler =(e)=>{
        e.preventDefault()
        dispatch({
            type:"Add",
            payload:{
            id:Date.now(),
            task:name,
            cost:cost}
        })
        setName("")
        setCost("")
    }

  return (
    <div className="expenseform">
        <form action="#" method="post" onSubmit={onsubmitHandler}>
            <div className="inputs">
                <div className="input">
                    <label htmlFor="task">Name</label>
                    <input type="text" id='task' onChange={(e)=>{
                        setName(e.target.value)
                    }} 
                        value={name}
                    />
                </div>
                <div className="input">
                    <label htmlFor="cost">Cost</label>
                    <input type="text" id='cost' onChange={(e)=>{
                        setCost(e.target.value)
                    }} 
                        value={cost}
                    />
                </div>
            </div>
            <button className='btn' type="submit">Save</button>
        </form>
    </div>
  )
}

export default ExpenseForm