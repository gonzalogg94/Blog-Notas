import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/views/Inicio"
import Menu from "./components/common/Menu"
import Footer from "./components/common/Footer"
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
<BrowserRouter>
<Menu></Menu>
<Routes>
  <Route exact path="/" element={<Inicio></Inicio>} ></Route>
</Routes>
<Footer></Footer>
</BrowserRouter>
   
  );
}

export default App;
