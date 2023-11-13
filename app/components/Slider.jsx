"use client"    
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Slider() {
    const images = [
        "https://img.freepik.com/fotos-gratis/plano-de-fundo-de-programacao-com-pessoa-trabalhando-com-codigos-no-computador_23-2150010125.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699056000&semt=sph",
        "https://certificadocursosonline.com/wp-content/uploads/2021/12/curso-de-programacao-basico-1280x720.jpg",
        `https://i.ibb.co/bvyM43C/SLIDER.png`,
    ];
    return (
        <Slide
            className="h-96"q
        >
            <div className="each-slide-effect  h-32">
                <div
                    className='h-32' 
                    style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect h-32"
            
            >
                <div 
                    className='h-32' 
                    style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect h-32">
                <div 
                    className='h-32' 
                    style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
    </Slide>
    )
}