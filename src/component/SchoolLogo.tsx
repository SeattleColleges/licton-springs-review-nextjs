import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "North Seattle College", url: "https://northseattle.edu/" },
  { name: "NSC Event Calendar", url: "https://northseattle.edu/campus-life/campus-events" },
  { name: "NSC Art Gallery", url: "https://artgallery.northseattle.edu/" },
  { name: "The Seattle Collegian", url: "https://seattlecollegian.com/" },
  { name: "Association of Writers and Programs (AWP)", url: "https://awpwriter.org/"},
  { name: "Poets and Writers", url: "https://www.pw.org/literary_magazines"},
];

const SchoolLogo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      {/* Logo */}
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
        <Image
          src="/NSCMascotLogo.png" alt="NSC Mascot Logo" width={60} height={40} className="cursor-pointer"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.url} target="_blank"> {link.name} </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div> 
  );
};

export default SchoolLogo;
