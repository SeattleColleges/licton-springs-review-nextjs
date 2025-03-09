
import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsTiktok } from "react-icons/bs";

export default function Header() {
    return (
        <header className="header">
            <Image
                src="https://lictonspringsreview.com/wp-content/uploads/2024/02/cropped-LSRLogo_wideweb.png"
                alt="Licton Springs Review Logo"
                width="595" height="90"
                className="header-logo"
            />
            {/* Social Media Icons */}
            <div className="social-icons">
                <Link href="https://www.instagram.com/lictonspringsreview/" target="_blank" rel="noopener noreferrer">
                    <BsInstagram />
                </Link>
                <Link href="https://www.tiktok.com/@lictonspringsreview/" target="_blank" rel="noopener noreferrer">
                    <BsTiktok />
                </Link>
            </div>
            <p className="slogan">
                Visual and literary art from the students, staff, faculty, and alumni of North Seattle College
            </p>
        </header>
    );
}