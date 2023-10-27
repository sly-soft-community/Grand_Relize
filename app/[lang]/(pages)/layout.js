import "../globals.scss";
import { Inter } from "next/font/google";
import { getDictionary } from "../../../get-dictionary";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children, params }) {
    const dictionary = getDictionary(params.lang);
    return (
        <div className={`${inter.className} page`}>
            {children}
        </div>
    )
}
