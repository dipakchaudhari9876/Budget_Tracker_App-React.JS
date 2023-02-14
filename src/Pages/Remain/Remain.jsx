import React, { useContext } from 'react'
import { AppContext } from '../../Context/Context'

const Remain = () => {

  const {budget,expenses} = useContext(AppContext)

  const totalCost = expenses.reduce((total,item)=>{
    return total = total + parseInt(item.cost)
  },0)

  return (
    <div className="budget">
        <span>Remaining : Rs {budget-totalCost}</span>
    </div>
  )
}

export default Remain