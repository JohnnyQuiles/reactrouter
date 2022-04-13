import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Form from './Pages/Form';
import Submitted from './Pages/Submitted';

render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='home' element={<Home />} />
      <Route path='about' element={<About />} />

      <Route path='contact' element={<Contact />}>
        <Route path='form' element={<Form />} />
        <Route path='submitted' element={<Submitted />} />
      </Route>

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
