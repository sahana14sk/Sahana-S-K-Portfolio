import { Link } from "react-router-dom";

export default function ProjectsPage() {
  return (
    <div className="subpage">
      <h1>Projects</h1>
      <ul>
        <li>SHEvolve – Women safety platform</li>
        <li>ClassConnect – Academic assistant</li>
      </ul>
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}
