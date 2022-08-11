import { useSelector, useDispatch } from "react-redux";
import { increaseCounter, decreaseCounter } from "../../stores/actions/counter";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="container text-center">
      <h1>Counter App Page</h1>
      <hr />
      <h1>{counter.count}</h1>
      <button onClick={() => dispatch(decreaseCounter(2))}>-2</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
      <button onClick={() => dispatch(increaseCounter())}>+</button>
    </div>
  );
}

export default Counter;
