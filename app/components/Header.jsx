"use client"
import Slider from "./Slider";
import Html from "../../public/assets/images/html.png"
import Javascript from "../../public/assets/images/javascript.png"
import Python from "../../public/assets/images/python.png"
import Php from "../../public/assets/images/php.png"
import Image from "next/image"
import logo from "../../public/assets/images/logo.png"
import Input from "../components/Input"
import Menu from "../components/Menu"
import React, { useState }  from 'react';
import FilteredComponents from "./FilteredComponents"
import About from "./About";



export default function Header() {
    const [components, setComponents] = useState([
        {
            course:"HTML – Avançado",
            link: "https://www.ev.org.br/cursos/html-avancado",
            image: Html,
            school: "Instituição Bradesco",
            description: "Dividido em quatro módulos, este curso traz conceitos que complementam o conteúdo apresentado em nosso curso de HTML – Básico." 
        },
        {
            course:"JavaScript",
            link: "https://www.cursoemvideo.com/curso/javascript",
            image: Javascript,
            school: "Curso em video",
            description: "Curso de linguagem JavaScript, voltado para iniciantes e para quem quiser aprender mais sobre ECMAScript, a versão padronizada do JS." 
        },
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
    ]);

    const [filteredComponents, setFilteredComponents] = useState(components);

    
    const handleSearch = (searchTerm) => {
        // Filtrar os componentes com base no termo de pesquisa
        const filtered = components.filter((component) =>
          component.course.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredComponents(filtered);
    };


    return (
        <div>        
            <header className="flex items-center justify-between py-4 px-3 bg-gray-200 sm:px-10 md:P-15 w-full ">
                <Image
                    className="hidden sm:flex sm:w-14 w-12 md:w-16"
                    src={logo}
                    alt="Logo do nosso site, onManabi"
                /> 
                <Input 
                    onSearch={handleSearch}
                />
                <Menu />
            </header>
            <Slider />
            <main className="sm:px-9">
                <About />
            </main>
            <FilteredComponents 
                components={filteredComponents} 
            />
        </div>
    )   
}
