import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart as HeartUnfilled } from '@fortawesome/free-regular-svg-icons';
import { faHeart as HeartFilled } from '@fortawesome/free-solid-svg-icons';

import './style.css';
import MessageWarning from '../MessageWarning/MessageWarning';

export default function Favorites(){
    const [pokemon, setPokemon] = useState([]);
    const [favorites, setFavorites] = useState(true);
    const pokemonsFavorites = localStorage.getItem('name');

    useEffect(async() => {
        if(pokemonsFavorites !== null){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonsFavorites}`);      
            const data = await response.json();
    
            setPokemon([data]);
        }
    } ,[]);

    return(
        <>
            <div className="linkHome">
                <Link className="linkHome__link" to="/" onClick={() => {
                    return document.querySelector('.cardsFavPokemons').style.display = "block";
                }}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </Link>
            </div>
            <section className="container">
                <h1 className="titleHome">Pokemon Favorito</h1>

                <div className="cardsFavPokemons">
                    <div className="cardsFavPokemons__space">
                    {pokemon.map((pokemon, index) => {
                        return (
                            <div className="cardsPokemons__card" key={index}>
                                {
                                    favorites === true ? 
                                    <FontAwesomeIcon 
                                        className="card__iconFavorite" 
                                        onClick={() => {
                                            setFavorites(false);
                                            localStorage.removeItem("name");
                                            document.querySelector('.cardsFavPokemons').style.display = "none";
                                        }} 
                                        icon={HeartFilled}
                                    /> :
                                    <FontAwesomeIcon 
                                        className="card__iconFavorite" 
                                        onClick={() => {
                                            setFavorites(true);
                                        }} 
                                        icon={HeartUnfilled}
                                    />
                                }
                                <div className="card__borderImg">
                                    <img src={pokemon.sprites.front_default} />
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
                    {
                       pokemonsFavorites === null ? <MessageWarning /> : false
                    }
                    </div>
                </div>
            </section>
        </>
    );
}