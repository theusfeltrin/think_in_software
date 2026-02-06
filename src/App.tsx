import './App.css';
import { colors } from './theme';
import {
  HeroSection,
  AboutSection,
  ProcessTimeline,
  // TechSection,
  ContactSection,
  Footer,
  Navigation,
  TechGridSection,
} from './components';

function App() {
  return (
    <div
      className="min-h-screen font-roboto"
      style={{
        backgroundColor: colors.page_bg,
        color: colors.text,
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProcessTimeline />
      {/* <TechSection /> */}
      <TechGridSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
