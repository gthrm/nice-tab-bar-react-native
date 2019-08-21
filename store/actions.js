import constants from "./constants";

export default {

  changeScreenThatYouSee(NewScreenThatYouSee) {
    return {
      type: constants.ACTION_CHANGE_SCREEN_THAT_YOU_SEE,
      payload: NewScreenThatYouSee
    };
  },
  
  getInitialState() {
    return {
      type: constants.ACTION_GET_INITIAL_STATE
    };
  }
}