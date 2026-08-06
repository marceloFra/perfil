import { useState } from 'react'
import './App.css'

const profilePhoto = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80'
const fallbackProfilePhoto = profilePhoto

const profile = {
  name: 'Marcelo Nieva',
  fullName: 'Marcelo Francisco Nieva Badajos',
  role: 'Full Stack Developer',
  location: 'Lima, Peru',
  phone: '+51 922 453 832',
  email: 'mnievafra@gmail.com',
  website: 'https://marcelofra.github.io/perfil/',
  summary:
    'Full Stack Developer con mas de cinco anos de experiencia creando aplicaciones web empresariales con C# .NET, React, Angular, JavaScript y SQL Server.',
}

const projects = [
  {
    serial: 'SA-001-DELTA',
    title: 'Enterprise SaaS Platform',
    company: 'Createc Solutions',
    description:
      'Desarrollo de soluciones empresariales y microsservicios para facturacion electronica, POS, inventario y reportes, usando .NET, React y arquitecturas escalables.',
    tech: ['C#', 'ASP.NET Core', 'React', 'Angular', 'Microservices', 'Docker'],
    highlights: [
      'Diseñé y desarrollé una plataforma SaaS empresarial para facturación electrónica y gestión de inventario.',
      'Implementé microservicios y Vibe Coding para acelerar el desarrollo y mejorar la mantenibilidad.',
      'Integré APIs REST, SQL Server y despliegues productivos con automatización de pipeline.',
    ],
  },
  {
    serial: 'QE-002-GAMMA',
    title: 'Banking Web Services',
    company: 'Softtek',
    description:
      'Creacion y actualizacion de servicios web .NET Core para banca, soporte de aplicaciones React JS y validacion con Postman y SoapUI.',
    tech: ['.NET Core', 'React JS', 'Postman', 'SoapUI'],
    highlights: [
      'Implementé servicios web seguros para entornos bancarios con .NET Core y pruebas exhaustivas con Postman.',
      'Soporté aplicaciones React JS de clientes de banca, manteniendo estabilidad y calidad en producción.',
    ],
  },
  {
    serial: 'NE-003-OMEGA',
    title: 'BBVA Digital Apps',
    company: 'Neoris',
    description:
      'Aplicaciones internas, reportes de facturacion y mejoras en GLOMO Mobile usando Angular, Cells, Lit Element y Bootstrap.',
    tech: ['Angular', 'Cells', 'Lit Element', 'Bootstrap'],
    highlights: [
      'Desarrollé mejoras de UI/UX para aplicaciones internas y móviles de BBVA.',
      'Aumenté la usabilidad con componentes Angular y soluciones de reporting eficientes.',
    ],
  },
]

const skills = [
  'C#',
  'ASP.NET Core',
  '.NET',
  'APIs REST',
  'React',
  'Angular',
  'JavaScript',
  'TypeScript',
  'SQL Server',
  'Docker',
  'Git',
  'Jira',
  'SCRUM',
  'Codex',
  'Stitch',
]

const experience = [
  {
    company: 'Createc Solutions',
    role: 'Full Stack Developer',
    period: 'Feb. 2024 - Actualidad',
    description:
      'Desarrollo de aplicaciones web empresariales, soluciones SaaS, APIs REST y automatizacion con IA aplicada al prototipado UI.',
  },
  {
    company: 'Softtek',
    role: 'Desarrollador Full Stack',
    period: 'May. 2024 - Oct. 2025',
    description:
      'Servicios web .NET Core para Banco Pichincha y soporte de aplicaciones React JS para Pacifico.',
  },
  {
    company: 'Neoris',
    role: 'Desarrollador Front End',
    period: 'Set. 2022 - Dic. 2023',
    description:
      'Time Reporting, reportes de facturacion para BBVA Colombia y mejoras en GLOMO Mobile bajo SCRUM.',
  },
  {
    company: 'Baufest',
    role: 'Desarrollador Full Stack',
    period: 'Set. 2020 - Set. 2022',
    description:
      'Mantenimiento, mejoras, documentacion y gestion de incidencias para clientes de logistica, transporte y energia.',
  },
  {
    company: 'ITDATA',
    role: 'Programador Junior',
    period: 'Set. 2018 - Dic. 2019',
    description:
      'Desarrollo frontend de Cobro Simple para Interbank Peru y mejoras en aplicaciones web internas.',
  },
]

const education = [
  'Ingenieria de Sistemas - Universidad Peruana de Ciencias Aplicadas (UPC), 2021 - 2026',
  'Computacion e Informatica - CIBERTEC, titulado y quinto superior',
  'Ingles Nivel 2 - UPC Idiomas',
]

const certifications = [
  'Scrum Foundation Professional Certificate - Certiprof',
  'Azure DevOps - Galaxy Training',
  'Microservicios - Galaxy Training',
  'Angular - Platzi',
  'Angular: Unit Testing - Platzi',
  'React - Udemy',
]

function App() {
  const [pointer, setPointer] = useState({ x: 50, y: 38 })
  const [ripples, setRipples] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)

  const handlePointerMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 100
    const y = (event.clientY / window.innerHeight) * 100
    setPointer({
      x,
      y,
      shiftX: (x - 50) * 0.16,
      shiftY: (y - 38) * 0.14,
    })
  }

  const handlePointerDown = (event) => {
    const ripple = {
      id: crypto.randomUUID(),
      x: event.clientX,
      y: event.clientY,
    }

    setRipples((items) => [...items.slice(-5), ripple])
    window.setTimeout(() => {
      setRipples((items) => items.filter((item) => item.id !== ripple.id))
    }, 900)
  }

  return (
    <main
      className="space-shell"
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      style={{
        '--pointer-x': `${pointer.x}%`,
        '--pointer-y': `${pointer.y}%`,
        '--hero-shift-x': `${pointer.shiftX || 0}px`,
        '--hero-shift-y': `${pointer.shiftY || 0}px`,
      }}
    >
      {ripples.map((ripple) => (
        <span
          className="click-ripple"
          key={ripple.id}
          style={{
            '--ripple-x': `${ripple.x}px`,
            '--ripple-y': `${ripple.y}px`,
          }}
        ></span>
      ))}
      <div className="cursor-reactor" aria-hidden="true">
        <span></span>
        <span></span>
      </div>
      <div className="data-rain" aria-hidden="true">
        {Array.from({ length: 14 }, (_, index) => (
          <span key={index}>0101 / API / UI / SQL / .NET</span>
        ))}
      </div>
      <div className="diagonal-beams" aria-hidden="true">
        <span></span>
        <span></span>
      </div>
      <div className="light-grid" aria-hidden="true"></div>
      <div className="light-runners" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`site-nav ${menuOpen ? 'menu-open' : ''}`} aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          {profile.name}
        </a>
        <button
          type="button"
          className="nav-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="nav-links">
          <a className="active" href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#studies" onClick={() => setMenuOpen(false)}>
            Studies
          </a>
          <a href="#certifications" onClick={() => setMenuOpen(false)}>
            Certifications
          </a>
        </div>
        <a
          className="nav-cta"
          href="https://wa.me/51922453832?text=Hola%20Marcelo%2C%20quiero%20consultar%20sobre%20tu%20portafolio"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Contact me
        </a>
      </nav>

      <section className="hero-section" id="home">
        <div className="orbital-card">
          <div className="mini-logo">M|N</div>
          <span>{profile.role}</span>
        </div>
        <div className="hero-content">
          <p className="kicker">01 // Origin</p>
          <h1>
            I am
            <span>{profile.name}</span>
          </h1>
          <h2>{profile.role}</h2>
          <p>{profile.summary}</p>
          <a className="button primary" href="#work">
            Explore my universe
          </a>
        </div>
        <div className="hero-hud" aria-hidden="true">
          <span className="hud-ring ring-a"></span>
          <span className="hud-ring ring-b"></span>
          <span className="hud-node node-a"></span>
          <span className="hud-node node-b"></span>
          <span className="hud-line line-a"></span>
          <span className="hud-line line-b"></span>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="portrait-card">
          <img src={profilePhoto} alt="Perfil de Marcelo Nieva" onError={(event) => { event.currentTarget.src = fallbackProfilePhoto }} />
        </div>
        <div className="section-copy">
          <p className="kicker">02 // About</p>
          <h2>
            Construyendo <span>soluciones digitales</span>
          </h2>
          <div className="glass-panel">
            <p>
              Trabajo en el desarrollo, mantenimiento y evolucion de
              aplicaciones empresariales, participando desde el analisis hasta
              el despliegue en produccion.
            </p>
            <p>
              Mi stack combina backend .NET, frontend moderno, SQL Server,
              integracion de servicios, SCRUM, Git y herramientas de IA como
              Codex y Stitch para acelerar el prototipado.
            </p>
            <div className="about-detail-list">
              <p className="about-detail-title">Perfil profesional</p>
              <ul>
                <li>5+ años creando soluciones empresariales y servicios bancarios.</li>
                <li>Experiencia en arquitecturas .NET, soluciones front-end modernas y datos.</li>
                <li>Capacidad para liderar entregas, trabajar con equipos SCRUM y cumplir objetivos.</li>
              </ul>
            </div>
          </div>
          <div className="tech-pill-list">
            <span>React</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>JavaScript (ES6+)</span>
            <span>UI/UX Design</span>
          </div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="kicker">03 // Missions</p>
            <h2>Featured Work</h2>
          </div>
          <a href={profile.website} target="_blank">
            View profile
          </a>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-body">
                <div className="project-card-head">
                  <div>
                    <p className="project-company">{project.company}</p>
                    <p className="project-dependencies">SYSTEM DEPENDENCIES</p>
                  </div>
                </div>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
                <ul className="project-highlights">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href="#contact">INITIATE_DEMO</a>
                  <a href="#contact">SOURCE_CODE</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section timeline-section">
        <div className="section-heading">
          <div>
            <p className="kicker">04 // Logbook</p>
            <h2>Experience</h2>
          </div>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <p>{item.period}</p>
              <h3>{item.company}</h3>
              <strong>{item.role}</strong>
              <span>{item.description}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section credentials-section" id="studies">
        <div>
          <p className="kicker">05 // Studies</p>
          <h2>Studies</h2>
          <ul>
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div id="certifications">
          <p className="kicker">06 // Certifications</p>
          <h2>Certifications</h2>
          <ul>
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="kicker">07 // Contact</p>
        <h2>Ready to build the next interface?</h2>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replaceAll(' ', '')}`}>{profile.phone}</a>
          <a href={profile.website} target="_blank">
            Web profile
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
