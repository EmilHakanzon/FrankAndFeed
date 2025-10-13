import Image from "next/image";

export default function Header () {
  return (
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
  )
}