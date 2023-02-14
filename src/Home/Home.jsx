import React from 'react'
import Budget from '../Pages/Budget/Budget'
import Expense from '../Pages/Expense/Expense'
import ExpenseForm from '../Pages/ExpenseForm/ExpenseForm'
import Remain from '../Pages/Remain/Remain'
import Spent from '../Pages/Spent/Spent'
import "./home.css"

const Home = () => {
    return (
        <div className="main">
            <div className="home">
                <h1>My Budget Tracker</h1>
                <div className="HomeTop">
                    <Budget />
                    <Remain />
                    <Spent />
                </div>
                <div className="Expense">
                    <h1>Expenses</h1>
                    <Expense />
                </div>
                <div className="AddExpense">
                    <h1>Add Expense</h1>
                    <ExpenseForm/>
                </div>
            </div>
        </div>
    )
}

export default Home