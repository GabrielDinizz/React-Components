import React, { useRef, useEffect } from 'react';
import '../cabecalho/cabecalho.css';
import logo from '../../assets/reactLogo.png';

function Navegacao() {
    const imgRef = useRef(null); // Criando uma referência para o elemento img

    useEffect(() => {
        let angulo = 0;

        function rotateReact() {
            angulo += 1;
            imgRef.current.style.transform = `rotate(${angulo}deg)`;
        }

        const intervalId = setInterval(rotateReact, 10); // Usando 500ms em vez de .5 (meio segundo)

        return () => {
            clearInterval(intervalId); // Limpando o intervalo quando o componente for desmontado
        };
    }, []); // O segundo argumento [] faz com que o useEffect seja executado apenas uma vez após a montagem do componente

    return (
        <nav>
            <div className='imgDiv'><img src={logo} alt="" ref={imgRef} /></div>
            <div className='reactDiv'>REACT.JSX</div>
            <div>INICIO</div>
            <span></span>
        </nav>
    );
}

export default Navegacao;
