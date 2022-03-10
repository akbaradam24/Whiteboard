import axios from "axios";

export const getUserRegister = (values) => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_USER_REGISTER_REQUEST" });
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/register`, values)
      .then((response) => {
        console.log(response);
        const auth = response.data.token;
        dispatch({ type: "GET_USER_TOKEN", payload: auth });
        dispatch({
          type: "USER_REGISTER_SUCCES",
          payload: response.data.result,
        });
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        dispatch({
          type: "USER_REGISTER_FAILED",
          payload: error.response.data.message,
        });
      });
  };
};

export const userLogin = (values) => {
  return (dispatch) => {
    dispatch({ type: "GET_USER_REGISTER_REQUEST" });
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, values)
      .then((response) => {
        console.log(response.data.result.token);
        dispatch({
          type: "GET_USER_TOKEN",
          payload: response.data.result.token,
        });
        dispatch({ type: "USER_LOGIN_SUCCES", payload: response.config.data });
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        dispatch({
          type: "USER_LOGIN_FAILED",
          payload: error.response.data.message,
        });
      });
  };
};
// dispatch({ type: 'USER_LOGOUT' }) untuk log out kosongin token sama user
export const logOut = () => {
  return (dispatch) => {
    dispatch({ type: "USER_LOGOUT" });
  };
};
