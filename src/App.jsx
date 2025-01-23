import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import MainComponent from './components/MainComponent'
import FooterComponent from './components/FooterComponent';
import Contact from './Contact';





function App() {

  const links = {
    home: 'Home',
    aboutMe: 'About Me',
    proyects: ' Proyects',
    contact: 'Contact'
  };

  return (
    <Router>
      <HeaderComponent links={links}></HeaderComponent>

      <Routes>
        {/* Ruta para Contact */}
        <Route path="/contact" element={<Contact></Contact>} />

        {/* Componente principal */}
        <Route path="/" element=
          {
            <>
              <MainComponent></MainComponent>
              <FooterComponent></FooterComponent>
            </>
          }>
        </Route>
        
      </Routes>
    </Router>
  )
}

export default App