import { useReducer, createContext, type Dispatch, type ReactNode }  from "react"
import { budgetreducer, initialState, type BudgetActions, type BudgetState,  } from "../reducer/budget-reducer"

type budgedContextProps  = {
    state: BudgetState ,
    dispatch: Dispatch<BudgetActions>
}

type budgedProviderProps = {
    Children : ReactNode
 
}

export const BudgetContext = createContext<budgedContextProps>({} as budgedContextProps )

export const BudgetProvider = ({Children}: budgedProviderProps) => {

    const [state , dispatch] = useReducer(budgetreducer, initialState)



    return (
        <BudgetContext.Provider
          value={{
            state, dispatch
          }} >
            {Children}
        </BudgetContext.Provider>

    )
}