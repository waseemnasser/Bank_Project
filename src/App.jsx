import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Careers from './pages/Careers';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Security from './pages/Security';
import About from './pages/About';
import NavBar from "./components/navBar/NavBar"
import Footer from './components/Footer/Footer';
import "./App.css"


function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/security" element={<Security />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;