import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown, faHeart as HeartFilled } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartBorder } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import './style.css';

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
                {/*-- SearchPokemon Component --*/}
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
                {/*-- SearchPokemon Component --*/}

                {/*-- cardPokemons Component --*/}
                <section className="cardsPokemons">
                    <div className="cardsPokemons__space">
                        <div className="cardsPokemons__card">
                            <FontAwesomeIcon className="card__iconFavorite" icon={heartBorder} />
                            <div className="card__borderImg">
                                <img src="https://cdn.pixabay.com/photo/2016/07/23/02/32/magikarp-1536179_960_720.png" alt="Pokemon" />
                            </div>
                            <div className="card__content">
                                <h2>Magicarp</h2>
                                <p>water</p>
                            </div>
                        </div>

                        <div className="cardsPokemons__card">
                            <FontAwesomeIcon className="card__iconFavorite" icon={heartBorder} />
                            <div className="card__borderImg">
                                <img src="https://cdn.pixabay.com/photo/2016/07/23/02/32/magikarp-1536179_960_720.png" alt="Pokemon" />
                            </div>
                            <div className="card__content">
                                <h2>Magicarp</h2>
                                <p>water</p>
                            </div>
                        </div>

                        <div className="cardsPokemons__card">
                            <FontAwesomeIcon className="card__iconFavorite" icon={heartBorder} />
                            <div className="card__borderImg">
                                <img src="https://cdn.pixabay.com/photo/2016/07/23/02/32/magikarp-1536179_960_720.png" alt="Pokemon" />
                            </div>
                            <div className="card__content">
                                <h2>Magicarp</h2>
                                <p>water</p>
                            </div>
                        </div>
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
                {/*-- cardPokemons Component --*/}
            </div>
            <footer>
                <section className="credits">
                    <div className="credits__api">
                        <a href="#">API Link</a>
                    </div>
                    <div className="credits__author">
                        <a href="#">
                            <p>By Gabriel Wolf</p>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </div>
                </section>
            </footer>
        </>
    );
}