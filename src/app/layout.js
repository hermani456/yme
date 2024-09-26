import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
  weight: "400",
});

export const metadata = {
  title: "YMe Recruitment Agency",
  description:
    "YMe is a recruitment agency that helps you find the best job for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${bebas.variable} antialiased`}>{children}</body>
    </html>
  );
}
