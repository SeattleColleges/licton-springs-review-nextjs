'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

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
            <p className="slogan">
                Visual and literary art from the students and alumni of North Seattle College
            </p>
            <div className="date-container">
                <p className="current-date">{currentDate}</p>
            </div>
        </header>
    );
}
