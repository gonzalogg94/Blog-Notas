import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/views/Inicio"
import Menu from "./components/common/Menu"
import Footer from "./components/common/Footer"
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/style.css"
import Nosotros from "./components/views/Nosotros";




function App() {
  return (
<BrowserRouter>
<Menu></Menu>
<Routes>
  <Route exact path="/" element={<Inicio></Inicio>} ></Route>
  <Route exact path="/nosotros" element={<Nosotros></Nosotros>} ></Route>
</Routes>
<Footer></Footer>
</BrowserRouter>
   
  );
}

export default App;
