import './assets/Styles/style.css';
import './assets/Styles/navbar.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import NavBar from "./Components/NavBar";
//Views
import Home from "./Views/Home";
import Pokemones from "./Views/Pokemones";
import NotFound from './Views/NotFound';
import DetallePokemon from './Views/DetallePokemon';



function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<Pokemones />} />
            <Route path="/pokemones/:name" element={<DetallePokemon />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
