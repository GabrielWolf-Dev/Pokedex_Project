import React from 'react';

import './style.css';

export default function Pagination({ pokePerPage, totalPokes, paginate }){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPokes / pokePerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <section className="pagination">
            <div className="pagination__space">
                {pageNumbers.map((numbers, index) => {
                    return(
                        <div key={index} className="pagination__page" onClick={() => paginate(numbers)}>
                            <p>{numbers}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}