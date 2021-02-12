import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default function SearchPokemon(){
    return(
        <form>
            <div className="search">
                <input type="text" placeholder="Search a Pokemon" />
                <div  className="search__iconBox">
                    <FontAwesomeIcon className="search__icon" icon={faSearch} />
                </div>
            </div>

            <div className="typePokemon">
                <input type="text" />
                <div className="typePokemon__iconBox">
                    <FontAwesomeIcon icon={faChevronDown} className="typePokemon__icon" />
                </div>
            </div>
        </form>
    );
}