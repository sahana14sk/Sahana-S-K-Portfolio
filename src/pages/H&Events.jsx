import { Link } from "react-router-dom";

export default function Events() {
  return (
    <div className="subpage">
      <h1>Events & Hackathons</h1>
      <ul>
        <li>FOSS Hackathon</li>
        <li>SHE Secure Hackathon</li>
      </ul>
      <Link to="/">⬅ Back </Link>
    </div>
  );
}
