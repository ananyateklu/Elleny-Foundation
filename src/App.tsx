// src/App.tsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mission from './pages/Mission';
import Impact from './pages/Impact';
import ImageGallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ParallaxProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element= {<ContactUs />} />
        </Routes>
        </ParallaxProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

