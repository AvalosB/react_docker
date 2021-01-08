import logo from './logo.svg';
import './App.css';
import BooksList from "./components/displayAllBooks"
import BookDetails from "./components/bookDetails"
import React from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'
const fetch = require('node-fetch');

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      booksList: []
    }
  }

  componentDidMount(){
    var url = "http://localhost:3002/books";
    const getBooks = async () => {
      const response = await fetch(url)//.then(response => console.log(response.json()));
      const data = await response.json();
      console.log(data)

      this.setState({ booksList: data })
    }
    getBooks();
  }

  render(){
      return ( 
        <>
        <p>hello</p>
        <Router>
          <ul><Link to='/'>Home</Link></ul> 
          <ul><Link to='/displayAllBooks'>View all books</Link></ul>


          <Switch>
            <Route exact path='/'><Home/></Route>
            <Route exact path='/displayAllBooks'><BooksList booksList={this.state.booksList} /></Route>
            <Route path='/displayAllBooks/:bookId/'> <BookDetails booksList={this.state.booksList} /> </Route>
          </Switch>

        </Router>
        </>
      );
  }
}
//
export default App;










// import logo from './logo.svg';
// import './App.css';
// import BooksList from "./components/displayAllBooks"
// import BookDetails from "./components/bookDetails"
// import React from 'react';
// import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
// const fetch = require('node-fetch');

// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       booksList: []
//     }
//   }

//   componentDidMount(){
//     var url = "http://localhost:3001/books";
//     const getBooks = async () => {
//       const response = await fetch(url)//.then(response => console.log(response.json()));
//       const data = await response.json();
//       console.log(data)

//       this.setState({ booksList: data })
//     }
//     getBooks();
//   }

//   render(){
//       return ( 
//         <Router>
//           <Switch>
//             <Route exact path='/books'><BooksList booksList={this.state.booksList} /></Route>
//             <Route path='/books/:bookId/' component={BookDetails} c> <BookDetails booksList={this.state.booksList} /> </Route>
//           </Switch>

//         </Router>
//       );
//   }
// }
// //
// export default App;
