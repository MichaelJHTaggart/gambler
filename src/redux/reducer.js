//initial State
const initialState = {
  user_id: '',
  name: '',
  email: '',
  coins: 0
}

//action constants
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT = 'LOGOUT';

//action creators
export function loginUser(user_id, name, email, coins) {
  return {
    type: LOGIN_USER,
    payload: { user_id, name, email, coins }
  };
};

export function logout() {
  return {
    type: LOGOUT
  };
};


//reducer function
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user_id: action.payload.user_id, name: action.payload.name, email: action.payload.email, coins: action.payload.coins }
    case LOGOUT:
      return initialState
    default:
      return state;
  }
}