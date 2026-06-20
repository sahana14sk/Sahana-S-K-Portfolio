import { useState, useEffect } from "react";


export default function Photography() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

    const photos = [
  { src: "/photos/p1.jpeg", caption: "Web Developer: Spider 🕷️" },
  { src: "/photos/p2.jpeg", caption: "A quiet conversation between stone and water." },
  { src: "/photos/p3.jpeg", caption: "A soft arrival of sunlight." },
  { src: "/photos/p4.jpeg", caption: "Tiny oceans on a single leaf." },
  { src: "/photos/p5.jpeg", caption: "A staircase to the sun." },
  { src: "/photos/p6.jpeg", caption: "A Tiny civilization." }
];

 

  const [current, setCurrent] = useState(0);
  const [typedCaption, setTypedCaption] = useState("");
  const isLast = current === photos.length - 1;
  const [showEnd, setShowEnd] = useState(false);

useEffect(() => {
  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = "auto";
  };
}, []);

useEffect(() => {
  setTypedCaption("");

  let i = 0;
  const text = photos[current].caption;

  const interval = setInterval(() => {
    setTypedCaption(text.slice(0, i + 1));

    i++;

    if (i >= text.length) {
      clearInterval(interval);
    }
  }, 45);

  return () => clearInterval(interval);
}, [current]);





const goNext = () => {
  // if user is already on last photo
  if (current === photos.length - 1) {
    setShowEnd(true);   // NOW show end screen
    return;
  }

  // otherwise go to next photo
  setCurrent(prev => prev + 1);
};



  const goPrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
   <div className="photo-stage">


  {/* click zones */}
  <div className="click left" onClick={goPrev}></div>
  <div className="click right" onClick={goNext}></div>

  {/* photos */}
  {photos.map((photo, index) => {
    let position = "hidden";
    if (index === current) position = "center";
    if (index === current - 1) position = "left";
    if (index === current + 1) position = "right";

    return (
      <div key={index} className={`photo ${position}`}>
        <img src={photo.src} alt="" />
      </div>
    );
  })}
  

 

  {/* ✅ CAPTION */}
  <div className="photo-caption">
    {typedCaption}
  </div>
  {showEnd && (
  <div className="journey-overlay">
    <p className="journey-title">
      
    </p>

    <button
      className="journey-btn"
      onClick={() => {
        setShowEnd(false);
        setCurrent(0);
      }}
    >
      ⟲ Revisit journey
    </button>

    <a
      href="https://instagram.com/s.k_pov"
      target="_blank"
      rel="noopener noreferrer"
      className="journey-instagram"
    >
      See what I capture next →
    </a>
    <button
  className="journey-back"
  onClick={() => {
    setShowEnd(false);
    window.location.href = "/#skills";
  }}
>
  ← Return to Home
</button>

  </div>
)}



    </div>
    
  );
}
