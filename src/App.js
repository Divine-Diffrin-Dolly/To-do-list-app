import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ToDoAppRouter from "./router";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={"todolist"}>
        <ToDoAppRouter></ToDoAppRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
