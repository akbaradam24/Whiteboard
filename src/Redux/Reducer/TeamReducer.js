const inititailState = {
  teams: [],
  oneTeam: [],
  teamDetail: [],
  loading: true,
  error: "",
};

export const teamReducer = (state = inititailState, action) => {
  switch (action.type) {
    case "GET_TEAM_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_TEAM_SUCCES":
      return {
        ...state,
        loading: false,
        teams: action.payload,
      };
    case "GET_TEAM_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case "GET_ONE_TEAM_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ONE_TEAM_SUCCES":
      return {
        ...state,
        loading: false,
        oneTeam: action.payload,
      };
    case "GET_ONE_TEAM_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "POST_TEAM_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "POST_TEAM_SUCCES":
      return {
        ...state,
        loading: false,
        teams: [action.payload, ...state.teams],
      };
    case "POST_TEAM_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case "GET_TEAM_DETAIL_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_TEAM_DETAIL_SUCCES":
      return {
        ...state,
        loading: false,
        teamDetail: action.payload,
      };
    case "GET_TEAM_DETAIL_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
