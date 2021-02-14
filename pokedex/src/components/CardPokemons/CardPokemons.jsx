import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartBorder } from '@fortawesome/free-regular-svg-icons';

import './style.css';

export default function CardPokemons({ namePokemon }){
    const [pokemon, setPokemon] = useState([]);

    useEffect(async() => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
        const data = await response.json();
    
        setPokemon([data]);
    } ,[]);

    //Fazer aparecer os nomes

    return(
        <>
            <section className="cardsPokemons">
                <div className="cardsPokemons__space">
                    {pokemon.map((pokemon, index) => {
                        return (
                            <div className="cardsPokemons__card" key={index}>
                                    <FontAwesomeIcon className="card__iconFavorite" icon={heartBorder} />
                                <div className="card__borderImg">
                                    <img src={pokemon.sprites.front_default} alt={namePokemon}/>
                                </div>
                                <div className="card__content">
                                    <h2>{pokemon.name}</h2>
                                    <p>
                                        {pokemon.types.map(infoType => infoType.type.name).join(" | ")}
                                    </p>
                                </div>
                            </div> 
                        );
                    })}
                </div>
            </section>
        </>
    );
}