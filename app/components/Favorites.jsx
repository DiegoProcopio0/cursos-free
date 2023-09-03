import  Card  from "./Card";
import Html from "../../public/assets/images/html.png" 

export default function Favorites() {
    const cards = [
        {
            course:"HTML – Avançado",
            link: "https://www.ev.org.br/cursos/html-avancado",
            image: Html,
            school: "Instituição Bradesco",
            description: "Dividido em quatro módulos, este curso traz conceitos que complementam o conteúdo apresentado em nosso curso de HTML – Básico." 
        },
        {
            course:"HTML – Avançado",
            link: "https://www.ev.org.br/cursos/html-avancado",
            image: Html,
            school: "Instituição Bradesco",
            description: "Dividido em quatro módulos, este curso traz conceitos que complementam o conteúdo apresentado em nosso curso de HTML – Básico." 
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