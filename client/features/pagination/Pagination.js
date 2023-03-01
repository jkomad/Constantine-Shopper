import '../styles/Pagination.css'
import React, { useEffect } from 'react'

const Pagination = ({itemsPerPage, totalItems, currentPage, setCurrentPage}) => {
    useEffect(() => {

    }, [currentPage])

    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    const handleClick = (evt, pageNumber) => {
        evt.preventDefault()
        const pages = evt.target.parentElement.childNodes
        for(let i = 0; i < pages.length; i++) {
            pages[i].style.backgroundColor = ''
        }
        evt.target.style.backgroundColor = 'grey'
        setCurrentPage(pageNumber)
    }

    return (
        <nav className='page-nav'>
            <ul className="pagination">
                {pageNumbers.map((pageNumber) => {
                    return (
                    <li key={pageNumber} className="page-item" onClick={(evt) => {handleClick(evt, pageNumber)
                    }}>
                    {pageNumber}
                    </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Pagination