import React, { useContext } from 'react'
import {TiDelete} from 'react-icons/ti'
import "./ExpenseList.css"
import { AppContext } from '../../Context/Context'

const ExpenseList = ({id,task,cost}) => {

  const {dispatch} = useContext(AppContext)

  return (
    <li className='ExpenseItem'>
        <span>{task}</span>
        <div className='costDel'>
            <span>Rs {cost}</span>
            <TiDelete size={"2rem"} onClick={()=>{
              dispatch({
                type:"Remove",
                id:id
              })
            }}></TiDelete>
        </div>

    </li>
  )
}

export default ExpenseList