import calculateHappinessPercentage from "../../utils/calculate-hapiness-percentage";

// TODO enum
export const ACTION = {
    LOADING: "LOADING",
    SHOW_ERROR: "SHOW_ERROR",
    UPDATE_LIST: "UPDATE_LIST",
};

export const initialState = {
    loading: false,
    error: false,
    percentage: undefined,
    items: [],
};

export const reducer = (state, action) => {
    if (action.type == ACTION.LOADING) {
        return {
            ...state,
            loading: true,
        };
    }

    if (action.type == ACTION.SHOW_ERROR) {
        return {
            ...state,
            loading: false,
            error: true,
        };
    }

    if (action.type == ACTION.UPDATE_LIST) {
        return {
            ...state,
            loading: false,
            percentage: calculateHappinessPercentage(action.data),
            items: action.data,
        };
    }

    return state;
};
