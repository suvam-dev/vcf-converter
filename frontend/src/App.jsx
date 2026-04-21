import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;

