import React, { useReducer, useContext } from 'react';
import reducer_69 from './reducer_69';
import axios from 'axios';
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  TOGGLE_SIDEBAR,
} from './action_69';

const initialState = {
  isLoading: false,
  showAlert: false,
  alterText: '',
  alterType: '',
  user: null,
  token: null,
  location: '',
  showSidebar: false,
};

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const userLocation = localStorage.getItem('location');

const AppContext_69 = React.createContext();

const AppProvider_69 = ({ children }) => {
  const [state, dispatch] = useReducer(reducer_69, initialState);
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('location', location);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('location');
  };

  // Register
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

  // Login
  const axiosLogin = async ({ currentUser, endPoint, alertText }) => {
    try {
      const { data } = await axios.post(`/api/v1/auth_69/${endPoint}`, currentUser);
      // console.log('register data', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const loginUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const data = await axiosLogin({ currentUser, endPoint, alertText });
      console.log('login data', data);
      const { user, token, location } = data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, location, alertText },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      // console.log('error', error)
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const logoutUser = async () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const toggleSidebar = async () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  }

  const updateUser = async (name, enail, lastName, location) => {

  }
  return (
    <AppContext_69.Provider
      value={{ ...state, displayAlert, clearAlert, registerUser, loginUser, logoutUser, toggleSidebar }}
    >
      {children}
    </AppContext_69.Provider>
  );
};
const useAppContext_69 = () => {
  return useContext(AppContext_69);
};
export { AppProvider_69, initialState, useAppContext_69 };