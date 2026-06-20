import { useState } from "react";

export default function Skills() {
  const [show, setShow] = useState(false);

  return (
    <section id="skills">
      <h2>Skills</h2>
      <p className="skills-hint">Click a category to explore</p>

      <div className="skills-grid">
        <div className="skill-card" onClick={() => setShow(true)}>
          <h3>Technical Skills</h3>

          <div className="skill-level">
            <span>Python</span>
            <div className="level-bar">
              <div
                className="level-fill"
                style={{ width: show ? "85%" : "0%" }}
              />
            </div>
          </div>

          <div className="skill-level">
            <span>Machine Learning</span>
            <div className="level-bar">
              <div
                className="level-fill"
                style={{ width: show ? "75%" : "0%" }}
              />
            </div>
          </div>

          <div className="skill-level">
            <span>NLP</span>
            <div className="level-bar">
              <div
                className="level-fill"
                style={{ width: show ? "70%" : "0%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
