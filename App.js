
import { useState, useEffect } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Bell, Home } from "lucide-react";

export default function SuhaniMakkarPortfolio() {
    const [page, setPage] = useState(0);
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const introTimer = setTimeout(() => setShowIntro(false), 3000);
        return () => clearTimeout(introTimer);
    }, []);

    const handleNext = () => setPage((prev) => (prev === 3 ? 1 : prev + 1));
    const handlePrevious = () => setPage((prev) => (prev === 1 ? 3 : prev - 1));

    const categories = [
        {
            title: "Academic Achievements",
            episodes: [
                { title: "Episode 1: The Broken Bulb Mystery", description: "At just 11, Suhani repaired a broken bulb with spare torch parts, sparking curiosity." },
                { title: "Episode 2: Mastering Vedic Mathematics", description: "Certified in Vedic Mathematics and conducted workshops." },
                { title: "Episode 3: Academic Triumphs at Atria", description: "Excelled academically, now at TETR College." }
            ]
        },
        {
            title: "Entrepreneurial Ventures",
            episodes: [
                { title: "Episode 4: Founding Diseño Conmigo", description: "Launched a digital marketing startup with zero investment." },
                { title: "Episode 5: The Shelter App Vision", description: "Conceptualized Shelter, connecting the homeless to NGOs." }
            ]
        }
    ];

    if (showIntro) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'black' }}>
                <h1 style={{ color: 'red', fontSize: '3rem', animation: 'pulse 1s infinite' }}>SUHANI MAKKAR</h1>
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '2rem' }}>
            <h2>Welcome to Suhani Makkar's Portfolio</h2>
            {categories.map((category, idx) => (
                <div key={idx}>
                    <h3>{category.title}</h3>
                    {category.episodes.map((ep, id) => (
                        <p key={id}>{ep.title}: {ep.description}</p>
                    ))}
                </div>
            ))}
        </div>
    );
}
