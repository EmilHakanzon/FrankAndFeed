import Image from "next/image";
import LoginForm from "@/components/LoginForm";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      {/* Logotyp-boxen */}
      <header className="absolute top-0 left-0 w-full h-18 bg-white shadow-sm flex items-center px-10 py-3">
        <div className="relative w-50 h-15 -ml-10">
          <Image
            src="/logo.png"
            alt="frankandfeed logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </header>

      {/* Login-formen-boxen */}
      <div className="bg-white p-8 rounded-md w-80 sm:w-96 h-96"
        style={{
          boxShadow: "3px 3px 7px rgba(0, 0, 0, 0.20)"
        }}>
        <LoginForm />
      </div>
    </main>
  );
}