import logo from "./logo.svg";
import "./App.less";
import { Button } from "antd";
import NavBar from "./components/Navbar";
import { Login } from "./pages/Login";
function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
