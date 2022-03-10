import axios from "axios";

export const getAssignTo = (teamId) => {
    return (dispatch, getState) => {
        dispatch({type: "GET_ASSIGN_TO_REQUEST"});
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/card/assign/${teamId}`, {
                headers: {
                    Authorization: `Bearer ${getState().getAuthRegister.token}`,
                },
            })
            .then((response) => {
                const assignTo = response.data.result;
                dispatch({type: "GET_ASSIGN_TO_SUCCES", payload: assignTo});
            })
            .catch((error) => {
                dispatch({ type: "GET_ASSIGN_TO_FAILED", payload: error });
            });
    };
};