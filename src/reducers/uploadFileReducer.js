import { UPLOADED_FILE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case UPLOADED_FILE:
      return { ...state, file: action.payload };
    default:
      return state;
  }
};
