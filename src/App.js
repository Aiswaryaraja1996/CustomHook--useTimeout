import "./App.css";
import { ReadyContext } from "./context/readyContext";
import useTimeout from "./hooks/useTimeout";
import { useContext} from "react";

function App() {
  const [ready, setReady] = useContext(ReadyContext);

  useTimeout(20000);

  return (
    <div className="App">
      <h1>Custom Hook - useTimeout</h1>

      <p>The ready state will change after {20000 / 1000} seconds.</p>
      <h2>Ready State : {ready ? "True" : "False"}</h2>
    </div>
  );
}

export default App;
