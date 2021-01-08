import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = ({booksList}) => {
    const { bookId } = useParams()
    const book = booksList.find(b => b.id === Number(bookId))

    const bookInfo = book ? (
        <> 
          <h3>Book:{book.book_title}</h3>
          <h3>Author:{book.book_title}</h3>
          <p> <b>ISBN#:</b> {book.isbn_number}</p>
          <p><b>Due:</b> {book.due_date}</p>
          <p><b>Availability:</b> {book.checked_out ? "not available" : "available"}</p>
        </>
    ) : <h1>No messages</h1>

    return (
        <p>
           <h1>Message Info</h1> { bookInfo }
        </p>
    )
}

export default BookDetails;



// import React from 'react';
// import { useParams } from 'react-router-dom';

// const BookDetails = ({booksList}) => {
//     const { bookId } = useParams()
//     // const book = booksList.find(p => p.id === Number(bookId))

//     // const bookInfo = 
//     //       <h3>Book:{booksList[1].book_title}</h3>

//     console.log(booksList)

//     return (
//         <p>
//            {booksList.map(book => book.id === bookId? <h2>title: {book.book_title}</h2>: console.log(bookId))}
//         </p>
//     )
// }

// export default BookDetails;



// import React from 'react';
// import { useParams } from 'react-router-dom';

// const BookDetails = ({booksList}) => {
//     // const { bookId } = useParams()
//     // const book = {}
//     // //const book = details.find(b => b.id === Number(bookId))


//     // for(var i in details){
//     //     if(details[i].id === bookId){
//     //         book = details[i]; 
//     //         //return( <> { book.map(b => <h3> {b.book_title} </h3>) } </> )
//     //     }
//     // }

//     return (
//         <div>
//             <h3> { booksList[0] } </h3>
//             Hello
//         </div>
//     )
// }

//     // const display = () => {
    
//     //     // return (
//     //         //     <>
//     //         //     <h3>Book: {book.book_title}</h3>
//     //         //     <p>Author: {book.author}</p>
//     //         //     <p>ISBN#: {book.isbn_number}</p>
//     //         //     <p>Checkout out: {book.check_out ? "book is checked out": "Book is not cheked out"}</p>
//     //         //     <p>Due: {book.due_date}days</p>
//     //         //     </>
//     //         // )
//     // }


// export default BookDetails;