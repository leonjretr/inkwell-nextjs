import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import Wrapper from "@/components/wrappers/Wrapper";
import HeaderMain from "@/components/headers/HeaderMain";
import Categories from "@/components/headers/Categories";
import Footer from "@/components/footers/Footer";

export const metadata: Metadata = {
    title: "Inkwell - reimagine favourite books",
    description: "Reimagine your favourite books",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>Inkwell - reimagine favourite books</title>
            <link rel="icon" href="/src/app/icon.ico" sizes="any"/>
        </head>
        <body className={"antialiased"}>
        <HeaderMain/>
        <Wrapper>
            <Categories/>
        </Wrapper>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
