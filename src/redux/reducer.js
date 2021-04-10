//initial State
const initialState = {
  id: '',
  full_name: '',
  coins: 0
}

//action constants
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT = 'LOGOUT';

//action creators
export function loginUser(id, full_name, coins) {
  return {
    type: LOGIN_USER,
    payload: { id, full_name, coins }
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
      return { ...state, user_id: action.payload.id, full_name: action.payload.full_name, coins: action.payload.coins }
    case LOGOUT:
      return initialState
    default:
      return state;
  }
}