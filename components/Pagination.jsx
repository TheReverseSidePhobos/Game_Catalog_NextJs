import React from 'react'

const Pagination = ({currentPage, paginate, gamesPerPage, totalGames}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
        pageNumbers.push(i);
        
    }

    
    return (
        <div className='container'>
            <div className="pagination_container">
                <button disabled={currentPage === 1 ? true : false} className={ 'pageBtn'} onClick={() => {paginate(currentPage - 1)}}>&#11164;</button>
                <ul className='pagination'>
                    {
                        pageNumbers.map((number) => (
                            <li className={currentPage === number ? 'activePage page_item' : 'page_item'} key={number}>
                                <a href="/" onClick={(e) => {e.preventDefault(); paginate(number)}}>
                                    {number}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <button disabled={currentPage === pageNumbers.length ? true : false} className='pageBtn' onClick={() => {paginate(currentPage + 1)}}>&#11166;</button>

            </div>
        </div>

    )
}

export default Pagination
