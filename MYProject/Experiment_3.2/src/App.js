import React, { useState } from "react";
import BookList from "./BookList";

function App() {
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" }
  ]);
  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // Filtered books by search text
  const filteredBooks = books.filter(
    book =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  // Add new book handler
  const handleAddBook = () => {
    if (newTitle.trim() && newAuthor.trim()) {
      setBooks([...books, { title: newTitle, author: newAuthor }]);
      setNewTitle("");
      setNewAuthor("");
    }
  };

  // Remove book handler
  const handleRemoveBook = idx => {
    setBooks(books.filter((_, i) => i !== idx));
  };

  return (
    <div style={{ border: "2px solid #222", borderRadius: "8px", margin: "20px auto", padding: "20px", maxWidth: "600px", background: "white" }}>
      <h2>Library Management</h2>
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ width: "100%", marginBottom: "12px", padding: "7px" }}
      />
      <div style={{ display: "flex", gap: "8px", marginBottom: "18px" }}>
        <input
          type="text"
          placeholder="New book title"
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="New book author"
          value={newAuthor}
          onChange={e => setNewAuthor(e.target.value)}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
      <BookList books={filteredBooks} onRemove={handleRemoveBook} />
    </div>
  );
}

export default App;