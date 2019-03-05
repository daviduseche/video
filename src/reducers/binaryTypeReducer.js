import { BINARY_TYPE } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case BINARY_TYPE:
      return action.payload;
    default:
      return state;
  }
};
