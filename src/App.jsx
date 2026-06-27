import './App.css'
import profile from './data/profile.json'
import skills from './data/skills.json'
import experiences from './data/experience.json'
import education from './data/education.json'
import certifications from './data/certifications.json'
import projects from './data/projects.json'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page-shell">
      <Navbar name={`${profile.hero.firstName} ${profile.hero.lastName}`} />
      <main>
        <Hero hero={profile.hero} resumeUrl={profile.contact.resume} />
        <About about={profile.about} facts={profile.facts} />
        <Skills skills={skills} />
        <Experience experiences={experiences} />
        <Education education={education} />
        <Certifications certifications={certifications} />
        <Projects projects={projects} />
        <Contact contact={profile.contact} />
      </main>
      <Footer />
    </div>
  )
}

export default App
