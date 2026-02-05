import { useReducer, createContext, type Dispatch, type ReactNode }  from "react"
import { budgetreducer, initialState, type BudgetActions, type BudgetState,  } from "../reducer/budget-reducer"

type budgedContextProps  = {
    state: BudgetState ,
    dispatch: Dispatch<BudgetActions>
}

type budgedProviderProps = {
    children : ReactNode
 
}

export const BudgetContext = createContext<budgedContextProps>(null!)

export const BudgetProvider = ({children}: budgedProviderProps) => {

    const [state , dispatch] = useReducer(budgetreducer, initialState)



    return (
        <BudgetContext.Provider
          value={{
            state, dispatch
          }} >
            {children}
        </BudgetContext.Provider>

    )
}