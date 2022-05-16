import {Home} from "./components/Pages/Home/Home";
import {AboutsUS} from "./components/Pages/AboutUS/AboutsUS";
import {ContactUS} from "./components/Pages/ContactUS/ContactUS";
import {NotFound} from "./components/Pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/layouts/Header/Header";

function App() {
  return (
  <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutUS" element={<AboutsUS/>}/>
      <Route path="/contactUS" element={<ContactUS/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </div>
  );
}

export default App;
