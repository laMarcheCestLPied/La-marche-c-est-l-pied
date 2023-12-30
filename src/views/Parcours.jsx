import React from 'react';
import { NavLink } from 'react-router-dom';

import Card from './../components/utils-components/Card';
import datas from './../data/parcours.json';
import PaginationCard from './../components/utils-components/PaginationCard';
import { useState } from 'react';

const Parcours = () => {
    
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const sortItems = datas.sort((a, b) => new Date(b.date) - new Date(a.date));
    const currentItems = sortItems.slice(itemOffset, endOffset);

    const imageLoad = (data) => {
        let datasPhoto = [];
        for (let i = 0; i < 5; i++) {
            datasPhoto.push(data.photos[i]);
        }
        return datasPhoto
        
    };
    

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % datas.length;
        setItemOffset(newOffset);
    };

    return (
        <section className="p-3">
            {currentItems
                .map((data, index) => (
                    <div key={index}>
                        {index === 0 && itemOffset === 0 && <h3>Dernier parcours effectué</h3>}
                        {((index === 1 && itemOffset === 0) || (index === 0 && itemOffset > 0)) && <h3>Les différents parcours</h3>}
                        <article className="border m-2 p-2">
                            <NavLink
                                to={`/La-marche-c-est-l-pied/details?parcours#${data.date}${data.alternative ? '&'+data.lieu : ''}`}
                                className="nav-link text-black"
                            >
                                <Card data={data} datasPhoto={imageLoad(data)} />
                            </NavLink>
                        </article>
                    </div>
                ))}
            <PaginationCard datasPerPage={itemsPerPage} totalDatas={datas.length} handlePageClick={handlePageClick} />
            <h5 className='text-center'>Nombres de Parcours : <span className='fw-bold'>{datas.length}</span> !</h5>
        </section>
    );
};

export default Parcours;
