import { Route , Routes} from "react-router-dom";
import { Header } from "./components/layouts/Header/Header";
import { NotFound } from "./components/Pages/NotFound/NotFound";
import { ButtonDark } from "./components/UI/ButtonDark/ButtonDark";
import { ButtonRickAndMorty } from "./components/UI/ButtonRickAndMorty/ButtonRickAndMorty";
import { ButtonUseCustom } from "./components/UI/ButtonUseCustom/ButtonUseCustom";
import { ButtonUseEffect } from "./components/UI/ButtonUseEffect/ButtonUseEffect";
import { ButtonUseState } from "./components/UI/ButtonUseState/ButtonUseState";
import { Home } from "./components/UI/Home/Home";
import { Body } from "./components/layouts/Body/Body";
import { Mailer } from "./components/UI/Mailer/Mailer";


function App() {
  return (
  <div className="App" id="App">
    <Header/>
    <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/useCustom' element={<ButtonUseCustom/>}/>
        <Route path='/mailer' element={<Mailer/>}/>
        <Route path='/useState' element={<ButtonUseState/>}/>
        <Route path='/buttonDark' element={<ButtonDark/>}/>
        <Route path='/buttonRickAndMorty' element={<ButtonRickAndMorty/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    {/* <Body/> */}
  </div>
  );
}

export default App;
