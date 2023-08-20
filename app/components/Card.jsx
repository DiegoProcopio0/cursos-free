import Image from "next/image";
import Link from "next/link";

export default function Card() {
    return (
        <div className={`
             min-h-min mb-4 flex flex-col items-center justify-center py-2 px-3 bg-gray-200 w-80 rounded-md hover:scale-110 transition-all ease-in-out
        `}>
            <Link href="https://www.google.com/">
                <Image 
                    src="/assets/images/next.webp"
                    alt="sa"
                    width={300}
                    height={300}    
                    />
                <div
                    className={`flex flex-col text-black justify-center w-full gap-1 py-2`}
                >
                    <h2
                        className={`text-black font-bold mx-auto`}
                    >Curso de JS</h2>
                    <h3
                        className={`text-gray-500 italic text-sm`}
                        >Diego Procopio</h3>
                    <span
                        className={`text-gray-800 font-medium mx-auto`}
                        >
                        Descrição do Curso de JS do Diego
                    </span>
                </div>
            </Link>
        </div>
    )
}