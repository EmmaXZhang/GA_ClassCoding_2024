export function counterReducer(state, action) {
  if (action.type === "INCREMENT" || action.type === "DECREMENT") {
    return {
      ...state,
      count: state.count + action.payload,
    };
  }

  if (action.type === "RESET") {
    return {
      ...state,
      count: action.payload,
    };
  }

  return state;
}

function App() {
  const [counterState, counterDispatch] = React.useReducer(counterReducer, {
    count: 0,
  });

  function handleIncrement() {
    counterDispatch({
      type: "INCREMENT",
      payload: 1,
    });
  }

  function handleDecrement() {
    counterDispatch({
      type: "DECREMENT",
      payload: -1,
    });
  }

  function handleReset() {
    counterDispatch({
      type: "RESET",
      payload: 0,
    });
  }

  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </p>
      <p id="counter">{counterState.count}</p>
    </div>
  );
}

export default App;
