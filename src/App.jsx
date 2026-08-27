import { useState } from 'react'
import './App.css'

const profile = {
  name: 'Marcelo',
  fullName: 'Marcelo Nieva',
  role: 'Full Stack Developer',
  location: 'Lima, Peru',
  phone: '+51 922 453 832',
  email: 'mnievafra@gmail.com',
  website: 'https://marcelofra.github.io/perfil/',
  summary:
    'Desarrollador full stack con mas de cinco anos de experiencia creando aplicaciones web empresariales con .NET, React, Angular, JavaScript y SQL Server.',
}

const projects = [
  {
    title: 'Enterprise SaaS Platform',
    company: 'Createc Solutions',
    description:
      'Soluciones empresariales para facturacion electronica, POS, inventario y reportes con .NET, React y arquitecturas escalables.',
    tech: ['C#', 'ASP.NET Core', 'React', 'Angular', 'Docker'],
  },
  {
    title: 'Banking Web Services',
    company: 'Softtek',
    description:
      'Servicios web .NET Core para banca, soporte de aplicaciones React JS y validacion con Postman y SoapUI.',
    tech: ['.NET Core', 'React JS', 'Postman', 'SoapUI'],
  },
  {
    title: 'BBVA Digital Apps',
    company: 'Neoris',
    description:
      'Aplicaciones internas, reportes de facturacion y mejoras en GLOMO Mobile usando Angular, Cells y Lit Element.',
    tech: ['Angular', 'Cells', 'Lit Element', 'Bootstrap'],
  },
]

const skills = [
  'C#',
  'ASP.NET Core',
  'React',
  'Angular',
  'JavaScript',
  'TypeScript',
  'SQL Server',
  'Docker',
  'Git',
  'SCRUM',
  'Codex',
]

const experience = [
  {
    company: 'Createc Solutions',
    role: 'Full Stack Developer',
    period: '2024 - Actualidad',
    description:
      'Desarrollo de aplicaciones web empresariales, soluciones SaaS, APIs REST y prototipado UI con IA.',
  },
  {
    company: 'Softtek',
    role: 'Desarrollador Full Stack',
    period: '2024 - 2025',
    description:
      'Servicios web .NET Core para Banco Pichincha y soporte de aplicaciones React JS para Pacifico.',
  },
  {
    company: 'Neoris',
    role: 'Desarrollador Front End',
    period: '2022 - 2023',
    description:
      'Time Reporting, reportes de facturacion para BBVA Colombia y mejoras en GLOMO Mobile bajo SCRUM.',
  },
  {
    company: 'Baufest',
    role: 'Desarrollador Full Stack',
    period: '2020 - 2022',
    description:
      'Mantenimiento, mejoras, documentacion y gestion de incidencias para clientes empresariales.',
  },
]

const education = [
  'Ingenieria de Sistemas - UPC, 2021 - 2026',
  'Computacion e Informatica - CIBERTEC',
  'Scrum Foundation Professional Certificate - Certiprof',
  'Azure DevOps, Microservicios, Angular y React',
]

function ChatIcon() {
  return (
    <svg className="chat-icon" viewBox="0 0 42 34" aria-hidden="true">
      <path d="M21 4C11.9 4 5 9.6 5 16.4c0 4.9 3.6 9.2 8.9 11.2l-.7 3.5 5-2.5c.9.1 1.8.2 2.8.2 9.1 0 16-5.6 16-12.4S30.1 4 21 4Z" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="portfolio-shell">
      <nav className="site-nav" aria-label="Navegacion principal">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <img src={`${import.meta.env.BASE_URL}logomarce.png`} alt="Marcelo Nieva" />
        </a>
        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
        >
          <span></span>
          Menu
        </button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>Perfil</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Proyectos</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experiencia</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>
        </div>
        <a
          className="hire-link"
          href="https://wa.me/51922453832?text=Hola%20Marcelo%2C%20quiero%20consultar%20sobre%20tu%20portafolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ChatIcon />
          Hire me
        </a>
      </nav>

      <section className="hero-section" id="home">
        <div className="side-note">Full Stack Developer desde Lima, Peru.</div>
        <div className="hero-copy">
          <h1>
            Hi, my
            <span>name is <strong>{profile.name}.</strong></span>
          </h1>
          <p>
            Soy un <strong>desarrollador creativo independiente</strong> enfocado en
            aplicaciones web, APIs y productos digitales claros, rapidos y utiles.
          </p>
        </div>
        <div className="hero-art">
          <div className="stripe-panel" aria-hidden="true"></div>
          <img
            className="avatar"
            src={`${import.meta.env.BASE_URL}hero-avatar.png`}
            alt="Ilustracion de Marcelo"
          />
        </div>
        <a className="scroll-cue" href="#about">
          <span>Scroll</span>
        </a>
      </section>

      <section className="section about-section" id="about">
        <p className="section-index">01</p>
        <div>
          <p className="eyebrow">Perfil</p>
          <h2>Construyo soluciones digitales con frontend cuidado y backend solido.</h2>
        </div>
        <div className="section-copy">
          <p>{profile.summary}</p>
          <p>
            Trabajo desde el analisis hasta el despliegue, integrando APIs REST,
            SQL Server, buenas practicas de UI y equipos SCRUM.
          </p>
          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="section-index">02</p>
          <div>
            <p className="eyebrow">Proyectos</p>
            <h2>Trabajo reciente</h2>
          </div>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p>{project.company}</p>
              <h3>{project.title}</h3>
              <span>{project.description}</span>
              <div>
                {project.tech.map((tech) => (
                  <small key={tech}>{tech}</small>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading">
          <p className="section-index">03</p>
          <div>
            <p className="eyebrow">Experiencia</p>
            <h2>Trayectoria</h2>
          </div>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <time>{item.period}</time>
              <h3>{item.company}</h3>
              <strong>{item.role}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section education-section">
        <p className="section-index">04</p>
        <div>
          <p className="eyebrow">Formacion</p>
          <h2>Estudios y certificaciones</h2>
        </div>
        <ul>
          {education.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Contacto</p>
        <h2>Disponible para construir productos web con foco en negocio.</h2>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replaceAll(' ', '')}`}>{profile.phone}</a>
          <a href={profile.website} target="_blank" rel="noreferrer">
            Portafolio web
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
