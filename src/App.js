import "./styles/App.css";
import googleLogo from "./images/googlelogo.png";
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "./components/Button";
function App() {

  return (
    <div className="App">
      <Header/>
      <img className="app-logo" src={googleLogo} alt="" />
      <Input />
      <Button />
    </div>
  );
}

export default App;
