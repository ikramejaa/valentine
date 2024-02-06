import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import './Home.css'; // Importez le fichier CSS pour les styles personnalisés

const Home = () => {
    const [nonClicked, setNonClicked] = useState(false);
    const [nonConfirmedA, setNonConfirmedA] = useState(false);
    const [nonConfirmedB, setNonConfirmedB] = useState(false);
    const [nonConfirmedC, setNonConfirmedC] = useState(false);
    const [nonConfirmedD, setNonConfirmedD] = useState(false);
    const [nonConfirmedE, setNonConfirmedE] = useState(false);
    const [nonConfirmedF, setNonConfirmedF] = useState(false);
    const [nonConfirmedG, setNonConfirmedG] = useState(false);
    const [count, setCount] = useState(0);

    const handleNonClick = () => {
        setNonClicked(true);
        setCount(count + 50); // Incrémenter le compteur à chaque clic sur "Non"
    };


    const handleNonConfirmClickA = () => {
        setNonConfirmedA(true);
        setCount(count + 50);
    };
    const handleNonConfirmClickB = () => {
        setNonConfirmedB(true);
        setCount(count + 50);
    };
    const handleNonConfirmClickC = () => {
        setNonConfirmedC(true);
        setCount(count + 50);
    };
    const handleNonConfirmClickD = () => {
        setNonConfirmedD(true);
        setCount(count + 50);
    };
    const handleNonConfirmClickE = () => {
        setNonConfirmedE(true);
        setCount(count + 50);
    };
    const handleNonConfirmClickF= () => {
        setNonConfirmedF(true);
        setCount(count + 50);
    };
    const handleNonConfirmClickG= () => {
        setNonConfirmedG(true);
        setCount(count + 50);
    };

    const style = {
        fontSize: `${15 + count}px`, 
    };

    return (
        <div className='tout'>
        <div className="div-image"></div>
        <div className="home-container"> 
            <h1>Veux-tu être mon Valentine ?</h1>
            <div className="button-container"> 
                {!nonClicked && (
                    <button className="nonButton" onClick={handleNonClick}>
                        Non
                    </button>
                )}
                {nonClicked && !nonConfirmedA && (
                    <div>
                        <button className="nonButton" onClick={handleNonConfirmClickA}>
                            Es-tu sûr ?
                        </button>
                    </div>
                )}
                {nonClicked && !nonConfirmedB && nonConfirmedA &&(
                    <div>
                        <button  className="nonButton" onClick={handleNonConfirmClickB}>
                        Réfléchis un peu plus
                        </button>
                    </div>
                )}
                {nonClicked && !nonConfirmedC && nonConfirmedB &&(
                    <div>
                        <button className="nonButton" onClick={handleNonConfirmClickC}>
                        Un peu plus
                        </button>
                    </div>
                )}
                {nonClicked && !nonConfirmedD && nonConfirmedC &&(
                    <div>
                        <button className="nonButton" onClick={handleNonConfirmClickD}>
                        Un petit peu plus
                        </button>
                    </div>
                )}
                {nonClicked && !nonConfirmedE && nonConfirmedD && (
                    <div>
                        <button className="nonButton" onClick={handleNonConfirmClickE}>
                        Allez plus d'effort mon amour
                        </button>
                    </div>
                )}
                {nonClicked && !nonConfirmedF && nonConfirmedE &&(
                    <div>
                        <button className="nonButton" onClick={handleNonConfirmClickF}>
                        Allez ma vie
                        </button>
                    </div>
                )}
                {nonClicked && !nonConfirmedG && nonConfirmedF &&(
                    <div>
                        <button className="nonButton" onClick={handleNonConfirmClickG}>
                        Je vais me fâher mon bijou
                        </button>
                    </div> 
                )}
            </div>
            <Link to="/yes">
                <button className="yesButton" style={style} >
                    Oui
                </button>
            </Link>
        </div>
        </div>
        
    );
};

export default Home;
