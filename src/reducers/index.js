import { combineReducers } from 'redux';
import uploadFileReducer from './uploadFileReducer';
import binaryTypeReducer from './binaryTypeReducer';

export default combineReducers({
  fileUpload: uploadFileReducer,
  binaryFileType: binaryTypeReducer
});
