import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/favicon.png" width={60} height={60}></Image>
      </div>
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
      <Link href="/ninjas">ninja listing</Link>
    </nav>
  );
};

export default Navbar;

// Navbar -> pages\index.js
