import React from 'react'
import Card from './components/Card'
import Reactjs from './components/Reactjs'
import FrontendCard from './components/Frontend'
import PhpCard from './components/Php'
import PythonCard from './components/Python'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import HeroGrid from './components/HeroGrid';
import Contactus from './components/Contactus';

const Home = () => <div>
  <HeroGrid />
  <MainSection />
</div>;
const Frontend = () => <div>
  <FrontendCard />
</div>;
const ReactJS = () => <div>
  <Reactjs />
</div>;
const PHP = () => <div>
  <PhpCard />
</div>;
const Python = () => <div>
  <PythonCard />
</div>;

const Contact = () =>
  <div>
    <Contactus />
  </div>;

function App() {
  return (
    <Router>
      <Navbar />
      <div className="mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/reactjs" element={<ReactJS />} />
          <Route path="/php" element={<PHP />} />
          <Route path="/python" element={<Python />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
