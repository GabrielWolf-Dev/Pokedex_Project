import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './style.css';
import SearchPokemon from '../SearchPokemon';
import CardPokemons from '../CardPokemons';
import Footer from '../Footer';
import Description from '../Description/Description';
import Pagination from '../Pagination/Pagination';


export default function Home(){
    const [namePokemon, setNamePokemon] = useState("");
    const [pokemons, setPokemons] = useState([]);
    const [pokePerPage] = useState(45);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=500&offset=2`);
        const data = await response.json();

        setPokemons(data.results);
    }, []);
    
    const indexLastPoke = currentPage * pokePerPage;
    const indexFirstPoke = indexLastPoke - pokePerPage;
    const pokemonNames = pokemons.map(pokemon => pokemon.name);
    const currentPokemon = pokemonNames.slice(indexFirstPoke, indexLastPoke);
    
    const paginate = (numbers) => setCurrentPage(numbers);

    return(
        <>
            <div className="linkFavorites">
                <Link className="linkFavorites__link" to="/favorites">
                    <FontAwesomeIcon icon={filledHeart}/>
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
                <Description setNamePokemon={setNamePokemon} currentPokemons={currentPokemon} />
                <Pagination paginate={paginate} pokePerPage={pokePerPage} totalPokes={pokemonNames.length} />
            </div>
            
            <Footer />      
        </>
    );
}