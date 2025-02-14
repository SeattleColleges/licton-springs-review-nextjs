import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
    footer-nguyengiang
    <nav className="footer">
      <ul>
        <li>
          <img src="/north-seattle-tree-frogs.png" alt="image of NSC Logo" width="160" height="80" />
        </li>
        <li>
          <Link href="/archive">Archive</Link>
        </li>
        <li>
          <Link href="job">Job</Link>
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
        <li>
          <Link href="https://www.getrave.com/login/seattlecolleges">
          <Image src="/rave.png" alt="image of NSC Logo" width="170" height="40" />
          </Link>
        </li>
      </ul>
    </nav>

      {/* <nav className="footer">
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
      </nav> */}
    </footer>
  );
}