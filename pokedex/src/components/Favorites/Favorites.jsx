import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default function Favorites(){
    return(
        <>
            <div className="linkHome">
                <Link className="linkHome__link" to="/">
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </Link>
            </div>
            <section className="container">
                <h1 className="title">Your Favorites Pokemon's</h1>

                <div className="cardsFavPokemons">
                    <div className="cardsFavPokemons__space">
                        <div className="cardsFavPokemons__card">
                            <FontAwesomeIcon className="card__iconFavorite" icon={filledHeart} />
                            <div className="card__borderImg">
                                <img src="https://cdn.pixabay.com/photo/2016/07/23/02/32/magikarp-1536179_960_720.png" alt="Pokemon" />
                            </div>
                            <div className="card__content">
                                <h2>Magicarp</h2>
                                <p>water</p>
                            </div>
                        </div>

                        <div className="cardsFavPokemons__card">
                            <FontAwesomeIcon className="card__iconFavorite" icon={filledHeart} />
                            <div className="card__borderImg">
                                <img src="https://cdn.pixabay.com/photo/2016/07/23/02/32/magikarp-1536179_960_720.png" alt="Pokemon" />
                            </div>
                            <div className="card__content">
                                <h2>Magicarp</h2>
                                <p>water</p>
                            </div>
                        </div>

                        <div className="cardsFavPokemons__card">
                            <FontAwesomeIcon className="card__iconFavorite" icon={filledHeart} />
                            <div className="card__borderImg">
                                <img src="https://cdn.pixabay.com/photo/2016/07/23/02/32/magikarp-1536179_960_720.png" alt="Pokemon" />
                            </div>
                            <div className="card__content">
                                <h2>Magicarp</h2>
                                <p>water</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}