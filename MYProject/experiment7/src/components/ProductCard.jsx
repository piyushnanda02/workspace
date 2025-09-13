// ProductCard.jsx
export default function ProductCard({ name, price, inStock }) {
    return (
      <div style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "200px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}>
        <h3 style={{ fontWeight: "bold" }}>{name}</h3>
        <p>Price: ${price}</p>
        <p>Status: {inStock ? "In Stock" : "Out of Stock"}</p>
      </div>
    );
  }