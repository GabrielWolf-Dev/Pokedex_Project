import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartBorder } from '@fortawesome/free-regular-svg-icons';

import './style.css';

export default function CardPokemons(){
    const [pokemons, setPokemons] = useState([]);
    const [spritesPoke, setSpritesPoke] = useState([]);
    const sprites = [];
    function showSprites(){
        for(let i= 1; i <= pokemons.length; i++){
            sprites.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`);
        }
    }
    
    useEffect(() => {
        setSpritesPoke(sprites);   
    }, []);

    useEffect(async () => {
        setTimeout(showSprites(), 300);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
        const data = await response.json();
        data.results.map(pokemon => pokemon.sprite = spritesPoke.shift());

        setPokemons(data.results);
    }, []);

    console.log(pokemons);
    return(
        <>
            <section className="cardsPokemons">
                <div className="cardsPokemons__space">
                    {pokemons.map((pokemon, index) => {
                        return (
                            <div className="cardsPokemons__card" key={index}>
                                    <FontAwesomeIcon className="card__iconFavorite" icon={heartBorder} />
                                <div className="card__borderImg">
                                    <img src={pokemon.sprite} alt=""/>
                                </div>
                                <div className="card__content">
                                    <h2>{pokemon.name}</h2>
                                    <p></p>
                                </div>
                            </div> 
                        );
                    })}
                </div>
            </section>
        
            <section className="pagination">
                <div className="pagination__space">
                    <div className="pagination__page"><p>1</p></div>
                    <div className="pagination__page"><p>2</p></div>
                    <div className="pagination__page"><p>3</p></div>
                    <div className="pagination__page"><p>4</p></div>
                </div>
            </section>
        </>
    );
}