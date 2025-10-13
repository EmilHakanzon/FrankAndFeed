import "../globals.css";
import Image from "next/image";

export const metadata = {
  title: "frankandfeed | Home",
  description: "Din feed och uppdateringar",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      {/*header*/}
      <header className="w-full bg-white shadow-sm flex items-center px-5 py-2 z-40">
        <Image
          src="/logo.png"
          alt="frankandfeed logo"
          width={160}
          height={40}
          priority
        />
      </header>

      {/*nav — sticky */}
      <nav className="bg-white shadow-sm flex justify-center space-x-16 py-1 sticky top-0 z-50 rounded-lg max-w-2xl mx-auto mt-1">
        <button className="flex flex-col items-center transition">
          <Image
            src="/homeIcon.png"
            alt="Home"
            width={60}
            height={60}
            className="opacity-80 hover:opacity-100 transition duration-200 hover:scale-110"
          />
        </button>

        <button className="flex flex-col items-center transition">
          <Image
            src="/feedIcon.png"
            alt="Feed"
            width={58}
            height={58}
            className="opacity-80 hover:opacity-100 transition duration-200 hover:scale-110"
          />
        </button>

        <button className="flex flex-col items-center transition -mt-1">
          <Image
            src="/newIcon.png"
            alt="Create"
            width={73}
            height={73}
            className="opacity-80 hover:opacity-100 transition duration-200 hover:scale-110"
          />
        </button>

        <button className="flex flex-col items-center transition">
          <Image
            src="/profileIcon.png"
            alt="Profile"
            width={52}
            height={60}
            className="opacity-80 hover:opacity-100 transition duration-200 hover:scale-110"
          />
        </button>
      </nav>

      {/*sidinnehåll */}
      <main className="max-w-2xl mx-auto mt-6">{children}</main>
    </div>
  );
}