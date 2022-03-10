const initialState = {
  user: {},
  loading: true,
  error: "",
  token: "",
};

export const getAuthRegister = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_REGISTER_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "USER_REGISTER_SUCCES":
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };
    case "USER_REGISTER_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_USER_TOKEN":
      return {
        ...state,
        loading: false,
        token: action.payload,
      };
    case "USER_LOGIN_SUCCES":
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };
    case "USER_LOGIN_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "USER_LOGOUT":
      return {
        ...state,
        token: "",
        user: "",
      };
    default:
      return state;
  }
};
