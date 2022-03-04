//CEK LAGI DISKUSI SAMA BACKEND
import axios from "axios";

export const getBoard = (teamId) => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_BOARDS_REQUEST" });
    //API CALL
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/board/${teamId}`, {
        headers: {
          //  Cara pertama dengan useSelector, state di component/page
          // Authorization: token,
          //  Cara kedua dapatkan token dari getstate
          "Authorization": `Bearer ${getState().getAuthRegister.token}`,
        },
      })
      .then((response) => {
        //FOR TESTING
        const board = response.data.result;
        console.log(response);
        dispatch({ type: "GET_BOARDS_SUCCESS", payload: board });
      })
      .catch((error) => {
        dispatch({
          type: "GET_BOARDS_FAILED",
          payload: error.status + "" + error.massage,
        });
      });
  };
};

export const getMembers = (boardId) => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_MEMBERS_REQUEST" });
    //API CALL
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/board/${boardId}`, {
        headers: {
          "Authorization": `Bearer ${getState().getAuthRegister.token}`,
        },
      })
      .then((response) => {
        //TESTING
        const members = response.data.result;
        dispatch({ type: "GET_MEMBERS_SUCCESS", payload: members });
      })
      .catch((error) => {
        dispatch({
          type: "GET_MEMBERS_FAILED",
          payload: error.status + "" + error.massage,
        });
      });
  };
};

export const getMember = (boardId) => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_MEMBER_REQUEST" });
    //API CALL
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/board/members/${boardId}/member`,
        {
          headers: {
            "Authorization": `Bearer ${getState().getAuthRegister.token}`,
          },
        }
      )
      .then((response) => {
        //TESTING
        const member = response.data.result;
        dispatch({ type: "GET_MEMBER_SUCCESS", payload: member });
      })
      .catch((error) => {
        dispatch({
          type: "GET_MEMBER_FAILED",
          payload: error.status + "" + error.massage,
        });
      });
  };
};

export const getBoardDetail = (boardId) => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_BOARD_DETAIL_REQUEST" });
    //API CALL
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/board/board/${boardId}`, {
        headers: {
          "Authorization": `Bearer ${getState().getAuthRegister.token}`,
        },
      })
      .then((response) => {
        //TESTING
        const detail = response.data.result;
        dispatch({ type: "GET_BOARD_DETAIL_SUCCESS", payload: detail });
      })
      .catch((error) => {
        dispatch({
          type: "GET_BOARD_DETAIL_FAILED",
          payload: error.status + "" + error.massage,
        });
      });
  };
};

export const postBoard = (data, teamId) => {
  return (dispatch, getState) => {
    dispatch({ type: "POST_BOARD_REQUEST" });
    //API CALL
      axios({ method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/board/${teamId}`,
      data: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${getState().getAuthRegister.token}`,}
        })
      .then((response) => {
        //TESTING
        const newBoard = response.data.result;
        dispatch({ type: "POST_BOARD_SUCCESS", payload: newBoard });
      })
      .catch((error) => {
        dispatch({
          type: "POST_BOARD_FAILED",
          payload: error.status + "" + error.massage,
        });
      });
  };
};

export const postList = (boardId, data) => {
  return (dispatch, getState) => {
    dispatch({ type: "POST_LIST_REQUEST" });
    //API CALL
     axios({ method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/board/${boardId}/list`,
      data: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${getState().getAuthRegister.token}`,}
        })
      .then((response) => {
        //TESTING
        const newList = response.data.result;
        dispatch({ type: "POST_LIST_SUCCESS", payload: newList });
      })
      .catch((error) => {
        dispatch({
          type: "POST_LIST_FAILED",
          payload: error.status + "" + error.massage,
        });
      });
  };
};

export const putArchiveList = (data, listId) => {
  return (dispatch, getState) => {
    dispatch({ type: "PUT_ARCHIVE_LIST_REQUEST" });
    //API CALL
     axios({ method: "PUT",
      url: `${process.env.REACT_APP_BASE_URL}/board/${listId}/archive`,
      data: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${getState().getAuthRegister.token}`,}
        })
      .then((response) => {
        //TESTING
        const newList = response.data.result;
        dispatch({ type: "PUT_ARCHIVE_LIST_SUCCESS", payload: newList });
      })
      .catch((error) => {
        dispatch({
          type: "PUT_ARCHIVE_LIST_FAILED",
          payload: error.status + "" + error.massage,
        });
      });
  };
};

export const putInviteMember = (data, boardId) => {
  return (dispatch, getState) => {
    dispatch({ type: "PUT_INVITE_MEMBER_REQUEST" });
    //API CALL
       axios({ method: "PUT",
      url: `${process.env.REACT_APP_BASE_URL}/board/members/${boardId}/member`,
      data: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${getState().getAuthRegister.token}`,}
        })
      .then((response) => {
        //TESTING
        const newList = response.data.result;
        dispatch({ type: "PUT_INVITE_MEMBER_SUCCESS", payload: newList });
      })
      .catch((error) => {
        dispatch({
          type: "PUT_INVITE_MEMBER_FAILED",
          payload: error.status + "" + error.massage,
        });
      });
  };
};
