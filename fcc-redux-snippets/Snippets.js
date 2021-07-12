// ## Create a Redux Store

const reducer = (state = 5) => {
  return state;
};

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

const store = Redux.createStore(reducer);

// ## Get State from the Redux Store

const store = Redux.createStore((state = 5) => state);
const currentState = store.getState();

// ## Define a Redux Action

/* An action is simply a JavaScript object that contains 
information about an action event that has occurred. The Redux s
tore receives these action objects, then updates its state accordingly. S
ometimes a Redux action also carries some data.
*/

const action = {
  type: "LOGIN",
};

// ## Define an Action Creator

/* An action creator is simply a JavaScript function that returns an action. 
In other words, action creators create objects that represent action events.
*/

const actionCreator = () => {
  return action;
};

// ## Dispatch an Action Event

/* Dispatch method is what you use to dispatch actions to the Redux store. 
Calling store.dispatch() and passing the value returned from an action creator 
sends an action back to the store.
*/

const store = Redux.createStore((state = {login: false}) => state);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

// Dispatch the action here:
store.dispatch(loginAction());

// ## Handle an Action in the Store

/* A reducer takes state and action as arguments, 
and it always returns a new state. 
*/

const defaultState = {
  login: false,
};

const reducer = (state = defaultState, action) => {
  // main
  switch (action.type) {
    case "LOGIN":
      return {login: true};
      break;
    default:
      return defaultState;
  }
  // main
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

// ## Use a Switch Statement to Handle Multiple Actions

const defaultState = {
  authenticated: false,
};

const authReducer = (state = defaultState, action) => {
  // main
  switch (action.type) {
    case "LOGIN":
      return {authenticated: true};
      break;
    case "LOGOUT":
      return {authenticated: false};
      break;
    default:
      return defaultState;
  }
  // main
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: "LOGIN",
  };
};

const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};

// ## Use const for Action Types

// declaration
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
// declaration

const defaultState = {
  authenticated: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };
    case LOGOUT:
      return {
        authenticated: false,
      };

    default:
      return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN,
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};

// ## Register a Store Listener

/* Another method you have access to on the Redux store object is store.subscribe(). 
This allows you to subscribe listener functions to the store, which are called whenever 
an action is dispatched against the store.
*/

const ADD = "ADD";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// callback func + subscribe
const increment = () => {
  return count++;
};

store.subscribe(increment);
// callback func + subscribe

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

// ## Combine Multiple Reducers

/* Define multiple reducers to handle different pieces of your application's state, 
then compose these reducers together into one root reducer
*/

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const authReducer = (state = {authenticated: false}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };
    case LOGOUT:
      return {
        authenticated: false,
      };
    default:
      return state;
  }
};

// Root reducer:
const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer,
});

const store = Redux.createStore(rootReducer);
