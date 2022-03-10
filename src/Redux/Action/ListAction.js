import axios from "axios";

export const getList = (boardId) => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_LIST_REQUEST" });
    //API CALL
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/board/detail/${boardId}`, {
        headers: {
          "Authorization": `Bearer ${getState().getAuthRegister.token}`,
        },
      })
      .then((response) => {
        const list = response.data.result.lists;
        dispatch({ type: "GET_LIST_SUCCESS", payload: list });
      })
      .catch((error) => {
        dispatch({
          type: "GET_LIST_FAILED",
          payload: error.response ? error?.response?.data?.message : error,
        });
      });
  };
};

export const postList = (data, boardId) => {
  return (dispatch, getState) => {
    dispatch({ type: "POST_LIST_REQUEST" });
    //API CALL
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/board/${boardId}/list`,
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getState().getAuthRegister.token}`,
      },
    })
      .then((response) => {
        const newList = response.data.result;
        dispatch({ type: "POST_LIST_SUCCES", payload: newList });
      })
      .catch((error) => {
        dispatch({
          type: "POST_LIST_FAILED",
          payload: error.response ? error?.response?.data?.message : error,
        });
      });
  };
};

export const renameList = (data, boardId, listId) => {
  return (dispatch, getState) => {
    dispatch({ type: "RENAME_LIST_REQUEST" });
    //API CALL
    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_BASE_URL}/board/${boardId}/${listId}/rename`,
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getState().getAuthRegister.token}`,
      },
    })
      .then((response) => {
        const renamedList = response.data.result;
        dispatch({ type: "RENAME_LIST_SUCCES", payload: renamedList });
      })
      .catch((error) => {
        dispatch({
          type: "RENAME_LIST_FAILED",
          payload: error.response ? error?.response?.data?.message : error,
        });
      });
  };
};

export const archiveList = (data, listId) => {
  return (dispatch, getState) => {
    dispatch({ type: "ARCHIVE_LIST_REQUEST" });
    //API CALL
    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_BASE_URL}/board/${listId}/archive`,
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getState().getAuthRegister.token}`,
      },
    })
      .then((response) => {
        const archivedList = response.data.result;
        dispatch({ type: "ARCHIVE_LIST_SUCCES", payload: archivedList });
      })
      .catch((error) => {
        dispatch({
          type: "ARCHIVE_LIST_FAILED",
          payload: error.response ? error?.response?.data?.message : error,
        });
      });
  };
};

export const copyList = (data, boardId, listId) => {
  return (dispatch, getState) => {
    dispatch({ type: "COPY_LIST_REQUEST" });
    //API CALL
    axios({
      method: "PUT",
      url: `${process.env.REACT_APP_BASE_URL}/board/${boardId}/${listId}/copy`,
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getState().getAuthRegister.token}`,
      },
    })
      .then((response) => {
        const copiedList = response.data.result;
        dispatch({ type: "COPY_LIST_SUCCES", payload: copiedList });
      })
      .catch((error) => {
        dispatch({
          type: "COPY_LIST_FAILED",
          payload: error.response ? error?.response?.data?.message : error,
        });
      });
  };
};
