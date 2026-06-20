import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.5 }}
      style={{ padding: "80px" }}
    >
      <h2>About Me</h2>
      <p>
        I am a passionate Artificial Intelligence & Machine Learning student
        who enjoys building practical solutions and learning through hands-on
        projects and hackathons.
      </p>
    </motion.div>
  );
}
