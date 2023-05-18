// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Mission from './pages/Mission';
import Impact from './pages/Impact';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Home from './components/Home';
import { HeroImageProvider } from './components/HeroImageContext';


const App: React.FC = () => {
  return (
    <HeroImageProvider>
    <Router>
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
        } />
        <Route path="/mission" element={
          <MainLayout>
            <Mission />
          </MainLayout>
        } />
        <Route path="/impact" element={
          <MainLayout>
            <Impact />
          </MainLayout>
        } />
        <Route path="/gallery" element={
          <MainLayout>
            <Gallery />
          </MainLayout>
        } />
        <Route path="/about" element={
          <MainLayout>
            <AboutUs />
          </MainLayout>
        } />
        <Route path="/contact" element={
          <MainLayout>
            <ContactUs />
          </MainLayout>
        } />
      </Routes>
    </Router>
    </HeroImageProvider>
  );
};

export default App;
