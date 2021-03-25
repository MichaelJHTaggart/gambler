//initial State
const initialState = {
 email: '',
 user_id: '',
 coins: 0
}

//action constants
const LOGIN_USER = 'LOGIN_USER';

//action creators
export function loginUser(email, user_id, coins) {
 return {
  type: LOGIN_USER,
  payload: { email, user_id, coins }
 };
};


//reducer function
export default function reducer(state = initialState, action) {
 switch (action.type) {
  case LOGIN_USER:
   return { ...state, email: action.payload.email, user_id: action.payload.user_id, coins: action.payload.coins }
  default:
   return state
 }
}