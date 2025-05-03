import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <Link className="flex items-center gap-2" href="/">
        <Image src={logo} alt="cosmoGreen" width={50} height={50} />
        <h1 className="text-xl font-bold">Sky Power</h1>
      </Link>
      <Nav />
    </header>
  );
}
