import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Provinces from './pages/Provinces';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import CourseDetail from './components/CourseDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/provincias" element={<Provinces />} />
            <Route path="/resenas" element={<Reviews />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
