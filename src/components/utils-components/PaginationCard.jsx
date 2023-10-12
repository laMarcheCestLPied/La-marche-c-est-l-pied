import '../../assets/css/PaginationCard.css';

import React from 'react';
import ReactPaginate from 'react-paginate';

const PaginationCard = ({ datasPerPage, totalDatas, handlePageClick }) => {
    let nbPages = 0;

    const totalPages = (totalDatas) => {
        for (let i = 1; i <= Math.ceil(totalDatas / datasPerPage); i++) {
            nbPages = i;
        }
    };

    const pagination = () => {
        totalPages(totalDatas);
        if (nbPages > 1) {
            return (
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={nbPages}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={
                        'containerClassName'
                    }
                    pageClassName={
                        'pageClassName'
                    }
                    pageLinkClassName={
                        'pageLinkClassName'
                    }
                    previousClassName={
                        'previousClassName'
                    }
                    previousLinkClassName={
                        'pageLinkClassName'
                    }
                    nextClassName={
                        'previousClassName'
                    }
                    nextLinkClassName={
                        'pageLinkClassName'
                    }
                    breakClassName={
                        'previousClassName'
                    }
                    breakLinkClassName={
                        'breakLinkClassName'
                    }
                    activeLinkClassName={'cssALCN'}
                />
            );
        }
    };

    return (<div className="sticky left-0">{pagination()}</div>);
};

export default PaginationCard;
