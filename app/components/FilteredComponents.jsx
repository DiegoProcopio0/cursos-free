"use client"
import Card from "./Card";

export default function FilteredComponents({components}) {
    console.log(components);

    if (components === undefined || components == "") {
        return ""
    } else {
        return (
            <div>
                <h1
                    className={`font-semibold text-lg text-center mx-auto mt-6 `}
                >
                    Cursos
                </h1>
                <section
                    className={`flex flex-wrap w-full justify-center items-center mb-8 mt-4 gap-3`}
                >
                {components.map((component, index) => {
                    return (
                        <Card 
                            key={index}
                            course={component.course}
                            link={component.link}
                            school={component.school}
                            image={component.image}
                            description={component.description}
                        />
                    )
                })}
                </section>
                </div> 
            )
    }
}