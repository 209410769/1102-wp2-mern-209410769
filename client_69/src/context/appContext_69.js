import React, { useReducer, useContext } from 'react';
import reducer_69 from './reducer_69';
import { CLEAR_ALERT, DISPLAY_ALERT } from './action_69';
import axios from 'axios';
import { useInRouterContext } from 'react-router-dom';

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: '',
    token: ''
}

const appContext_69 = React.createContext();


const AppProvider_69 = ({ children }) => {

    const [state, dispatch] = useReducer(reducer_69, initialState);

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT });
        clearAlert();
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT });
        }, 3000);
    }

    const registerUser = async ({ currentUser, endPoint, alertText }) => {
        const { data } = await axios.post(`/api/v1/auth_69/${endPoint}`);
        console.log('registerUser data', data);
    }

    return (
        <appContext_69.Provider value={{ ...state, displayAlert, clearAlert, registerUser }}>
            {children}
        </appContext_69.Provider>
    )
}

const useAppContext_69 = () => {
    return useContext(appContext_69);
}
export { AppProvider_69, initialState, useAppContext_69 }