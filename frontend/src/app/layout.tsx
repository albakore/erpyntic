import { Providers } from "@/chakra/providers";
import Header from "@/components/header/Header";
import { ColorModeScript } from "@chakra-ui/react";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ERPyntic",
    description: "ERP Software",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="es">
                
            <body >
            <ColorModeScript initialColorMode='system'/>
                <Providers>
                    <Header/>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
