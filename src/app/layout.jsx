import "./globals.css";

export const metadata = {
  title: "Coach Mazen",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
