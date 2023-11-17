// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex justify-between items-center gap-4 font-bold  "> 
          <Link 
            href="/login" 
            legacyBehavior 
          >
           Login
          </Link>
          <Link href="/cadastro" legacyBehavior>
            Cadastro
          </Link>
        </div>

        {/* Hambúrguer para telas menores */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Menu de hambúrguer visível apenas quando está aberto */}
        {isMenuOpen && (
          <div className="text-center flex items-center justify-center mt-1 gap-4 md:hidden absolute top-16 left-0 right-0  bg-gray-500 text-xl font-bold">
            <Link href="/login" legacyBehavior>
              Login
            </Link>
            <Link href="/cadastro" legacyBehavior>
              Cadastro
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
