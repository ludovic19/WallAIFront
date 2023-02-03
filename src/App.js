import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from './pages/Home'
import Register from "./pages/Register";
import CreatePost from './pages/CreatePost'
import Login from "./pages/Login";
import Landing from "./pages/Landing"

const App = () => {
  return (
    <>
      <NavBar/>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/create-post" element={<CreatePost />}/>
        </Routes>
      </main>
      <Footer />

    </>
  );
};

export default App;
