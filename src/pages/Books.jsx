import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Books.css'; // استيراد ملف CSS لتصميم الصفحة

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3308/books");
        setBooks(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) =>{
    try {
      await axios.delete("http://localhost:3308/books/"+id)
      window.location.reload()
    } catch (err) {
      console.error(err);
      
    }
  }

  return (
    <div className="books-container">
      <h1 className="title">Mamon Books Shop</h1>
      <div className="books-grid">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            {book.cover && <img className="book-cover" src={book.cover} alt="cover" />}
            <h2 className="book-title">{book.title}</h2>
            <p className="book-desc">{book.desc}</p>
            <span className="book-price">${book.price}</span>
            <button onClick={()=>handleDelete(book.id)} >Delete</button>
            <button><Link to={`/update/${book.id}`} >Update</Link></button>
          </div>
        ))}
      </div>
      <Link to="/add" className="add-book-link">Add New Book</Link>
    </div>
  );
};

export default Books;
