import Image from "next/image";
import hando_Image from "../../public/assets/images/hand-coding.png"

export default function About() {
    return (
        <section className="my-10 flex flex-wrap items-center justify-center sm:justify-between  max-w-2xl mx-auto gap-5 sm:gap-0">
           <div className=" max-w-xs text-center">
                <h2 className="font-bold text-xl mb-3">Sobre nós</h2>
                <p className="font-medium text-white  opacity-75">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, odio. Voluptatibus enim minima dolorem? Totam laboriosam sed vel earum placeat, error consequatur omnis optio! Fuga perspiciatis dolorum aliquam impedit maiores.
                </p>
           </div>
           <div>
                <Image 
                    src={hando_Image}
                    width={200}
                    height={200}
                    alt="Alt"
                />
           </div>
        </section>
    )
}