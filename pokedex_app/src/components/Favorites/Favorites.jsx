import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default function Favorites(){
    return(
        <>
            <div className="linkHome">
                <Link className="linkHome__link" to="/">
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </Link>
            </div>
        </>
    );
}