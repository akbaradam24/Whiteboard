const inititailState = {
  boards: [],
  boardMembers: [],
  boardDetail: [],
  member: [],
  loading: true,
  error: "",
};

export const boardReducer = (state = inititailState, action) => {
  switch (action.type) {
    case "GET_BOARDS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_BOARDS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        boards: action.payload,
      };
    case "GET_BOARDS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_BOARD_MEMBERS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_BOARD_MEMBERS_SUCCESS":
      return {
        ...state,
        error: "",
        loading: false,
        boardMembers: action.payload,
      };
    case "GET_BOARD_MEMBERS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_BOARD_MEMBER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_BOARD_MEMBER_SUCCESS":
      return {
        ...state,
        error: "",
        loading: false,
        member: action.payload,
      };
    case "GET_BOARD_MEMBER_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "POST_BOARD_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "POST_BOARD_SUCCESS":
      return {
        ...state,
        loading: false,
        boards: [action.payload, ...state.boards],
      };
    case "POST_BOARD_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "PUT_INVITE_MEMBER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "PUT_INVITE_MEMBER_SUCCESS":
      return {
        ...state,
        error: "",
        loading: false,
        boardMembers: [action.payload, ...state.members],
      };
    case "PUT_INVITE_MEMBER_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
