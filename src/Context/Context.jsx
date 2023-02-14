import React, { useReducer } from 'react'
import { createContext } from 'react'

const InitialState = {
    budget: 2000,
    expenses: [
        { id: 1, task: "Shopping", cost: 400 },
        { id: 2, task: "Food", cost: 300 },
        { id: 3, task: "Fuel", cost: 500 },
    ]
}

const AppReducer =(state,action)=>{
    switch (action.type) {
        case 'Remove':
            let newArr = state.expenses.filter((user)=>user.id !== action.id)
                return ({
                    ...state,
                    expenses:newArr
                })           
        case 'Edit':
                return ({
                    ...state,
                    budget:action.cost
                })           
    
        case 'Add':
                return ({
                    ...state,
                    expenses:[...state.expenses,action.payload]
                })           
    
        default:
            break;
    }

}

export const AppContext = createContext()

const Context = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, InitialState)

    return (
        <AppContext.Provider value={{
            budget:state.budget,
            expenses: state.expenses,
            dispatch
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default Context