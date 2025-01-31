import Image from 'next/image';
import './page.css';

export default function Header() {
    return (
        <header>
            <Image src="/lsr-header-mobile.png"
            width={1158} height={1022}
            alt="Licton Springs Review Logo"/>            
        </header>
    );
}