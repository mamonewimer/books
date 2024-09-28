import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Add.css'; // استيراد ملف CSS لتصميم الصفحة

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3308/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add-container">
      <h1 className="add-title">Add New Book</h1>
      <form className="add-form" onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Title"
          onChange={handleChange}
          name="title"
          required
        />
        <input
          type="text"
          placeholder="Description"
          onChange={handleChange}
          name="desc"
          required
        />
        <input
          type="number"
          placeholder="Price"
          onChange={handleChange}
          name="price"
          required
        />
        <input
          type="text"
          placeholder="Cover URL"
          onChange={handleChange}
          name="cover"
          required
        />
        <button type="submit" className="add-button">Add Book</button>
      </form>
    </div>
  );
};

export default Add;
