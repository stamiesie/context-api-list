import React, { useContext, useState }from 'react';
import { BookContext } from '../contexts/BookContext';

export default function BookForm() {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD BOOK', book: {
            title, author
        }});
        setTitle('');
        setAuthor('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="book title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <input 
                type="text" 
                    placeholder="author" 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <input 
                    type="submit"
                    value="Add Book" 
                />
            </form>
        </div>
    )
}
