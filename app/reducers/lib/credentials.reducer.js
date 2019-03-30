import { SET_CREDENTIALS_ACTION } from "../../actions/credentials.actions";

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case SET_CREDENTIALS_ACTION: return { ...action.payload };

    default: return state;
  }
}