
import './App.css';
import  Header from './MyComponents/Header';
import  Footer from './MyComponents/Footer';
import Home from './MyComponents/Home';
import About from './MyComponents/About';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <Header title="My Todo List" serachBar={true}/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>

        <Footer/>
    </div>
  );
}

export default App;

