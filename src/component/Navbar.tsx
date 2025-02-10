import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/poetry">poetry</Link>
        </li>
        <li>
          <Link href="/audio">Audio</Link>
        </li>
        <li>
          <Link href="/arts">Arts</Link>
        </li>
        <li>
          <Link href="/fiction">Fiction</Link>
        </li>
        <li>
        <Link href="/non-fiction">Non-Fiction</Link>
        </li>
      </ul>
    </nav>
  );
}