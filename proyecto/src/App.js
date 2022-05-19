import { Header } from "./components/layouts/Header/Header";
import { Body } from "./components/layouts/Body/Body";
const buttonAddition = document.getElementById("ButtonAddition");
const buttonReset = document.getElementById("ButtonReset");
const buttonSubtraction = document.getElementById("ButtonSubtraction");
const numberBody = document.getElementById("numberBody");

function adittion(){
  let result = parseInt(numberBody.value) + 1;
  numberBody.textContent = result;
}


function App() {
  return (
  <div className="App">
    <Header/>
    <section>
      <Body/>
    </section>
  </div>
  );
}

buttonAddition.addEventListener("click",adittion);

export default App;
