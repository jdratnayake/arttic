import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOGIN_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_STATE_UPDATE_SUCCESS,
  USER_STATE_UPDATE_FAIL,
} from "../constants/userConstants";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { user: action.payload };
    case USER_LOGIN_FAIL:
      return { user: action.payload };
    case USER_LOGOUT:
      return { user: null };
    case USER_REGISTER_SUCCESS:
      return { user: action.payload };
    case USER_REGISTER_FAIL:
      return { user: action.payload };
    case USER_STATE_UPDATE_SUCCESS:
      return { user: action.payload };
    case USER_STATE_UPDATE_FAIL:
      return { user: action.payload };
    default:
      return state;
  }
};
