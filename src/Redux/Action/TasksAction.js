import axios from "axios";

export const getTasks = () => {
  return (dispatch, getState) => {
    dispatch({ type: "TASKS_LOADING" });
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/card/userassign/task`, {
        headers: {
          //  Cara pertama dengan useSelector, state di component/page
          // Authorization: token,
          //  Cara kedua dapatkan token dari getstate
          Authorization: `Bearer ${getState().getAuthRegister.token}`,
        },
      })
      .then((response) => {
        // console.log(response.data.result);
        dispatch({ type: "GET_TASKS", payload: response.data.result });
      });
  };
};
