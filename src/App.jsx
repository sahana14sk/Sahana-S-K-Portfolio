import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Events from "./pages/About";
import Certificates from "./pages/certification";
import ProjectsPage from "./pages/HProjects";
import Photography from "./pages/photography";
import Hackathons from "./pages/Hackathons";
import Projects from "./pages/Projects";
import Leadership from "./pages/LeadershipTemp";
import { Mail, Linkedin, Github } from "lucide-react";


function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const isSkillsSubPage =
  ["/photography", "/hackathons", "/leadership"].includes(
    location.pathname
  );


  /* ---------- STATE ---------- */
  const [activeSkill, setActiveSkill] = useState(null);
  const [showTechLevels, setShowTechLevels] = useState(false);
  
  /* ---------- SCROLL REVEAL ---------- */
  
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, [location.pathname]);

  /* ---------- NAVBAR SCROLL-SPY (HOME PAGE ONLY) ---------- */
 const handleNavClick = (sectionId) => {
  if (location.pathname !== "/") {
    navigate("/");

    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 200);
  } else {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  }
};

  useEffect(() => {
  const onScroll = () => {
    if (
  location.pathname === "/hackathons" ||
  location.pathname === "/leadership" ||
  location.pathname === "/photography"
) {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active");

    if (link.dataset.nav === "skills") {
      link.classList.add("active");
    }
  });

  return;
}
    console.log("ONSCROLL RUNNING", location.pathname);
    // Force Skills highlight on sub-pages


    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");
    let current = "";
    
    // Home = top of page
    if (window.scrollY < 150 && location.pathname === "/") {
      current = "home";
    } else {
      sections.forEach(section => {
        const top = section.offsetTop - 160;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          current = section.id;
        }
      });
    }

if (location.pathname !== "/") {
  return;
}

navLinks.forEach(link => {
  link.classList.remove("active");

  if (link.dataset.nav === current) {
    link.classList.add("active");
  }
});
  };

  window.addEventListener("scroll", onScroll);
  onScroll(); // run once on load




  return () => window.removeEventListener("scroll", onScroll);
}, [location.pathname]);


  /* ---------- QUOTES ---------- */
  const quotes = [
    "Still learning. Still building.",
    "Turning curiosity into code.",
    "Learning never stops.",
    "Building today for a smarter tomorrow.",
    "Exploring intelligence, one model at a time.",
    "Turning ideas into intelligent solutions.",
    "Continuous learning fuels continuous innovation.",
    "Creating technology with purpose and impact."
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <>
      {/* ---------- NAVBAR ---------- */}
 
 
 <div className="navbar">
<a
  href="/"
  data-nav="home"
  className="nav-link"
>
  Home
</a>

<a
  data-nav="about"
  className="nav-link"
  onClick={() => handleNavClick("about")}
>
  About
</a>

<a
  data-nav="skills"
  className={`nav-link ${isSkillsSubPage ? "active" : ""}`}
  onClick={() => handleNavClick("skills")}
>
  Skills
</a>

<a
  data-nav="projects"
  className="nav-link"
  onClick={() => handleNavClick("projects")}
>
  Projects
</a>

<a
  data-nav="contact"
  className="nav-link"
  onClick={() => handleNavClick("contact")}
>
  Contact
</a>
</div>

      <Routes>
        <Route path="/leadership" element={<Leadership />} />
        {/* ================= HOME PAGE ================= */}
        <Route
          path="/"
          element={
            <>
              {/* ---------- HERO ---------- */}
              <div className="hero" id="home">
                <div className="hero-left">
                  <h1>Hi, I'm SAHANA S K</h1>
                  <p>A final-year Artificial Intelligence & Machine Learning student.
</p>
                  
                  <a href="/SahanaSK_Resume.pdf" download>
                    <button className="resume-float-btn">
                      Download Resume
                    </button>
                  </a>
                </div>

                <div className="hero-right">
                  <img src="/profile.jpg" alt="Profile" />
                </div>
              </div>

              {/* ---------- ABOUT ---------- */}
              <section id="about" className="reveal">
                <h2>Who I Am</h2>
                <p>
                  I am a final-year Artificial Intelligence & Machine Learning student passionate about creating technology that makes a difference.
My journey includes building AI-powered applications, participating in hackathons, and gaining industry exposure through internships.
I enjoy solving complex problems, learning new technologies, and turning ideas into meaningful solutions.
With a strong foundation in AI, software development, and data-driven thinking, I continuously strive to improve and innovate.
I am currently looking for opportunities to contribute, learn, and grow as a technology professional.



                  
                </p>
                <a href="#skills" className="explore-more">
                  Explore more ↓
                </a>
              </section>

              {/* ---------- SKILLS ---------- */}
              <section
                id="skills"
                className="reveal skills-wrapper"
                onClick={() => setActiveSkill(null)}
              >
                <h2>Skills</h2>
                <p className="skills-hint">Click a category to explore</p>

                <div className={`skills-grid ${activeSkill ? "has-active" : ""}`}>
                  {/* TECH */}
                  <div
                    className={`skill-card ${activeSkill === "tech" ? "active" : ""}`}
                    onClick={e => {
                      e.stopPropagation();
                      setActiveSkill("tech");
                      setShowTechLevels(true);
                    }}
                  >
                    <h3>Technical Skills</h3>

                    {[
                      ["Python", "85%"],
                      ["Machine Learning", "75%"],
                      ["NLP", "50%"],
                      ["Exploratory Data Analysis", "78%"],
                      ["Web Technologies", "65%"]
                    ].map(([name, value]) => (
                      <div className="skill-level" key={name}>
                        <span>{name}</span>
                        <div className="level-bar">
                          <div
                            className="level-fill"
                            style={{ width: showTechLevels ? value : "0%" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* SOFT */}
                  <div
                    className={`skill-card ${activeSkill === "soft" ? "active" : ""}`}
                    onClick={e => {
                      e.stopPropagation();
                      setActiveSkill("soft");
                    }}
                  >
                    <h3>Soft Skills</h3>
                    <div class="skill-tags">
  <span>Problem Solving</span>
  <span>Communication</span>
  <span>Teamwork</span>
  <span>Leadership</span>
  <span>Time Management</span>
</div>
                  </div>

                  {/* TOOLS */}
                  <div
                    className={`skill-card ${activeSkill === "tools" ? "active" : ""}`}
                    onClick={e => {
                      e.stopPropagation();
                      setActiveSkill("tools");
                    }}
                  >
                    <h3>Tools</h3>
<div class="skill-tags">
   <span>Git & GitHub</span>
  <span>VS Code</span>
  <span>Postman</span>
  <span>Jupyter Notebook</span>
  <span>Figma</span>
</div>
                  </div>

                  {/* EXTRA */}
                  <div
                    className={`skill-card ${activeSkill === "extra" ? "active" : ""}`}
                    onClick={e => {
                      e.stopPropagation();
                      setActiveSkill("extra");
                    }}
                  >
                    <h3>Beyond Classroom</h3>
                    <ul>
  <li
    className="clickable-sub"
    onClick={() => navigate("/hackathons")}
  >
    🏆 Hackathons
    <span className="arrow">→</span>
  </li>



  <li
    className="clickable-sub"
    onClick={() => navigate("/leadership")}
  >
     🤝 Leadership
    <span className="arrow">→</span>
  </li>

    <li
    className="clickable-sub"
    onClick={() => navigate("/photography")}
  >
    📷 Photography
    <span className="arrow">→</span>
  </li>
</ul>
                  </div>
                </div>
              </section>

              {/* ---------- PROJECTS ---------- */}
              <Projects/>




              {/* ---------- CONTACT ---------- */}


<section id="contact" className="reveal contact-wrapper">
  <h2>Contact</h2>

  <div className="contact-card">

    <p className="contact-main">
      Let’s build something meaningful together 🤝
    </p>

    <p className="status">
      <span className="dot"></span>
      Seeking opportunities to build, learn, and make an impact.
    </p>

  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=44sahana.s.k@gmail.com&su=Portfolio%20Inquiry"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-contact"
>
  Let’s Connect →
</a>


    <div className="contact-links">
      <a
        href="https://linkedin.com/in/sahana-s-k-b59889316"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin size={20} />
      </a>

      <a
        href="https://github.com/sahana14sk"
        target="_blank"
        rel="noreferrer"
      >
        <Github size={20} />
      </a>
    </div>

    <div className="contact-divider"></div>

    <p className="contact-identity">
      {randomQuote}
    </p>

   

    <p className="contact-thanks">
      Thank you for visiting my portfolio.
    </p>

  </div>
</section>       
            </>
          }
        />

        {/* ---------- SUB PAGES ---------- */}
        <Route path="/events" element={<Events />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/hackathons" element={<Hackathons />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
