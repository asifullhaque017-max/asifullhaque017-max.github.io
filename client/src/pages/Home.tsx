import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  Download,
  ExternalLink,
  Facebook,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

const linkedInUrl = "https://www.linkedin.com/in/asifullhaque";
const cvUrl = "/manus-storage/ASIF_ULLLHAQUE_Resume(3)_3225d389.docx";
const blogUrl = "https://asifullhaque.blogspot.com";
const facebookUrl = "https://www.facebook.com/graphene2001";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    number: "01",
    title: "Search & SEO",
    description: "Improving visibility through structured, research-led search work.",
    skills: [
      "Search Engine Optimization (SEO)",
      "Keyword Research",
      "SEO Audits",
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO",
      "Backlinks",
      "YouTube SEO",
      "Website Ranking",
    ],
  },
  {
    number: "02",
    title: "Growth & Outreach",
    description: "Connecting content, campaigns, and outreach to growth goals.",
    skills: [
      "Digital Marketing",
      "Lead Generation",
      "Email Marketing",
      "Bulk Email",
      "Email Verification",
      "Email Campaigns",
      "Social Media Marketing",
      "Web Scraping",
      "Content Marketing",
      "Branding",
      "Marketing Strategy",
      "Online Marketing",
      "Data-driven approach",
    ],
  },
  {
    number: "03",
    title: "Design & Productivity",
    description: "Creating clear visual communication with familiar productivity tools.",
    skills: [
      "Canva",
      "Card Design",
      "Banner Design",
      "Motion Graphics",
      "Infographics",
      "Graphic Design",
      "Visual Content",
      "MS Word",
      "MS Excel",
      "MS PowerPoint",
    ],
  },
];

const education = [
  {
    period: "2022 — current",
    title: "BSc (Honours): Mathematics",
    institution: "National University Of Bangladesh",
  },
];

function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading reveal ${light ? "section-heading-light" : ""}`}>
      <div className="eyebrow"><span />{eyebrow}</div>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <div className="nav-wrap">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Asif Ull Haque home">
            <span className="brand-mark">A</span>
            <span className="brand-name">Asif Ull Haque</span>
          </a>

          <nav className={`desktop-nav ${menuOpen ? "mobile-nav-open" : ""}`} aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="nav-linkedin" href={linkedInUrl} target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile">
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a className="nav-cv" href={cvUrl} download="Asif-Ull-Haque-CV.docx">
              CV <Download size={15} />
            </a>
            <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />
          <div className="hero-content container">
            <div className="hero-copy">
              <div className="hero-kicker reveal"><Sparkles size={15} /> Digital marketing, search & social</div>
              <h1 className="reveal">Make the right<br /><em>signal</em> louder.</h1>
              <p className="hero-description reveal">I’m Asif Ull Haque, an experienced Digital Marketer, SEO Expert, Social Media Manager, and Canva Designer focused on brand growth through creative, data-driven marketing strategies.</p>
              <div className="hero-actions reveal">
                <a className="button button-lime" href="#contact">Let’s connect <ArrowUpRight size={17} /></a>
                <a className="button button-ghost-light" href={cvUrl} download="Asif-Ull-Haque-CV.docx">Download CV <Download size={16} /></a>
              </div>
              <div className="hero-meta reveal">
                <span><MapPin size={15} /> Naogaon District, Rajshahi, Bangladesh</span>
                <span className="meta-divider" />
                <span><Globe2 size={15} /> Bengali · English</span>
              </div>
            </div>
            <div className="hero-visual reveal">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="portrait-frame">
                <img src="/manus-storage/image1_78af4ea1.png" alt="Asif Ull Haque" />
                <div className="portrait-note">OPEN TO<br /><strong>WORK</strong></div>
              </div>
              <div className="hero-stamp"><span>SEO</span><span>•</span><span>CONTENT</span><span>•</span><span>SOCIAL</span></div>
            </div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><ArrowDown size={16} /> <span>Scroll to explore</span></a>
        </section>

        <section className="intro-band">
          <div className="container intro-band-inner reveal">
            <p className="intro-label">01 / Professional introduction</p>
            <p className="intro-statement">Skilled in improving SEO rankings, creating engaging content, and managing social media campaigns.</p>
            <div className="intro-line" />
            <a href="#about" className="text-link">Learn more about me <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-layout">
            <SectionHeading eyebrow="About me" title={<>The work behind<br /><span>the signal.</span></>} intro="A practical, growth-minded approach to digital marketing—grounded in clarity, consistency, and measurable progress." />
            <div className="about-copy reveal">
              <p className="lead-paragraph">My work brings together search, social, outreach, and visual content to help ideas reach the people they are meant for.</p>
              <p>With a focus on digital marketing and SEO, I work across the details that shape online visibility—from keyword research and audits to campaigns, content, and social media management. I also use Canva to create cards, banners, motion graphics, and infographics that keep communication clear.</p>
              <p>My approach is creative and data-driven, with a practical focus on building brand awareness and delivering measurable results.</p>
              <div className="about-signoff"><span className="signature">AUH</span><span>Asif Ull Haque<br /><small>Digital Marketer & SEO Expert</small></span></div>
            </div>
          </div>
        </section>

        <section className="section dark-section" id="experience">
          <div className="container">
            <SectionHeading eyebrow="Work experience" title={<>Experience that<br /><span>meets people.</span></>} intro="One verified role from the source materials, presented with the responsibilities described in the CV." light />
            <div className="experience-card reveal">
              <div className="experience-period">Mar — Apr<br /><strong>2024</strong></div>
              <div className="experience-main">
                <div className="experience-title-row"><div><h3>Sales Executive</h3><p>Natai Clothing Brand · Naogaon</p></div><span className="experience-index">01</span></div>
                <div className="experience-details">
                  <p>Promoted and sold clothing products, built strong customer relationships, and exceeded sales targets.</p>
                  <p>Focused on personalized shopping experiences, brand awareness, and increasing revenue through strategic product recommendations and exceptional service.</p>
                </div>
              </div>
            </div>
            <div className="experience-footnote reveal"><Check size={16} /> Experience details are shown only where they are explicitly supported by the CV.</div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <SectionHeading eyebrow="Core skills" title={<>A toolkit for<br /><span>moving forward.</span></>} intro="A broad, verified mix of search, growth, campaign, and visual communication skills." />
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-card reveal" key={group.number}>
                  <div className="skill-card-top"><span>{group.number}</span><ArrowUpRight size={18} /></div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <div className="skill-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="container education-layout">
            <SectionHeading eyebrow="Education" title={<>Building a<br /><span>strong foundation.</span></>} intro="Academic details verified in the CV." />
            <div className="education-list">
              {education.map((item, index) => (
                <article className="education-item reveal" key={item.title}>
                  <div className="education-count">0{index + 1}</div>
                  <div className="education-body"><p className="education-period">{item.period}</p><h3>{item.title}</h3><p>{item.institution}</p></div>
                  <ChevronRight className="education-arrow" size={20} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section learning-section">
          <div className="container learning-layout">
            <div className="learning-card reveal">
              <div className="learning-icon"><Sparkles size={21} /></div>
              <p className="eyebrow eyebrow-dark"><span />Certification</p>
              <h2>A Crash Course<br /><em>in Data Science</em></h2>
              <p className="learning-provider">United Latino Students Association</p>
              <div className="learning-footer"><span>Verified on LinkedIn</span><ExternalLink size={16} /></div>
            </div>
            <div className="learning-copy reveal">
              <p className="eyebrow"><span />Continued learning</p>
              <h2>Curious by<br /><span>default.</span></h2>
              <p>Learning stays close to the work. The verified profile lists a data-science course alongside an expanding toolkit across marketing, search, social media, and design.</p>
              <a className="text-link" href={linkedInUrl} target="_blank" rel="noreferrer">View LinkedIn profile <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy reveal">
              <p className="eyebrow eyebrow-dark"><span />Contact</p>
              <h2>Let’s make your<br /><em>next move</em> visible.</h2>
              <p>For digital marketing, SEO, social media, or visual content conversations, reach out directly.</p>
              <a className="button button-dark" href="mailto:asifullhaque2001@gmail.com?subject=Portfolio%20enquiry%20for%20Asif%20Ull%20Haque">Start a conversation <Mail size={17} /></a>
            </div>
            <div className="contact-details reveal">
              <a className="contact-row" href="mailto:asifullhaque2001@gmail.com"><span className="contact-icon"><Mail size={18} /></span><span><small>Email</small>asifullhaque2001@gmail.com</span><ArrowUpRight size={17} /></a>
              <a className="contact-row" href="tel:+8801768264069"><span className="contact-icon"><Phone size={18} /></span><span><small>Phone</small>+880 1768 264069</span><ArrowUpRight size={17} /></a>
              <div className="contact-row"><span className="contact-icon"><MapPin size={18} /></span><span><small>Based in</small>Naogaon, 6500 Rajshahi</span></div>
              <a className="contact-row" href={blogUrl} target="_blank" rel="noreferrer"><span className="contact-icon"><Globe2 size={18} /></span><span><small>Blog</small>asifullhaque.blogspot.com</span><ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner reveal">
            <p className="eyebrow"><span />Keep in touch</p>
            <h2>Ready when<br /><em>you are.</em></h2>
            <div className="final-cta-actions"><a className="button button-lime" href={linkedInUrl} target="_blank" rel="noreferrer">Connect on LinkedIn <Linkedin size={17} /></a><a className="button button-ghost-light" href={cvUrl} download="Asif-Ull-Haque-CV.docx">Download CV <Download size={16} /></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#top"><span className="brand-mark">A</span><span className="brand-name">Asif Ull Haque</span></a>
          <p>Digital marketing · SEO · social media · design</p>
          <div className="footer-links"><a href={linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={17} /></a><a href={blogUrl} target="_blank" rel="noreferrer" aria-label="Blog"><Globe2 size={17} /></a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Asif Ull Haque</span><span>Built for meaningful work.</span></div>
      </footer>
    </div>
  );
}

export default Home;
