import { UPLOADED_FILE, BINARY_TYPE } from './types';

export const uploadFile = fileSelect => {
  return {
    type: UPLOADED_FILE,
    payload: fileSelect
  };
};

export const binaryType = hexCode => {
  return {
    type: BINARY_TYPE,
    payload: hexCode
  };
};
