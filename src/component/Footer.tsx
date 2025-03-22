import Link from "next/link";
export default function Footer() {
  return (
    <footer>
    <nav className="footer">
      <ul>
        <li>
          <Link href="/archives">Archives</Link>
        </li>
        <li>
          <Link href="/job">Job</Link>
        </li>
        <li>
          <Link href="/help">Help</Link>
        </li>
      </ul>
    </nav>
    </footer>
  );
}