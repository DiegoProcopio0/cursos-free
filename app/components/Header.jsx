"use client"
import Image from "next/image"
import logo from "../../public/assets/images/logo.png"
import Input from "../components/Input"
import React, {useState}  from 'react';


export default function Header() {
    const [searchValue, setSearchValue] = React.useState("");

    const handleSearchInputChange = (e) => {
      setSearchValue(e.target.value);
    };
  
    const handleSearch = () => {
      // Execute a busca com o va   lor em `searchValue`
      console.log(`Você está buscando por: ${searchValue}`);
    };

    return (
        <header className="flex items-center justify-between py-4 px-3 bg-gray-200 sm:px-10 md:P-15 w-full ">
            <Image
                className="sm:w-14 w-12 md:w-16"
                src={logo}
                alt="Logo do nosso site, onManabi"
            /> 
            <Input 
                value={searchValue}
                onChange={handleSearchInputChange}
                onSearch={handleSearch}
            />
            <nav className="hidden sm:flex">
                <ul>
                    <li className="font-semibold cursor-pointer text-cyan-700 md:text-lg">Cursos Free</li>
                </ul>
            </nav>
        </header>
    )   
}