import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as HeartFilled } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './style.css';
import SearchPokemon from '../SearchPokemon';
import CardPokemons from '../CardPokemons';
import Footer from '../Footer';


export default function Home(){
    const [namePokemon, setNamePokemon] = useState("");
    const [pokemons, setPokemons] = useState([]);

    useEffect(async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=500&offset=2`);
        const data = await response.json();

        setPokemons(data.results);
    }, []);

    return(
        <>
            <div className="linkFavorites">
                <Link className="linkFavorites__link" to="/favorites">
                    <FontAwesomeIcon icon={HeartFilled}/>
                </Link>
            </div>
            
            <div className="container">
                <h1 className="title">Pokedex</h1>
                <SearchPokemon setNamePokemon={setNamePokemon}/>
                {
                    pokemons.map((pokemon, index) => {
                        if(namePokemon === pokemon.name){
                            return <CardPokemons pokemons={pokemons} namePokemon={namePokemon} key={index} />;
                        }
                    })
                }
            </div>
            
            <Footer />      
        </>
    );
}