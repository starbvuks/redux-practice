// import redux
const redux = require("redux");

// reducer
const counterReducer = (state, action) => {
  return {
    counter: state.counter + 1,
  };
};

// store
const store = redux.createStore(counterReducer);

// triggered when state changes and
// gets snapshot of latest state after update
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);
