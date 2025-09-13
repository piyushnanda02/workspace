// App.jsx
import ProductCard from "./components/ProductCard";

export default function App() {
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Products List</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProductCard name="Wireless Mouse" price={25.99} inStock={true} />
        <ProductCard name="Keyboard" price={45.5} inStock={false} />
        <ProductCard name="Monitor" price={199.99} inStock={true} />
      </div>
    </div>
  );
}