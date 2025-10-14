import Header from "@/components/HeaderComponents";
import "./globals.css";

export const metadata = {
  title: "frankandfeed",
  description: "Logga in på frankandfeed",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <Header />
        <main> {children}</main>
      </body>
    </html>
  );
}

//gjorde om globala layouten med wrapper för hela appen