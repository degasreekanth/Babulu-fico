import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Courses from '@/components/Courses';
import WhyUs from '@/components/WhyUs';
import About from '@/components/About';
import Process from '@/components/Process';
import Placement from '@/components/Placement';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Courses />
        <WhyUs />
        <About />
        <Process />
        <Placement />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
