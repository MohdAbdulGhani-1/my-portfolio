import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Palette, Zap } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task manager with real-time updates, drag-and-drop interface, and team features.",
      technologies: ["React", "Firebase", "Material-UI"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location tracking, forecasts, and beautiful visualizations.",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      github: "#",
      demo: "#"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML/CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Python", "REST APIs"] },
    { category: "Database", items: ["PostgreSQL", "Firebase", "MySQL"] },
    { category: "Tools", items: ["Git", "Figma", "VS Code"] }
  ];

  return (
    <div style={styles.container}>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          overflow-x: hidden;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
        }

        @media (max-width: 768px) {
          .grid-projects {
            grid-template-columns: 1fr !important;
          }
          .grid-skills {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }

        @media (max-width: 480px) {
          .grid-skills {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav style={{
        ...styles.nav,
        background: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none'
      }}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>
            <Code size={28} color="#6366f1" />
            <span style={styles.logoText}>Portfolio</span>
          </div>

          {/* Desktop Menu */}
          <div style={styles.desktopMenu} className="desktop-menu">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  ...styles.navLink,
                  color: activeSection === item.toLowerCase() ? '#6366f1' : '#cbd5e1'
                }}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            style={styles.mobileMenuBtn}
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={styles.mobileMenu}>
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={styles.mobileNavLink}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroContent} className="animate-in">
          <div style={styles.herobadge}>
            <Zap size={16} />
            <span>Available for work</span>
          </div>
          <h1 style={styles.heroTitle}>
            Hi, I'm <span style={styles.gradientText}>Your Name</span>
          </h1>
          <h2 style={styles.heroSubtitle}>Full Stack Developer</h2>
          <p style={styles.heroDescription}>
            I build exceptional digital experiences that combine beautiful design with powerful functionality.
            Let's create something amazing together.
          </p>
          <div style={styles.heroCTA}>
            <button
              onClick={() => scrollToSection('projects')}
              style={styles.primaryBtn}
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              style={styles.secondaryBtn}
            >
              Get In Touch
            </button>
          </div>
          <div style={styles.socialLinks}>
            <a href="https://github.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" style={styles.socialLink} target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:your.email@example.com" style={styles.socialLink}>
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <div style={styles.aboutContent}>
            <div style={styles.aboutText}>
              <p style={styles.paragraph}>
                I'm a passionate full-stack developer with a keen eye for creating intuitive and dynamic user experiences. 
                With several years of experience in web development, I specialize in building modern, scalable applications 
                using the latest technologies.
              </p>
              <p style={styles.paragraph}>
                My journey in tech started with a curiosity about how things work, which evolved into a deep passion for 
                creating solutions that make a difference. I believe in writing clean, maintainable code and staying updated 
                with industry best practices.
              </p>
              <p style={styles.paragraph}>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or 
                sharing knowledge with the developer community.
              </p>
            </div>
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>5+</div>
                <div style={styles.statLabel}>Years Experience</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>50+</div>
                <div style={styles.statLabel}>Projects Completed</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>30+</div>
                <div style={styles.statLabel}>Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.sectionAlt}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Skills & Technologies</h2>
          <div className="grid-skills" style={styles.skillsGrid}>
            {skills.map((skillGroup, index) => (
              <div key={index} style={styles.skillCard} className="card-hover">
                <div style={styles.skillIcon}>
                  {index === 0 && <Palette size={32} color="#6366f1" />}
                  {index === 1 && <Code size={32} color="#6366f1" />}
                  {index === 2 && <Zap size={32} color="#6366f1" />}
                  {index === 3 && <Github size={32} color="#6366f1" />}
                </div>
                <h3 style={styles.skillCategory}>{skillGroup.category}</h3>
                <div style={styles.skillTags}>
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} style={styles.skillTag}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
          <div className="grid-projects" style={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} style={styles.projectCard} className="card-hover">
                <div style={styles.projectHeader}>
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <div style={styles.projectLinks}>
                    <a href={project.github} style={styles.projectLink}>
                      <Github size={20} />
                    </a>
                    <a href={project.demo} style={styles.projectLink}>
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <p style={styles.projectDescription}>{project.description}</p>
                <div style={styles.techStack}>
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} style={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.sectionAlt}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Let's Work Together</h2>
          <div style={styles.contactContent}>
            <p style={styles.contactText}>
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <a href="mailto:your.email@example.com" style={styles.contactBtn}>
              <Mail size={20} />
              Send me an email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          © 2024 Your Name. Built with React & passion.
        </p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    color: '#f1f5f9',
  },
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease',
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1.25rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1.5rem',
    fontWeight: '700',
  },
  logoText: {
    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  desktopMenu: {
    display: 'flex',
    gap: '2rem',
  },
  navLink: {
    background: 'none',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    padding: '0.5rem',
  },
  mobileMenuBtn: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#f1f5f9',
    cursor: 'pointer',
    padding: '0.5rem',
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1.5rem 2rem',
    background: 'rgba(15, 23, 42, 0.98)',
    borderTop: '1px solid rgba(148, 163, 184, 0.1)',
  },
  mobileNavLink: {
    background: 'none',
    border: 'none',
    color: '#cbd5e1',
    fontSize: '1.125rem',
    fontWeight: '500',
    cursor: 'pointer',
    textAlign: 'left',
    padding: '0.5rem',
  },
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    maxWidth: '900px',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
  },
  herobage: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    background: 'rgba(99, 102, 241, 0.1)',
    border: '1px solid rgba(99, 102, 241, 0.3)',
    borderRadius: '50px',
    color: '#a5b4fc',
    fontSize: '0.875rem',
    marginBottom: '2rem',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
    fontWeight: '800',
    marginBottom: '1rem',
    lineHeight: '1.1',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    backgroundSize: '200% 200%',
    animation: 'gradient 3s ease infinite',
  },
  heroSubtitle: {
    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
    fontWeight: '600',
    color: '#cbd5e1',
    marginBottom: '1.5rem',
  },
  heroDescription: {
    fontSize: '1.25rem',
    color: '#94a3b8',
    marginBottom: '2.5rem',
    lineHeight: '1.8',
    maxWidth: '700px',
    margin: '0 auto 2.5rem',
  },
  heroCTA: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '3rem',
  },
  primaryBtn: {
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1.125rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
  },
  secondaryBtn: {
    padding: '1rem 2rem',
    background: 'transparent',
    color: '#6366f1',
    border: '2px solid #6366f1',
    borderRadius: '12px',
    fontSize: '1.125rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  socialLinks: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
  },
  socialLink: {
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(99, 102, 241, 0.1)',
    border: '1px solid rgba(99, 102, 241, 0.3)',
    borderRadius: '12px',
    color: '#6366f1',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
  section: {
    padding: '6rem 2rem',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  },
  sectionAlt: {
    padding: '6rem 2rem',
    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
  },
  sectionTitle: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '4rem',
    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  aboutContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    alignItems: 'start',
  },
  aboutText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  paragraph: {
    fontSize: '1.125rem',
    lineHeight: '1.8',
    color: '#cbd5e1',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '1.5rem',
  },
  statCard: {
    background: 'rgba(99, 102, 241, 0.1)',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    borderRadius: '16px',
    padding: '2rem 1rem',
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#6366f1',
    marginBottom: '0.5rem',
  },
  statLabel: {
    fontSize: '0.875rem',
    color: '#94a3b8',
  },
  skillsGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  skillCard: {
    background: 'rgba(15, 23, 42, 0.5)',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    borderRadius: '20px',
    padding: '2rem',
    backdropFilter: 'blur(10px)',
  },
  skillIcon: {
    marginBottom: '1.5rem',
  },
  skillCategory: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#f1f5f9',
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  skillTag: {
    padding: '0.5rem 1rem',
    background: 'rgba(99, 102, 241, 0.1)',
    border: '1px solid rgba(99, 102, 241, 0.3)',
    borderRadius: '8px',
    fontSize: '0.875rem',
    color: '#a5b4fc',
  },
  projectsGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
  },
  projectCard: {
    background: 'rgba(15, 23, 42, 0.5)',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    borderRadius: '20px',
    padding: '2rem',
    backdropFilter: 'blur(10px)',
  },
  projectHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    marginBottom: '1rem',
  },
  projectTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#f1f5f9',
  },
  projectLinks: {
    display: 'flex',
    gap: '0.75rem',
  },
  projectLink: {
    color: '#6366f1',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  projectDescription: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#94a3b8',
    marginBottom: '1.5rem',
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  techTag: {
    padding: '0.375rem 0.75rem',
    background: 'rgba(99, 102, 241, 0.1)',
    border: '1px solid rgba(99, 102, 241, 0.3)',
    borderRadius: '6px',
    fontSize: '0.75rem',
    color: '#a5b4fc',
  },
  contactContent: {
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  contactText: {
    fontSize: '1.25rem',
    lineHeight: '1.8',
    color: '#cbd5e1',
    marginBottom: '2rem',
  },
  contactBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1.125rem',
    fontWeight: '600',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
  },
  footer: {
    padding: '2rem',
    textAlign: 'center',
    background: 'rgba(15, 23, 42, 0.8)',
    borderTop: '1px solid rgba(148, 163, 184, 0.1)',
  },
  footerText: {
    color: '#64748b',
    fontSize: '0.875rem',
  },
};