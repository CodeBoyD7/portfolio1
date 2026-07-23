import { useMemo, useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

const profile = {
  name: 'Vasu Kumar',
  role: 'React Frontend Developer',
  email: 'hello@vasu.dev',
  location: 'India, building for global teams',
  summary:
    'I design and build fast, polished web experiences with React, product thinking, and clean frontend architecture.',
  availability: 'Available for select product and portfolio builds',
}

const navItems = ['Work', 'Services', 'Process', 'Contact']
const cubeFaces = ['React', 'UX', 'CSS', 'JS', 'Vite', 'UI']

const stats = [
  { value: '28+', label: 'Interfaces shipped' },
  { value: '94%', label: 'Lighthouse targets' },
  { value: '6 yrs', label: 'Frontend craft' },
]

const services = [
  {
    title: 'Product Frontends',
    detail:
      'Dashboards, SaaS tools, and customer-facing flows built with resilient React components.',
  },
  {
    title: 'Portfolio Systems',
    detail:
      'Personal brands with strong storytelling, proof-driven case studies, and responsive polish.',
  },
  {
    title: 'UI Engineering',
    detail:
      'Design systems, motion, accessibility passes, and performance cleanup for existing apps.',
  },
]

const projects = [
  {
    title: 'Atlas CRM Console',
    type: 'SaaS Dashboard',
    year: '2026',
    result: '41% faster task completion',
    summary:
      'A dense operator workspace with saved views, revenue signals, and keyboard-first account review.',
    tags: ['React', 'Data UI', 'Design System'],
  },
  {
    title: 'Northstar Portfolio',
    type: 'Personal Brand',
    year: '2025',
    result: '3.8x more inbound leads',
    summary:
      'A cinematic portfolio system that turns project work into measurable business proof.',
    tags: ['Vite', 'Motion', 'Content Strategy'],
  },
  {
    title: 'Pulse Commerce Lab',
    type: 'E-commerce',
    year: '2025',
    result: '22% higher checkout conversion',
    summary:
      'A conversion-focused storefront with crisp product discovery, comparison, and checkout states.',
    tags: ['React', 'UX Audit', 'Performance'],
  },
]

const process = [
  'Map the outcome, audience, and proof that matters.',
  'Prototype the core flow with real content and responsive states.',
  'Ship clean React code, test the edge cases, and tune the experience.',
]

const skills = [
  'React',
  'Vite',
  'JavaScript',
  'HTML',
  'CSS',
  'Accessibility',
  'Responsive UI',
  'Performance',
  'Design Systems',
  'UX Writing',
  'Product Thinking',
  'Git',
]

const experience = [
  {
    role: 'Independent Frontend Developer',
    period: '2024 - Now',
    detail:
      'Building refined React sites, portfolios, and product interfaces for founders and small teams.',
  },
  {
    role: 'UI Engineer',
    period: '2021 - 2024',
    detail:
      'Delivered reusable interface systems, dashboard workflows, and accessibility improvements.',
  },
  {
    role: 'Web Developer',
    period: '2019 - 2021',
    detail:
      'Created responsive marketing pages, landing pages, and internal web tools.',
  },
]

const testimonials = [
  {
    quote:
      'Vasu turned a loose idea into a frontend that felt premium, focused, and ready for real users.',
    byline: 'Founder, B2B workflow startup',
  },
  {
    quote:
      'The work was organized, fast, and sharp. Every screen had a reason behind it.',
    byline: 'Product Lead, SaaS team',
  },
]

function App() {
  const [contactStatus, setContactStatus] = useState('Ready when you are.')
  const [visualTilt, setVisualTilt] = useState({
    '--tilt-x': '-10deg',
    '--tilt-y': '12deg',
  })

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent('Portfolio project inquiry')
    const body = encodeURIComponent(
      'Hi Vasu,\n\nI would like to discuss a React portfolio or frontend project.\n\nProject goals:\nTimeline:\nBudget range:\n',
    )

    return `mailto:${profile.email}?subject=${subject}&body=${body}`
  }, [])

  function handleContactSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') || 'New inquiry'
    const email = formData.get('email') || 'No email provided'
    const message = formData.get('message') || 'No message provided'
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )

    setContactStatus('Opening your email app with the project details.')
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  function handleVisualMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const pointerX = (event.clientX - bounds.left) / bounds.width - 0.5
    const pointerY = (event.clientY - bounds.top) / bounds.height - 0.5

    setVisualTilt({
      '--tilt-x': `${-10 - pointerY * 18}deg`,
      '--tilt-y': `${12 + pointerX * 22}deg`,
    })
  }

  function resetVisualTilt() {
    setVisualTilt({
      '--tilt-x': '-10deg',
      '--tilt-y': '12deg',
    })
  }

  return (
    <main>
      <header className="site-header" aria-label="Primary">
        <a className="brand" href="#top" aria-label={`${profile.name} home`}>
          <span className="brand-mark">VK</span>
          <span>{profile.name}</span>
        </a>

        <nav className="nav-links" aria-label="Site navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <a className="header-action" href={mailtoHref}>
          Start a project
        </a>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{profile.availability}</p>
            <h1>React portfolios and product interfaces that look expensive and load fast.</h1>
            <p className="hero-lede">{profile.summary}</p>

            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href="#work">
                View work
              </a>
              <a className="button button-secondary" href={mailtoHref}>
                Email me
              </a>
            </div>

            <div className="meta-strip" aria-label="Profile facts">
              <span>{profile.role}</span>
              <span>{profile.location}</span>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Portfolio signature visual"
            onPointerMove={handleVisualMove}
            onPointerLeave={resetVisualTilt}
          >
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="scene-3d" style={visualTilt} aria-hidden="true">
              <div className="depth-slab slab-one"></div>
              <div className="depth-slab slab-two"></div>
              <div className="code-cube">
                {cubeFaces.map((face) => (
                  <span className={`cube-face cube-${face.toLowerCase()}`} key={face}>
                    {face}
                  </span>
                ))}
              </div>
            </div>
            <img src={heroImg} alt="" className="hero-asset" />
            <div className="signal-panel">
              <span>Performance first</span>
              <strong>0.9s</strong>
              <small>target first paint</small>
            </div>
            <div className="stack-panel">
              {['React', 'UX', 'CSS'].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Impact metrics">
        {stats.map((item) => (
          <div key={item.label} className="stat-item">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Case studies shaped around outcomes, not decoration.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-index">0{index + 1}</div>
              <div>
                <p className="project-type">
                  {project.type} / {project.year}
                </p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="project-footer">
                <strong>{project.result}</strong>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Frontend execution for people who care about first impressions.</h2>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-heading">
          <p className="eyebrow">Process</p>
          <h2>Sharp enough to move fast, structured enough to avoid surprises.</h2>
        </div>

        <ol className="process-list">
          {process.map((item, index) => (
            <li key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section expertise-section">
        <div className="section-heading">
          <p className="eyebrow">Expertise</p>
          <h2>Tools and habits that keep interfaces reliable.</h2>
        </div>

        <div className="skills-cloud" aria-label="Skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section resume-section">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Focused on frontend work that survives real production use.</h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.role}>
              <span>{item.period}</span>
              <div>
                <h3>{item.role}</h3>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial-band" aria-label="Client notes">
        {testimonials.map((item) => (
          <blockquote key={item.byline}>
            <p>{item.quote}</p>
            <cite>{item.byline}</cite>
          </blockquote>
        ))}
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>Bring the idea. I will shape the interface.</h2>
          <p>
            Share the goal, timeline, and business context. I will reply with a
            practical scope and the clearest next step.
          </p>
          <a className="email-link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>

        <form className="contact-form" onSubmit={handleContactSubmit}>
          <label>
            Name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Project
            <textarea
              name="message"
              placeholder="What are you building?"
              rows="5"
              required
            ></textarea>
          </label>
          <button className="button button-primary" type="submit">
            Draft email
          </button>
          <p className="form-status" aria-live="polite">
            {contactStatus}
          </p>
        </form>
      </section>
    </main>
  )
}

export default App
