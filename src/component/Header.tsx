
import Image from "next/image";
export default function Header() {
    return (
        <header className="header">
            <Image
                src="https://lictonspringsreview.com/wp-content/uploads/2024/02/cropped-LSRLogo_wideweb.png"
                alt="Licton Springs Review Logo"
                width="595" height="90"
                className="header-logo"
            />
            <p className="slogan">
                Visual and literary art from the students, staff, faculty, and alumni of North Seattle College
            </p>
        </header>
    );
}