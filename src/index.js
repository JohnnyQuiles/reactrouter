import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/home'element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
