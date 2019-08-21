import constants from "./constants/index.js";
import { initialState } from "./initialState.js";

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ACTION_CHANGE_SCREEN_THAT_YOU_SEE:
            return { ...state, screenThatYouSee: action.payload };

        case constants.ACTION_GET_INITIAL_STATE:
            return initialState;
    }
    return state;
}