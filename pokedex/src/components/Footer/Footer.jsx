import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './style.css';

export default function Footer(){
    return(
        <footer>
            <section className="credits">
                <div className="credits__api">
                    <a target="_blank" href="https://pokeapi.co/">API Link</a>
                </div>
                <div className="credits__author">
                    <a target="_blank" href="https://github.com/GabrielWolf-Dev">
                        <p>By Gabriel Wolf</p>
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </div>
            </section>
        </footer>
    );
}