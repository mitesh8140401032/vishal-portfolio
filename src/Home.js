import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
    useEffect(() => {
        const swiftUpElements = document.querySelectorAll('.swift-up-text');

        swiftUpElements.forEach((elem) => {
            const words = elem.textContent.split(' ');
            elem.innerHTML = '';

            words.forEach((el, index) => {
                words[index] = `<span><i>${words[index]}</i></span>`;
            });

            elem.innerHTML = words.join(' ');

            const children = document.querySelectorAll('span > i');
            children.forEach((node, index) => {
                node.style.animationDelay = `${index * 0.2}s`;
            });
        });
    }, []); 

    return (
        <div className='image' id='Home'>
            <div>
                <h1 className="h1 swift-up-text">I'am Vishal Kachhadiaya</h1>
                <h1 className="h1 swift-up-text">Web Developer</h1>
            </div>
        </div>
    );
};

export default Home;
