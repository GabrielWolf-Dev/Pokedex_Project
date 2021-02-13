import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as HeartFilled } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './style.css';
import SearchPokemon from '../SearchPokemon';
import CardPokemons from '../CardPokemons';
import Footer from '../Footer';


export default function Home(){
    return(
        <>
            <div className="linkFavorites">
                <Link className="linkFavorites__link" to="/favorites">
                    <FontAwesomeIcon icon={HeartFilled}/>
                </Link>
            </div>
            
            <div className="container">
                <h1 className="title">Pokedex</h1>
                <SearchPokemon />
                <CardPokemons />
            </div>
            
            <Footer />      
        </>
    );
}