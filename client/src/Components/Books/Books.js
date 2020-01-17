import React from "react";

import BooksDetails from "./BooksDetails";
import BooksChapters from "./BooksChapters";
import BooksList from "./BooksList";

import "./Books.css";

const Books = () => {
    return (
        <React.Fragment>
            <BooksDetails />
            <BooksChapters />
            <BooksList />
        </React.Fragment>
    );
};

export default Books;
