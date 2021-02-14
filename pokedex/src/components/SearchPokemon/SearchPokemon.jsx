import React from 'react';

import './style.css';

export default function SearchPokemon({ setNamePokemon }){
    return(
        <form>
            <div className="search">
                <input type="text" placeholder="Search a Pokemon" onChange={e => setNamePokemon(e.target.value) } />
            </div>
        </form>
    );
}