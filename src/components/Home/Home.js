import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Home.css'

const Home = () => {
    const [users, setUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setUsers(data.slice(0, 67)))
    }, [])
    const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map(user => {
        return (
            <div className='user'>
                <h3>{user.id}</h3>
                <p>{user.title}</p>
            </div>
        )
    })
    const pageCount = Math.ceil(users.length / usersPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }
    return (
        <div className='Home'>
            {displayUsers}
            <ReactPaginate
                previousLabel={'Previous '}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'paginationBttns'}
                previousLinkClassName={'previousBttn'}
                nextLinkClassName={'nextBttn'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationbActive'}
            ></ReactPaginate>
        </div>
    );
};

export default Home;