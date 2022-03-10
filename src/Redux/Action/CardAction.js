import axios from "axios";

export const getCards = (listId) => {
    return(dispatch, getState) => {
        dispatch({type: "GET_CARDS_REQUEST"});
        //API CALL
        axios({ method: "GET",
        url: `${process.env.REACT_APP_BASE_URL}/card/${listId}`,
        headers: {
        "Authorization": `Bearer ${getState().getAuthRegister.token}`,}
        })
        .then((response) => {
            const cards = response.data.result;
            dispatch({ type: "GET_CARDS_SUCCES", payload: cards });
        })
        .catch((error) => {
            dispatch({ type: "GET_CARDS_FAILED", payload: error });
        });
    }
}

export const postBoard = (data, teamId) => {
    return (dispatch, getState) => {
      dispatch({ type: "POST_UPDATE_CARD_REQUEST" });
      //API CALL
      console.log(data);
      console.log(teamId);
      axios({
        method: "POST",
        url: `${process.env.REACT_APP_BASE_URL}/card/detail/${teamId}`,
        data: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${getState().getAuthRegister.token}`,
        },
      })
        .then((response) => {
          //TESTING
          const addCard = response.data.result;
          dispatch({ type: "POST_UPDATE_CARD_SUCCESS", payload: addCard });
        })
        .catch((error) => {
          dispatch({
            type: "POST_UPDATE_CARD_FAILED",
            payload: error.response ? 
            error?.response?.data?.message :
            error
          });
        });
    };
  };