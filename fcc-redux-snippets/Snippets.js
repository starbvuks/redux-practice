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
