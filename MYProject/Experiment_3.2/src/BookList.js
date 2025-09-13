import React from "react";

function BookList({ books, onRemove }) {
  return (
    <div>
      {books.map((book, idx) => (
        <div key={idx} style={{ display: "flex", alignItems: "center", margin: "8px 0", border: "1px solid #ccc", borderRadius: "6px", padding: "10px" }}>
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>{book.title}</span>
          <span>by {book.author}</span>
          <button onClick={() => onRemove(idx)} style={{ marginLeft: "auto" }}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default BookList;
