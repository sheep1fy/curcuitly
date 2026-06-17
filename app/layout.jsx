export const metadata = {
  title: "Curcuitly",
  description: "AI-powered tech recommendations"
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
