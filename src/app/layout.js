import "./globals.css";

export const metadata = {
  title: "Yme Recruitment Agency",
  description: "Yme is a recruitment agency that helps you find the best job for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
