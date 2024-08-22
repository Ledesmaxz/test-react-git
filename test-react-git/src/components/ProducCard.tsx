
import '../styles/ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <div className="Product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
}


