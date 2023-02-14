import React, { useContext } from 'react'
import { AppContext } from '../../Context/Context'

const Spent = () => {

  const {expenses} = useContext(AppContext)

  const totalCost = expenses.reduce((total,item)=>{
    return total = total + parseInt(item.cost)
  },0)

  return (
    <div className="budget">
        <span>Spent So Far : Rs {totalCost}</span>
    </div>
    )
}

export default Spent