import feelingsList from "../../utils/feelings";

// TODO enum
export const SECTION = {
    MOOD: "MOOD",
    FEELINGS: "FEELINGS",
    NOTES: "NOTES",
    LOADING: "LOADING",
    ERROR: "ERROR",
    CHECKED_IN: "CHECKED_IN",
};

export const ACTION = {
    UPDATE_SCORE: "UPDATE_SCORE",
    SUBMIT_SCORE: "SUBMIT_SCORE",
    UPDATE_FEELING: "UPDATE_FEELING",
    SUBMIT_FEELINGS: "SUBMIT_FEELINGS",
    UPDATE_NOTES: "UPDATE_NOTES",
    FINISH: "FINISH",
    LOADING: "LOADING",
    SHOW_ERROR: "SHOW_ERROR",
    RESET: "RESET",
};

export const initialState = {
    section: SECTION.MOOD,
    score: 4,
    feelings: feelingsList.map(item => ({ ...item, checked: false })),
    notes: "",
};

export const reducer = (state, action) => {
    if (action.type == ACTION.UPDATE_SCORE) {
        return {
            ...state,
            score: action.data,
        };
    }

    if (action.type == ACTION.SUBMIT_SCORE) {
        return {
            ...state,
            section: SECTION.FEELINGS,
        };
    }

    if (action.type == ACTION.UPDATE_FEELING) {
        return {
            ...state,
            feelings: state.feelings.map(item => item.value === action.data.value ? action.data : item),
        };
    }

    if (action.type == ACTION.SUBMIT_FEELINGS) {
        return {
            ...state,
            section: SECTION.NOTES,
        };
    }

    if (action.type == ACTION.UPDATE_NOTES) {
        return {
            ...state,
            notes: action.data,
        };
    }

    if (action.type === ACTION.LOADING) {
        return {
            ...state,
            section: SECTION.LOADING,
        };
    }

    if (action.type === ACTION.SHOW_ERROR) {
        return {
            ...state,
            section: SECTION.ERROR,
        };
    }

    if (action.type === ACTION.FINISH) {
        return {
            ...state,
            section: SECTION.CHECKED_IN,
        };
    }

    if (action.type == ACTION.RESET) {
        return { ...initialState };
    }

    return state;
};
