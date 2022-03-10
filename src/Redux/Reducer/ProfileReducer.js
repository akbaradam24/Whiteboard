const initialState = {
  loading: true,
  userId: "",
  image: "",
  nama: "",
  email: "",
  companyName: "",
  error: "",
  messageSuccess: "",
};
export const getProfile = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_PROFILE_USER_ID":
      return {
        ...state,
        userId: action.payload,
      };
    case "GET_PROFILE_IMAGE":
      return {
        ...state,
        loading: true,
        image: action.payload,
      };
    case "GET_PROFILE_FAILED":
      return {
        ...state,
        error: action.payload,
      };
    case "PROFILE_NAMA":
      return {
        ...state,
        nama: action.payload,
      };
    case "PROFILE_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "PROFILE_COMPANY_NAME":
      return {
        ...state,
        companyName: action.payload,
      };
    case "CHANGE_PASSWORD_FAILED":
      return {
        ...state,
        error: action.payload,
      };
    case "CHANGE_PASSWORD_SUCCESS":
      return {
        ...state,
        messageSuccess: action.payload,
      };
    default:
      return state;
  }
};
