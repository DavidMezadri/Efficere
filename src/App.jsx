import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Profile from './components/Profile';
import Services from './components/Services';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Profile />
        <Services />
        <Carousel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
