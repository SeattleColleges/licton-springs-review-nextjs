'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import SocialMediaLinks from './SocialMediaLinks';
import SchoolLogo from './SchoolLogo'; 

export default function Header() {
    const [currentDate, setCurrentDate] = useState<string>("");

    useEffect(() => {
        try {
            const date = new Date();
            const formattedDate = date.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            });
            setCurrentDate(formattedDate);
        } catch (error) {
            console.error("Error formatting date:", error);
            setCurrentDate("Error"); 
        }
    }, []);

    return (
        <header className="header">

            {/*  NSC Mascot Logo */}
            <div className="nsc-logo-container">
                <SchoolLogo />
            </div>
            <Link href="/">
            <Image
                src="https://lictonspringsreview.com/wp-content/uploads/2024/02/cropped-LSRLogo_wideweb.png"
                alt="Licton Springs Review Logo"
                width="595"
                height="90"
                className="header-logo"
            />
            </Link>
            <p className="slogan">
                Visual and literary art from the students, and alumni of North Seattle College
            </p>

            {/* Date Container */}
            <div className="date-container" aria-label="Current Date">
                <p className="current-date">{currentDate}</p>
            </div>

            <SocialMediaLinks />
        </header>
    );
}


