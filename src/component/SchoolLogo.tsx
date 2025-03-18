import Image from "next/image";
import Link from "next/link";
import "../app/global.css";

const SchoolLogo = () => {
  return (
    <header className="header">
      <Link href="https://northseattle.edu" target="_blank" rel="noopener noreferrer" className="logo-link">
        <Image 
          src="/north-seattle-tree-frogs.png" 
          alt="North Seattle College Logo" 
          width={150} 
          height={150} 
          className="logo"
        />
      </Link>
    </header>
  );
};

export default SchoolLogo;
