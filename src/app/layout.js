import "./globals.css";

export const metadata = {
  title: "YMe Recruitment Agency",
  description: "YMe is a recruitment agency that helps you find the best job for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
