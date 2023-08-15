import  Card  from "./Card";

export default function Cards() {
    return (
        <div>
            <h1
                className={`font-semibold text-lg text-center mx-auto mt-6 `}
            >
                Cursos
            </h1>
            <section id="cards"
                className={`flex flex-wrap min-w-full justify-center items-center mb-8 mt-4 gap-3`}
                >
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
        </div>
    )
}