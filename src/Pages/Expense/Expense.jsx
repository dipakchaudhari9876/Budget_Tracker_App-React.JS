import React, { useContext } from 'react'
import ExpenseList from '../ExpenseItem/ExpenseList'
import "./Expense.css"
import { AppContext } from '../../Context/Context'

const Expenses = [
    { id: 1, task: "Shopping", cost: 400 },
    { id: 2, task: "Food", cost: 300 },
    { id: 3, task: "Fuel", cost: 500 },
]

const Expense = () => {
    const {expenses} = useContext(AppContext)

    return (
        <div className="Expense">
            <ul className='ExpenseList'>
                {
                    expenses.map((user) => {
                        return (
                            <ExpenseList key={user.id} {...user} />
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Expense