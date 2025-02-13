import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <nav className="footer">
        <ul>
          <li>
            <Link href="/archive">Archive</Link>
          </li>
          <li>
            <Link href="jobs">Jobs</Link>
          </li>
          <li>
            <Link href="community page">Community Page</Link>
          </li>
          <li>
            <Link href="help">Help</Link>
          </li>
          <li>
            <Link href="link">Link</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}