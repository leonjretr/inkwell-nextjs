import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            margin: {
                "0.2": "0.125rem",
                "0.25": "0.175rem",
                "0.3": "0.2rem",
            },
            fontFamily: {
                niceFont: ['Lora'],
                niceFontSec: ['Merriweather'],
                poppinsFont: ['Poppins'],
                interFont: ['Inter'],
                terminalFont: ['Fira Code'],
                handFont: ['Shadows Into Light'],
            },
            colors: {
                mainColor: "#e5e7eb",
                headerColor:"#f9fafb",
                greenNew: "#50B9A6",
                greenDark: "#29665B",
                amateurColor: "#F4BB44",
                bgDarkColor: "#221F1F",
                caribCurrent:"#336b75",
                sage:"#ACAD94",
                smokyBlack:"#141204",
                purple:"#5F0F40",
                thistle:"#C189E6",
                mountPink:"#95818D",
                payneGray:"#576066",
                slateGray:"#2C514C",
                gunmetalGray:"#122932"
            },
            spacing: {
                "0.25": "0.0625rem",
                "88": "22rem",
                "110": "28rem",
                "120": "32rem",
                "130": "36rem",
                "140": "40rem",
                "150": "44rem",
            },
            screens: {
                'mob1': '385px',
                'mob2': '450px',
                'mob3': '540px'
            },
            fontSize: {
                xxs: "0.5rem",
                xss: "0.625rem",
            }
        },
    },
    plugins: [],
};
export default config;
