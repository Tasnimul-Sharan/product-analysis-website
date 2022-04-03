import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import DashBoard from "./Components/DashBoard/DashBoard";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Review from "./Components/Review/Review";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Review" element={<Review />}></Route>
        <Route path="/DashBoard" element={<DashBoard />}></Route>
        <Route path="/Blogs" element={<Blogs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

const Header = () => {
  return (
    <div className="header">
      <Link to="Home">Home</Link>
      <Link to="Review">Review</Link>
      <Link to="DashBoard">DashBoard</Link>
      <Link to="Blogs">Blogs</Link>
    </div>
  );
};

export default App;
