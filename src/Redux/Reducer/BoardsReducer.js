const initialState = {
  titleBoards: "",
  teamName: "",
  error: "",
};
export const Boards = (state = initialState, action) => {
  switch (action.type) {
    case "TITLE_BOARDS":
      return {
        ...state,
        titleBoards: action.payload,
      };
    case "TEAM_NAME":
      return {
        ...state,
        teamName: action.payload,
      };
    default:
      return state;
  }
};
