// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <a className="text-white text-xl font-bold">Seu Logo</a>
        </Link>

        <div className="flex space-x-4">
          <Link href="/">
            <a className="text-white">Home</a>
          </Link>
          <Link href="/sobre">
            <a className="text-white">Sobre</a>
          </Link>
          <Link href="/contato">
            <a className="text-white">Contato</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
