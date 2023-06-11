import "./App.css";
import { LeftMenu } from "./components/LeftMenu";
import { MainContainer } from "./components/MainContainer";

function App() {

  return (
    <div className="App">
      <div className=""></div>
      <LeftMenu />
      <MainContainer />

      <div className="background"></div>
    </div>
  );
}

export default App;