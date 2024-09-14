import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Videomainpage from "./components/Videomainpage/Videomainpage";

function App() {
  return (
    <div className="App">
      <Header />
      <Videomainpage />
      <Routes>
        <Route path="./pages/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
