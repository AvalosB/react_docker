const fs = require("fs");
const express = require('express');
const app = express();
const port = 3002;
const cors = require('cors');
const { createRequireFromPath } = require("module");
app.use(cors());

const library = JSON.parse(fs.readFileSync('books.json'));

app.get('/books' , (req, res) =>{
    res.status(200).send(library);

});

app.get('/books/:bookId', function(req,res){
    //console.log(req.params.bookId);
    let selection = []
    for(var i in library){
        if(library[i].bookId === req.params.bookId){
            selection = library[i];
        }
    }
    res.status(200).send(selection);
})

app.get('/books/:bookId/checkout/:userId' , (req, res) => {
    // console.log(req.params);
    // res.json(library);
    var bookRequest = {};
    for(var i in library){
        if(library[i].bookId === req.params.bookId){
            bookRequest = library[i];
        }
    }
    //console.log(library);
    if(bookRequest.checkOut === null){
        var currentTime = new Date();
        currentTime.setDate(currentTime.getDate()+14);
        bookRequest.checkOut = {dateDueBack: currentTime, userId: req.params.userId}
        console.log(bookRequest);
        res.send(bookRequest);
    } else {
        if(bookRequest.checkOut.userId === req.params.userId){
            console.log("Book is Already Checked Out By You")
        res.send("Book is Already Checked Out By You")
        } else {
        console.log("Book is Already Checked Out")
        res.status(200.).send("Book is Already Checked Out")
    }}
});

app.get('/books/:bookId/return', (req,res) => {
    var bookRequest = {};
    for(var i in library){
        if(library[i].bookId === req.params.bookId){
            bookRequest = library[i];
        }
    }
    if(bookRequest.checkOut == null) { 
        console.log("This book is already here")
        res.send("This book is already here")}
    else{
        bookRequest.checkOut = null
        console.log("Thank you for returning " + bookRequest.Title)
        res.send("Thank you for returning " + bookRequest.Title)
    }
})

//if book is already checked out, should return due date

app.listen(port, () => console.log("Listening at port " + port ));