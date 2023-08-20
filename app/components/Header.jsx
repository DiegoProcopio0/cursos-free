import Image from "next/image"
import logo from "../../public/assets/images/logo.png"

export default function Header() {
    return (
        <header className="flex items-center justify-between py-4 px-3 bg-gray-200 sm:px-10 md:P-15 w-full ">
            <Image
                className="sm:w-14 w-12 md:w-16"
                src={logo}
                alt="Logo do nosso site, onManabi"
            />
            <form action="" className="flex items-center justify-center gap-4">
                <input type="text" placeholder="Pesquisar" className="text-gray-700 md:text-lg ml-3 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-1 pl-3 pr-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"/>
                <button type="submit" className="md:text-lg flex items-center justify-center bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-md py-1 px-3 shadow-sm text-white sm:text-sm">Pesquisar</button>
            </form>
            <nav className="hidden sm:flex">
                <ul>
                    <li className="font-semibold cursor-pointer text-cyan-700 md:text-lg">Cursos Free</li>
                </ul>
            </nav>
        </header>
    )   
}