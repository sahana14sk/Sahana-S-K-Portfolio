import { useState, useEffect } from "react";


export default function ProjectsSection() {
  const [open, setOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false); // ✅ added

  /* ✅ Lock background scroll when modal opens */
  useEffect(() => {
    if (open || showVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open, showVideo]);

  return (
    <section id="projects" className="reveal projects-wrapper">
      <h1 className="section-heading">
  Featured Project
</h1>
      <p className="projects-hint">
        Click the card to explore the full project case study
      </p>

      {/* ✅ PROJECT PREVIEW CARD */}
      <div className="project-preview">

<h2 className="project-name">
  ClassConnect
</h2>

<p className="project-tagline">
  AI-Powered Academic Assistant
</p>

<p className="preview-desc">
  Built an AI-powered academic assistant that enables intelligent PDF-based question answering, semantic search, and diagram retrieval from study materials.
</p>

        <div className="tech-stack">
          <span>React</span>
          <span>NLP</span>
          <span>FastAPI</span>
          <span>OpenAI GPT</span>
          <span>CLIP</span>
          <span>Semantic Search</span>
        </div>

        {/* PRIMARY ACTIONS */}
<div className="preview-actions">
<button 
  className="demo-btn"
  onClick={() => setShowVideo(true)}
>
  ▶ Demo
</button>

<button 
  className="secondary-btn"
  onClick={() => window.open("https://github.com/sahana14sk/ClassConnect", "_blank")}
>
  GitHub →
</button>
</div>

<button
  className="explore-link"
  onClick={() => setOpen(true)}
>
  Click to read full explanation ↗
</button>

       

      </div>

      {/* ✅ CASE STUDY MODAL */}
      {open && (
        <div className="project-modal" onClick={() => setOpen(false)}>
          <div
            className="project-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
<h2>ClassConnect — AI-Powered Academic Assistant</h2>

<p className="modal-text">
  ClassConnect is an intelligent academic assistant that enables students
  to interact with PDF-based study materials using natural language queries.
  By combining NLP and semantic search, the system delivers relevant answers
  and visual content directly from academic documents.
</p>

<h4>🎯 The Challenge</h4>
<p>
  Students often spend considerable time searching through lengthy lecture
  notes and study materials to find specific concepts, explanations, or
  diagrams.
</p>

<h4>💡 What I Built</h4>
<p>
  Developed an AI-powered document assistant that extracts content from PDFs,
  understands user intent, retrieves the most relevant information, and
  generates context-aware responses in real time.
</p>

<h4>🔑 Key Contributions</h4>
<ul>
  <li>PDF-based Question Answering.</li>
  <li>Semantic Search for Intelligent Information Retrieval.</li>
  <li>Intent-Aware Response Generation.</li>
  <li>Diagram & Image Retrieval from Study Materials.</li>
  <li>Interactive Streamlit-Based User Interface.</li>
</ul>

<h4>🛠 Technologies Used</h4>
<p>
  Python • Streamlit • OpenAI GPT • NLP • Semantic Search • CLIP •
  PyMuPDF • Vector Embeddings
</p>

<h4>🚀 Impact</h4>
<p>
  Transformed static academic documents into an interactive learning
  platform, enabling faster knowledge discovery and improving the overall
  learning experience for students.
</p>

            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              ✖
            </button>
          </div>
        </div>
      )}

      {/* ✅ VIDEO MODAL */}
{showVideo && (
  <div className="video-overlay" onClick={() => setShowVideo(false)}>
    
    <div 
      className="video-box"
      onClick={(e) => e.stopPropagation()}
    >
      <video controls autoPlay>
        <source src="/classconnect.mp4" type="video/mp4" />
      </video>

      <button 
        className="close-btn"
        onClick={() => setShowVideo(false)}
      >
        ✖ 
      </button>

    </div>

  </div>
)}

    </section>
  );
}