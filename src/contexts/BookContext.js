import React, { createContext, useState }from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

export default function BookContextProvider(props) {
    const [books, setBooks] = useState([
        {title: 'Desert Solitude', author: 'Edward Abbey', id: 1},
        {title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', id: 2},
    ]);
const addBook = (title, book) => {
    setBooks([...books, {title: title, author: author, id: uuid() }])
}

const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
}

    return (
        <div>
            <BookContext.Provider value={{ books, addBook, removeBook }}>
                { props.children}
            </BookContext.Provider>
        </div>
    )
}
