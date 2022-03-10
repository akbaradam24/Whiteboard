const inititailState = {
    assignTo: [],
    loading: true,
    error: "",
};

export const assignToReducer = (state = inititailState, action) => {
    switch (action.type) {
        case "GET_ASSIGN_TO_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "GET_ASSIGN_TO_SUCCES":
            return {
                ...state,
                loading: false,
                teams: action.payload,
            };
        case "GET_ASSIGN_TO_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
    }
};
