import React from 'react';

import './style.css';

export default function MessageWarning() {
    return(
        <section className="message">
            <h3 className="message__content">Você não adicionou nenhum pokemon favorito &#x1F641;</h3>
        </section>
    );
}