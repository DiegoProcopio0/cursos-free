import Image from "next/image";
import Link from "next/link";

export default function Card({link,  image, course, school, description}) {


    return (
        <div className={`
            min-h-[400px] max-h-[400px] h-auto  mb-4 flex flex-col items-center justify-start py-2 px-3 bg-slate-300 w-80 rounded-md hover:scale-110 transition-all ease-in-out
        `}>
            <Link href={link}>
                <Image 
                    className="w-auto max-h-[180px] min-w-full object-cover "
                    src={image}
                    width={300}
                    height={300}
                    alt="sa" 
                />
                <div
                    className={`flex flex-col text-black justify-center w-full gap-1 py-2`}
                >
                    <h2
                        className={`text-black font-bold mx-auto`}
                    >{course}</h2>
                    <h3
                        className={`text-gray-500 italic text-sm`}
                        >{school}</h3>
                    <span
                        className={`text-gray-800 font-medium mx-auto`}
                        >
                        {description}
                    </span>
                </div>
            </Link>
        </div>
    )
}