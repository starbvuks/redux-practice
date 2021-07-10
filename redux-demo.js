// import redux
const redux = require("redux");

// reducer
const counterReducer = (state = {counter: 0}, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  return state;
};

// store
const store = redux.createStore(counterReducer);

// triggered when state changes and
// gets snapshot of latest state after update
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// subscribe gets called any time an action is dispatched
store.subscribe(counterSubscriber);
store.dispatch({type: "increment"});
