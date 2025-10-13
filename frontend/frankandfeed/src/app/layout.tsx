import Header from "@/components/HeaderComponents";
import "./globals.css";

// Root layout för inloggningssidan
export const metadata = {
  title: "frankandfeed",
  description: "Logga in på frankandfeed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className="bg-gray-100 min-h-screen flex items-center justify-center">
        <Header />
        <main> {children}</main>
      </body>
    </html>
  );
}
