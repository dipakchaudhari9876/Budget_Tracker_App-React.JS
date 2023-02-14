import React, { useContext, useState } from 'react'
import './Budget.css'
import { AppContext } from '../../Context/Context'

const Budget = () => {

    const {budget,dispatch} = useContext(AppContext)

    const [edit,onEdit] = useState(true)
    const [cost,setCost] = useState("")

    const OnClickEdit = ()=>{
        onEdit(!edit)
        setCost(budget)
        if(!edit){
            dispatch({
                type:'Edit',
                cost:cost
            })
        }
    }
  return (
    <div className="budget">
        {edit && <span>Budget : Rs {budget}</span>}
        {!edit && <input className='budgetInput' type="text" onChange={(e)=>{
            setCost(e.target.value)
        }}
            value={cost}
        />}
        {edit && <button className='btn-budget blue' onClick={OnClickEdit}>Edit</button>}
        {!edit && <button className='btn-budget green' onClick={OnClickEdit}>Save</button>}
    </div>
  )
}

export default Budget