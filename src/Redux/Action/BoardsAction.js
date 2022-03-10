import axios from "axios";

export const getBoards = () => {
  return (dispatch, getState) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/team/detail/team`, {
        headers: {
          Authorization: `Bearer ${getState().getAuthRegister.token}`,
        },
      })
      .then((response) => {
        // console.log(response.data.result);
        dispatch({ type: "USER_RESULT", payload: response.data.result });
      });
  };
};
