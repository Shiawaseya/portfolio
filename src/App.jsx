import { WeatherProvider } from './components/weather/Weather'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './features/home/Home'
import About from './features/about/About'
import Skills from './features/skills/Skills'
import Education from './features/education/Education'
import Experience from './features/experience/Experience'
import Projects from './features/projects/Projects'
import Certifications from './features/certifications/Certifications'
import Beyond from './features/beyond/Beyond'
import Resume from './features/resume/Resume'
import Contact from './features/contact/Contact'

export default function App() {
  return (
    <WeatherProvider>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Certifications />
        <Beyond />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </WeatherProvider>
  )
}
