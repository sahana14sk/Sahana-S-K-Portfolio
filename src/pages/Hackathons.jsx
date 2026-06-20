import { useState } from "react";

export default function Hackathons() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
    <div className="hackathon-page">
      <div className="page-container">
        <h1>Hackathons</h1>

        <div className="hackathon-grid">

          <div className="hackathon-card">
            <h3>🚀 HackTechFusion 2.0</h3>
            <p><strong>Type:</strong> 24-Hour Innovation Challenge</p>
            <p><strong>Role:</strong> Presenter & Developer</p>
            <p>
              Designed and presented a technology-driven solution in a competitive hackathon environment, showcasing rapid prototyping, analytical thinking, and technical communication.
            </p>

            <button
              className="certificate-btn"
              onClick={() =>
                setSelectedCertificate("/certificates/college.jpeg")
              }
            >
              View Certificate →
            </button>
          </div>
          <div className="hackathon-card">
            <h3>🏆 SHE Secure Hackathon</h3>
            <p><strong>Type:</strong> National-Level Virtual Hackathon</p>
            <p><strong>Role:</strong> Team Member</p>
            <p>
              Contributed to the development of SHEvolve, an AI-powered platform focused on women’s empowerment, demonstrating innovation, collaboration, and solution design skills.
            </p>

            <button
              className="certificate-btn"
              onClick={() =>
                setSelectedCertificate("/certificates/she.jpeg")
              }
            >
              View Certificate →
            </button>
          </div>

        </div>

        <a href="/" className="back-link">
          ⬅ Back to Home
        </a>
      </div>
      

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="certificate-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="certificate-close"
              onClick={() => setSelectedCertificate(null)}
            >
              ✕
            </button>

            <img
              src={selectedCertificate}
              alt="Certificate"
              className="certificate-image"
            />
          </div>
        </div>
      
        
      )}
      </div>
    </>
  );
}
