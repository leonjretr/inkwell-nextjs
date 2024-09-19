import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import HeaderMain from "@/components/headers/HeaderMain";

export const metadata: Metadata = {
    title: "Booksify - reimagine favourite books",
    description: "Reimagine your favourite books",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>Classic books sequels</title>
            <link rel="icon" href="/src/app/icon.ico" sizes="any"/>
        </head>
        <body className={"antialiased"}>
        <HeaderMain/>
        {children}
        </body>
        </html>
    );
}
