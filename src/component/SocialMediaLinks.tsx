import Link from "next/link";
import { BsInstagram, BsTiktok } from "react-icons/bs";

export default function SocialMediaLinks() {
    return (
        <div className="header-social-links">
            <Link href="https://www.instagram.com/lictonspringsreview/" target="_blank" rel="noopener noreferrer">
                <BsInstagram />
            </Link>
            <Link href="https://www.tiktok.com/@lictonspringsreview/" target="_blank" rel="noopener noreferrer">
                <BsTiktok />
            </Link>
        </div>
    );
}
