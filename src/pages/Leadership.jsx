import { useState } from "react";

export default function Leadership() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
      <div className="leadership-page">
        <div className="page-container">
        <h1>Technical Leadership</h1>

        <div className="hackathon-grid">

          {/* ACM Card */}
          <div className="hackathon-card">
            <h3>ACM Student Chapter</h3>

            <p>
              <strong>Position:</strong> Event Manager
            </p>

            <p>
              Led the planning and coordination of technical events,
              workshops, and student engagement activities, fostering
              collaboration and professional development.
            </p>

            <button
              className="certificate-btn"
              onClick={() =>
                setSelectedCertificate("/certificates/acm.jpg")
              }
            >
              View Certificate →
            </button>
          </div>

          {/* Monaithon Card */}
          <div className="hackathon-card">
            <h3>Monaithon 2025</h3>

            <p>
              <strong>Role:</strong> Hackathon Coordinator
            </p>

            <p>
              Coordinated hackathon operations, participant engagement,
              and event logistics, ensuring smooth execution of a
              large-scale technical event.
            </p>

            <button
              className="certificate-btn"
              onClick={() =>
                setSelectedCertificate("/certificates/monaithon.jpg")
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
            <img
              src={selectedCertificate}
              alt="Certificate"
              className="certificate-image"
            />

            <button
              className="certificate-close"
              onClick={() => setSelectedCertificate(null)}
            >
              ✕
            </button>
          </div>
        </div>
        
      )}
      </div>
      
    
    </>
    
  );
  
}