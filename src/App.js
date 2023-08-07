import Header from "./components/Header/Header";
import './styles/reset.css'
import './styles/common.css'
import Calculator from "./components/Calculator/Calculator";

function App() {
  return (
    <div className="wrapper">

      <Header/>

      <Calculator/>

    </div>
  );
}

export default App;
