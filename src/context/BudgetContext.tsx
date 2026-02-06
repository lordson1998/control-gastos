import { useMemo } from "react"
import { useReducer, createContext, type Dispatch, type ReactNode, use }  from "react"
import { budgetreducer, initialState, type BudgetActions, type BudgetState,  } from "../reducer/budget-reducer"

type budgedContextProps  = {
    state: BudgetState ,
    dispatch: Dispatch<BudgetActions>
    totalExpenses : number
    remainingBudget : number
}

type budgedProviderProps = {
    children : ReactNode
 
}

export const BudgetContext = createContext<budgedContextProps>(null!)

export const BudgetProvider = ({children}: budgedProviderProps) => {

    const [state , dispatch] = useReducer(budgetreducer, initialState)

        
    const totalExpenses = useMemo( () => state.expenses.reduce((total, expense) => expense.amount + total, 0 ),
             [state.expenses] )
        
    const remainingBudget = state.budget - totalExpenses



    return (
        <BudgetContext.Provider
          value={{
            state, 
            dispatch,
            totalExpenses,
            remainingBudget
          }} >
            {children}
        </BudgetContext.Provider>

    )
}