import axios from "axios";
export const getProfile = () => {
  return (dispatch, getState) => {
    dispatch({ type: "PROFILE_LOADING" });
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/profile/`, {
        headers: {
          //  Cara pertama dengan useSelector, state di component/page
          // Authorization: token,
          //  Cara kedua dapatkan token dari getstate
          Authorization: `Bearer ${getState().getAuthRegister.token}`,
        },
      })
      .then((response) => {
        dispatch({ type: "GET_PROFILE_USER_ID", payload: response.data.result.userId._id });
        dispatch({ type: "GET_PROFILE_IMAGE", payload: response.data.result.image });
        dispatch({ type: "PROFILE_NAMA", payload: response.data.result.userId.name });
        dispatch({ type: "PROFILE_EMAIL", payload: response.data.result.userId.email });
        dispatch({ type: "PROFILE_COMPANY_NAME", payload: response.data.result.companyName });
      })
      .catch((error) => console.log(error.response));
  };
};
export const editProfile = (formData) => {
  return (dispatch, getState) => {
    dispatch({ type: "PROFILE_LOADING" });
    //nanti disini ada values yang diambil dari account.js
    axios
      // ({
      //   method: "PUT",
      //   url: `${process.env.REACT_APP_BASE_URL}/profile`,
      //   data: formData,
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${getState().getAuthRegister.token}`,
      //   },
      // }).then((response) => console.log(response));
      .put(`${process.env.REACT_APP_BASE_URL}/profile/`, formData, {
        headers: {
          Authorization: `Bearer ${getState().getAuthRegister.token}`,
        },
      })
      .then((response) => window.location.reload()) //digunakan untuk buat reload NOTE:Nanti dibenerin dengan disatuin reducernya
      .catch((error) => console.log(error.response));
  };
};
export const changePassword = (data) => {
  return (dispatch) => {
    dispatch({ type: "PROFILE_LOADING" });
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/forgot-password`, data)
      .then((res) => {
        console.log(res);
        dispatch({ type: "CHANGE_PASSWORD_SUCCESS", payload: res?.data?.message });
        // return Promise.resolve(res);
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({ type: "CHANGE_PASSWORD_FAILED", payload: error?.response?.data?.message });
        // return Promise.reject(error);
      });
  };
};

export const changeEmail = () => {
  return (dispatch) => {
    dispatch({ type: "PROFILE_LOADING" });
    axios.put(`${process.env.REACT_APP_BASE_URL}/profile/changemail`).then((response) => console.log(response));
  };
};
