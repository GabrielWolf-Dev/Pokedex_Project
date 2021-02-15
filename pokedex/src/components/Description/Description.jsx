import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default function Description({ currentPokemons, setNamePokemon }){

    function selectPokemon(e){
        //console.log(e.target.textContent);
        setNamePokemon(e.target.textContent);
    }

    return(
        <section className="description">
            <h2>Descrição</h2>
            <p>Mecanismo de pesquisa criado principalmente para aplicar conceitos estudados sobre consumo de API's.</p>
            <p>Aqui você pode achar alguns dos vários pokemons que são do desenho.</p>
            <p>Veja abaixo alguns dos pokemons disponíveis:</p>
            <FontAwesomeIcon icon={faArrowDown} />
            <div className="description__pokemonList">
                {currentPokemons.map((pokemons, index) => {
                    return(
                        <p key={index} className="pokemonList_name" onClick={selectPokemon}>
                            {pokemons}
                        </p>
                    );
                })}
            </div>
        </section>
    );
}