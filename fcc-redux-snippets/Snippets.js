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

// ## Send Action Data to the Store

/* You can also send specific data along with your actions. 
In fact, this is very common because actions usually originate from some user 
interaction and tend to carry some data with them. 
*/

const ADD_NOTE = "ADD_NOTE";

const notesReducer = (state = "Initial State", action) => {
  switch (action.type) {
    // Change code below this line
    case ADD_NOTE:
      return (state = action.text);
      break;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note,
  };
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText("Hello!"));
console.log(store.getState());

// ## Use Middleware to Handle Asynchronous Actions

// Redux provides middleware designed specifically for this async purposes, called Redux Thunk middleware.

const REQUESTING_DATA = "REQUESTING_DATA";
const RECEIVED_DATA = "RECEIVED_DATA";

const requestingData = () => {
  return {type: REQUESTING_DATA};
};
const receivedData = (data) => {
  return {type: RECEIVED_DATA, users: data.users};
};

const handleAsync = () => {
  return function (dispatch) {
    // Dispatch request action here

    dispatch(requestingData());
    setTimeout(function () {
      let data = {
        users: ["Jeff", "William", "Alice"],
      };

      dispatch(receivedData(data));

      // Dispatch received data action here
    }, 2500);
  };
};

const defaultState = {
  fetching: false,
  users: [],
};

const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: [],
      };
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

// ## Redux Counter

const INCREMENT = "INCREMENT"; // Define a constant for increment action types
const DECREMENT = "DECREMENT"; // Define a constant for decrement action types

const counter = 0;

const counterReducer = (state = counter, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
      break;
    case DECREMENT:
      return state - 1;
      break;
    default:
      return state;
  }
};
// Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {
  return {
    type: INCREMENT,
  };
}; // Define an action creator for incrementing

const decAction = () => {
  return {
    type: DECREMENT,
  };
}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers

// ## Never Mutate State

/* If you took a snapshot of the state of a Redux app over time, 
you would see something like state 1, state 2, state 3,state 4, ... and so on 
where each state may be similar to the last, but each is a distinct piece of data. 
*/

const ADD_TO_DO = "ADD_TO_DO";

// A list of strings representing tasks to do:
const todos = [
  "Go to the store",
  "Clean the house",
  "Cook dinner",
  "Learn to code",
];

const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      // Don't mutate state here
      return [...state, action.todo];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo,
  };
};

const store = Redux.createStore(immutableReducer);

// Use the Spread Operator on Arrays

/* To clone an array but add additional values in the new array, 
you could write [...myArray, 'new value']. This would return a new array composed of 
the values in myArray and the string new value as the last value. 
*/

const immutableReducer = (state = ["Do not mutate state!"], action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      // Don't mutate state here or the tests will fail
      return [...state, action.todo];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: "ADD_TO_DO",
    todo,
  };
};

const store = Redux.createStore(immutableReducer);

// ## Remove an Item from an Array

const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      // Slice from start to index and then index+1 to end
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length),
      ];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: "REMOVE_ITEM",
    index,
  };
};

const store = Redux.createStore(immutableReducer);
