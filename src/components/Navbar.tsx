import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-black/50 text-white backdrop-blur-lg">
      <div className="container mx-auto p-8 py-6">
        <div className="flex flex-col flex-wrap items-center justify-between gap-y-6 md:flex-row">
          <Link href="/">
            <h1 className="text-2xl font-bold tracking-tight">James Blair</h1>
          </Link>
          <div className="hidden flex-wrap items-center gap-6 md:flex md:flex-row">
            <Link
              href="#"
              className="duration-300 ease-in-out hover:text-gray-200"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="duration-300 ease-in-out hover:text-gray-200"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="duration-300 ease-in-out hover:text-gray-200"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="duration-300 ease-in-out hover:text-gray-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
