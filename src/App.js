import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import Home from './pages/home/Home';
import Explore from "./pages/Explore/Explore";
import DetailPage from "./pages/detailPage/DetailPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DefaultLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="explore" element={<Explore/>}/>
            <Route path ="detailPage/:postId" element={<DetailPage/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
