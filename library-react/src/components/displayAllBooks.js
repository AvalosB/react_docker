import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import BookDetails from './bookDetails'

const BooksList = ({booksList}) => {
    const match = useRouteMatch()

    return (
        <>
        <h3>Here are all available books! </h3>
        <p>Click to see details</p>
        <ul>
        { booksList.map(items => {
            return(
                <li><Link to={`${match.url}/${items.id}`}>Book: {items.book_title}</Link></li>
            )
        }) }
        </ul>
        </>
    )
}

export default BooksList;

// import React from 'react'
// import styled from 'styled-components'
// import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
// import BookDetails from './bookDetails';
// const fetch = require('node-fetch');


// const bookInfo = styled.div`
// `
// // function getBooks(){
// //     const response = await fetch(url).then(response => console.log(response.json()));
// // }


// function BooksList({booksList}) {
//     return(
//         <> 
//         <Router>
//         { booksList.map( book => <li><bookInfo><Link to={`/books/${book.id}`} >{ book.book_title }</Link> </bookInfo></li> ) }
//         </Router>    
//         </>
//     )
// }

// export default BooksList;