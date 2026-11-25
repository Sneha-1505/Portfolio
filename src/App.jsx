import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Journey from './components/Journey.jsx';
import Skills from './components/Skills.jsx';
import Story from './components/Story.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Journey />
        <Skills />
        <Story />
        <CTA />
      </main>
      <Footer />
      </MotionConfig>
    </LazyMotion>
  );
}
