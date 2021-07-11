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
