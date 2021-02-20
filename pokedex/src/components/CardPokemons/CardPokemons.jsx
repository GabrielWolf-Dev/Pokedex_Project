import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as HeartUnfilled } from '@fortawesome/free-regular-svg-icons';
import { faHeart as HeartFilled } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default function CardPokemons({ namePokemon }){
    const [pokemon, setPokemon] = useState([]);
    const [favorites, setFavorites] = useState(false);

    useEffect(async() => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);

        try{
            const data = await response.json();
            return setPokemon([data]);
        }catch(error){
            throw new Error(error);
        }

    } ,[]);

    return(
        <>
            <section className="cardsPokemons">
                <div className="cardsPokemons__space">
                    {pokemon.map((pokemon, index) => {
                        return (
                            <div className="cardsPokemons__card" key={index}>
                                {
                                    favorites === false ? 
                                    <FontAwesomeIcon 
                                        className="card__iconFavorite" 
                                        onClick={() => {
                                            setFavorites(true);
                                            localStorage.setItem('name', namePokemon);
                                        }} 
                                        icon={HeartUnfilled}
                                    /> :
                                    <FontAwesomeIcon 
                                        className="card__iconFavorite" 
                                        onClick={() => {
                                            setFavorites(false);
                                            localStorage.removeItem("name");
                                        }} 
                                        icon={HeartFilled}
                                    />
                                }
                                <div className="card__borderImg">
                                    <img src={pokemon.sprites.front_default} alt={namePokemon}/>
                                </div>
                                <div className="card__content">
                                    <h2>{pokemon.name}</h2>
                                    <p>
                                        {pokemon.types.map(infoType => infoType.type.name).join(" | ")}
                                    </p>
                                        {pokemon.stats.map((infostats, index) => {
                                            return(
                                                <div key={index} className="content__bgBar">
                                                    <label htmlFor="stateValue">{infostats.stat.name}</label>
                                                    <div className="bgBar__bar">
                                                        {<div
                                                            id="stateValue" 
                                                            className="bar__valueState"
                                                            style={{width: `${infostats.base_stat}px`}}
                                                            >
                                                                <span>{infostats.base_stat}</span>
                                                            <div className="clear"></div>
                                                        </div>}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div> 
                        );
                    })}
                </div>
            </section>
        </>
    );
}