import axios from "axios";

export const getBoards = (teamId) => {
  console.log(teamId);
  return (dispatch, getState) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/team/detail/team`, {
        headers: {
          Authorization: `Bearer ${getState().getAuthRegister.token}`,
        },
      })
      .then((response) => console.log(response));
  };
};
