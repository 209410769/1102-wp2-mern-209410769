import { useContext } from "react"
import { CLEAR_ALERT, DISPLAY_ALERT } from "./action_69"

const reducer_69 = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertText: 'Please provide all values',
            alertType: 'danger'
        }
    }
    if (action.type === CLEAR_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertText: 'Please provide all values',
            alertType: 'danger',
        }
    }

}

const useAppContext = () => {
    return useContext(AppContext_69);
}

export { AppProvider_69, initialstate, useAppContext }