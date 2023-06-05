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
      <Input type="search" />
      <Button value='Pesquisa Google' prop2={25} prop3={true} />
      <Button value='Estou com Sorte' prop2={30} prop3={false} />
    </div>
  );
}

export default App;
