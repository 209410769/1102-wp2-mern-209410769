import React, { useReducer, useContext } from 'react';
import reducer_69 from './reducer_69';
import {
    CLEAR_ALERT,
    DISPLAY_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR
} from "./action_69";
import axios from 'axios';
import { useInRouterContext } from 'react-router-dom';

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: '',
    token: '',
    location: ''
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
    const axiosRegister = async ({ currentUser, endPoint, alertText }) => {
        try {
            const { data } = await axios.post(`/api/v1/auth_69/${endPoint}`, currentUser);
            // console.log('register data', data);
            return data;
        } catch (err) {
            console.log(err);
        }
    };
    const registerUser = async ({ currentUser, endPoint, alertText }) => {
        dispatch({ type: REGISTER_USER_BEGIN });
        try {
            const data = await axiosRegister({ currentUser, endPoint, alertText });
            console.log('register data', data);
            const { user, token, location } = data;
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: { user, token, location, alertText },
            })
        } catch (error) {
            // console.log('error', error)
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: { msg: error.response.data.msg },
            })
        }
    };
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