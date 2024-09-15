import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Layout from "./Layouts/Layout";
import Contact from "./Routes/Contact";


function App() {
  return (
      <div className="App">          
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/favs" element={<Favs />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="*" element={<h1>Page not Found</h1>} />
            </Route>
          </Routes>
      </div>
  );
}

export default App;
