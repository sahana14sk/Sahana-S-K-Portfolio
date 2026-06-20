import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Turning ideas into reality, one line at a time."
];

export default function Final() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    document.body.className = "home-bg";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hero"
      style={{ textAlign: "center" }}
    >
      <div>
        <h1>Thank You for Visiting</h1>
        <p style={{ marginTop: 20, fontStyle: "italic" }}>"{quote}"</p>
        <p style={{ marginTop: 30 }}>Let’s connect and build something amazing 🚀</p>
      </div>
    </motion.div>
  );
}
