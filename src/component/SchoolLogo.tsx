import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoImg from 'public/NSCMascotLogo.png'

const links = [
  { name: "North Seattle College", url: "https://northseattle.edu/" },
  { name: "NSC Event Calendar", url: "https://northseattle.edu/campus-life/campus-events" },
  { name: "NSC Art Gallery", url: "https://artgallery.northseattle.edu/" },
  { name: "The Seattle Collegian", url: "https://seattlecollegian.com/" },
  { name: "E.P.I.C. • YouTube Channel", url: "https://www.youtube.com/@experientialperformativein9950" },
];

const SchoolLogo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoScale = 0.1;
  return (
    <div className="relative">
      {/* Logo */}
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
        <Image
          src={logoImg}
          alt="NSC Mascot Logo"
          width={logoImg.width * logoScale}
          height={logoImg.height * logoScale}
          className="cursor-pointer"
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
