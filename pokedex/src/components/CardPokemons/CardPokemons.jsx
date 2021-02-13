import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartBorder } from '@fortawesome/free-regular-svg-icons';

import './style.css';

export default function CardPokemons(){

    return(
        <>
            <section className="cardsPokemons">
                <div className="cardsPokemons__space">
                    <div className="cardsPokemons__card">
                        <FontAwesomeIcon className="card__iconFavorite" icon={heartBorder} />
                        <div className="card__borderImg">
                            <img src="https://cdn.pixabay.com/photo/2016/07/23/02/32/magikarp-1536179_960_720.png" alt="Pokemon" />
                        </div>
                        <div className="card__content">
                            <h2>Nome do Pokemon</h2>
                            <p>water</p>
                        </div>
                    </div>

                    <div className="cardsPokemons__card">
                        <FontAwesomeIcon className="card__iconFavorite" icon={heartBorder} />
                        <div className="card__borderImg">
                            <img src="https://cdn.pixabay.com/photo/2016/07/23/02/32/magikarp-1536179_960_720.png" alt="Pokemon" />
                        </div>
                        <div className="card__content">
                            <h2>Nome do Pokemon</h2>
                            <p>water</p>
                        </div>
                    </div>

                    <div className="cardsPokemons__card">
                        <FontAwesomeIcon className="card__iconFavorite" icon={heartBorder} />
                        <div className="card__borderImg">
                            <img src="https://cdn.pixabay.com/photo/2016/07/23/02/32/magikarp-1536179_960_720.png" alt="Pokemon" />
                        </div>
                        <div className="card__content">
                            <h2>Nome do Pokemon</h2>
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
        </>
    );
}