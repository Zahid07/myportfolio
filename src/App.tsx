import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About, Contact, Home } from './pages';
import { useEffect } from 'react';



function App() {


  return (
    <div  >
      <Router>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
