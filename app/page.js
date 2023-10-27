import Hero from "@/(pages)/components/Hero/Hero";
import './[lang]/globals.scss'

export async function generateMetadata({ params: { lang } }) {
    return {
        title: 'ГРАНД РИЛАЙЗ',
        description: "Хуйня",
        alternates: {
            languages: {
                "x-default": "/",
                ru: "/ru",
                en: "/en",
            },
        },
    };
}


export default function Home() {
    
    return (
        <main>
            <Hero />
        </main>
    );
}
