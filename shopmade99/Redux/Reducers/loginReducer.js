import {LOGIN_SUKSES, LOGIN_ERROR} from '../Constans/LoginConstans';

const defaultState = {
  statLogin: true,
  username: '',
  password: '',
  msg: '',
};

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_SUKSES:
      return {
        statLogin: true,
        msg: 'Login Sukses',
      };

    case LOGIN_ERROR:
      return {
        ...defaultState,
        msg: action.payload,
      };

    default:
      return state;
  }
};
