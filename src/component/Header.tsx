
import Image from "next/image";
import SocialMediaLinks from './SocialMediaLinks';

export default function Header() {
    const [currentDate, setCurrentDate] = useState<string>("");

    useEffect(() => {
        const date = new Date();
        const formattedDate = date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
        setCurrentDate(formattedDate);
    }, []);

    return (
        <header className="header">
            <Image
                src="https://lictonspringsreview.com/wp-content/uploads/2024/02/cropped-LSRLogo_wideweb.png"
                alt="Licton Springs Review Logo"
                width="595"
                height="90"
                className="header-logo"
            />
            <SocialMediaLinks />
        </header>
    );
}
