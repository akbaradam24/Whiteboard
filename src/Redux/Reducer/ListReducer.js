const inititailState = {
    list: [],
    loading: true,
    error: ""
}

export const listReducer = (state = inititailState, action) => {
    switch(action.type) {
    case "GET_LIST_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_LIST_SUCCESS":
      return {
        ...state,
        error: "",
        loading: false,
        list: action.payload,
      };
    case "GET_LIST_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "PUT_ARCHIVE_LIST_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "PUT_ARCHIVE_LIST_SUCCESS":
      return {
        ...state,
        error: "",
        loading: false,
        list: [action.payload, ...state.list],
      };
    case "PUT_ARCHIVE_LIST_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
        return state;
    }
}