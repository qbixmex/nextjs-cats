import { FC } from "react";
import type { Metadata } from "next";
import { Space_Grotesk as SpaceGrotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = SpaceGrotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Cats App",
  description: "A simple app to browse cat images",
};

type Props = Readonly<{ children: React.ReactNode }>

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        { children }
      </body>
    </html>
  );
};

export default RootLayout;
