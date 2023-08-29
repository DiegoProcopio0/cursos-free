"use client"

const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

export default function Footer() {
    return (
       <footer className="flex justify-between items-center p-4 w-full bg-gray-300 border-t-2 border-t-gray-700 py-5 bottom-0 inherit">
            <h2 className="sr-only">
                Footer
            </h2>
            <div className="flex flex-col gap-2">
                <button 
                    className="text-gray-800 hover:text-gray-900 hover:font-bold font-semibold"
                    onClick={scrollToTop}
                >
                    VOLTAR AO TOPO
                </button>
            </div>
            <div className="flex gap-2 sm:flex-row">
                <a href="/" className={`font-semibold cursor-pointer text-cyan-700 md:text-lg`}>Cursos Free</a>
            </div>
       </footer>
    )
}   