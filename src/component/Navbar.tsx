import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/poetry">Poetry</Link>
        </li>
        <li>
          <Link href="/audio">Audio</Link>
        </li>
        <li>
          <Link href="/art">Art</Link>
        </li>
        <li>
          <Link href="/fiction">Fiction</Link>
        </li>
        <li>
          <Link href="/non-fiction">Essay</Link>
        </li>
        <li>
          <Link href="/submit">Submit</Link>
        </li>
      </ul>
    </nav>
  );
}