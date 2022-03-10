const initialState = {
  loading: true,
  task: [],
};

export const getTasks = (state = initialState, action) => {
  switch (action.type) {
    case "TASKS_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_TASKS":
      return {
        ...state,
        loading: true,
        task: action.payload,
      };
    default:
      return state;
  }
};
