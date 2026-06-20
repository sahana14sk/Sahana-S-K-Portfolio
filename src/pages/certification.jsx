import { Link } from "react-router-dom";

export default function Certificates() {
  return (
    <div className="subpage">
      <h1>Certificates</h1>
      <ul>
        <li>AICTE AI Internship</li>
        <li>DSA Certification</li>
      </ul>
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
}
