import  Card  from "./Card";
import Python from "../../public/assets/images/python.png"
import Php from "../../public/assets/images/php.png"
import Image from "next/image"

export default function Favorites() {
    const cards = [
        {
            course:"PHP Básico",
            link: "https://www.cursoemvideo.com/curso/php-basico/",
            image: Php,
            school: "Curso em video",
            description: "Nesse Curso Grátis de PHP para Iniciantes, você vai aprender os primeiros passos para criar sites que utilizem a tecnologia PHP incorporada. Para isso" 
        },
        {
            course:"Python 3",
            link: "https://www.cursoemvideo.com/curso/python-3-mundo-1/",
            image: Python,
            school: "Curso em video",
            description: "Python é uma linguagem ultra moderna, utilizada por grandes empresas como Google, YouTube, Industrial Light & Magic, Globo e muitas outras. Fácil de aprender, com código limpo e organizado" 
        },
    ]

    return (
        <div>
            <h1
                className={`font-semibold text-lg text-center mx-auto mt-6 `}
            >
                Cursos mais acessados!
            </h1>
            <section id="cards"
                className={`flex flex-wrap w-full justify-center items-center mb-8 mt-4 gap-3`}
                >
                    {cards.map((card, index) => {
                        return (
                            <Card 
                                key={index}
                                course={card.course}
                                link={card.link}
                                school={card.school}
                                image={card.image}
                                description={card.description}
                            />
                        )
                })}
            </section>
        </div>
    )
}