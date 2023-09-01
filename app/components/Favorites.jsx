import  Card  from "./Card";
import NextJs from "../../public/assets/images/next.webp" 
import Html from "../../public/assets/images/html.png" 
import Java from "../../public/assets/images/java.png" 

export default function Favorites() {

    // const cards = {
    //     course:"HTML – Avançado",
    //     link: "https://www.ev.org.br/cursos/html-avancado",
    //     image: {Html},
    //     school: "Instituição Bradesco",
    //     description: "Dividido em quatro módulos, este curso traz conceitos que complementam o conteúdo apresentado em nosso curso de HTML – Básico." 
    // }

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
                <Card
                    course="HTML – Avançado"
                    link="https://www.ev.org.br/cursos/html-avancado"
                    image={Html}
                    school="Instituição Bradesco"
                    description="Dividido em quatro módulos, este curso traz conceitos que complementam o conteúdo apresentado em nosso curso de HTML – Básico. "
                />
                <Card
                    course="HTML – Avançado"
                    link="https://www.ev.org.br/cursos/html-avancado"
                    image={Html}
                    school="Instituição Bradesco"
                    description="Dividido em quatro módulos, este curso traz conceitos que complementam o conteúdo apresentado em nosso curso de HTML – Básico. "
                />
                <Card
                    course="Java"
                    link="https://www.ev.org.br/cursos/linguagem-de-programacao-java-avancado"
                    image={Java}
                    school="Instituição Bradesco"
                    description="Fundamentos de (POO) serão evidenciados, passando pelos objetos, as classes, suas construções, além dos complementos da linguagem Java, incluindo conceitos, métodos e herança"
                />
            </section>
        </div>
    )
}