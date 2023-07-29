import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const inc = "increment";
const incByAmount = "incrementByAmount";

const store = createStore(reducer, applyMiddleware(logger.default));

// action name constants

function reducer(state = { amount: 1 }, action) {
  if (action.type === inc) {
    // immutability
    return { amount: state.amount + 1 };
  }

  if (action.type === incByAmount) {
    return { amount: state.amount + action.payload };
  }

  return state;
}

// global state
store.subscribe(() => {
  console.log("store changes", store.getState());
});

// Action creators
function increment() {
  return { type: inc };
}

function incrementByAmount(value) {
  return { type: incByAmount, payload: value };
}

setInterval(() => {
  store.dispatch(incrementByAmount(5));
}, 1000);
