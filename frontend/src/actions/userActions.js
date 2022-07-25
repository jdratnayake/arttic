import axios from "axios";

import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGIN_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/userConstants";
import { API_URL } from "../constants/globalConstants";

// export const login = (email, password) => async (dispatch) => {};

// export const logout = () => {};

export const register =
  (userType, name, email, password) => async (dispatch) => {
    // console.log("action");

    // return 0;
    try {
      console.log("action");
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        API_URL + "/api/v1/auth/register",
        { name, email, password, userType },
        config
      );

      //   dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
