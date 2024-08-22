import ProductCard from '../components/ProducCard'
import Beagle from '../assets/Beagle.jpg'
import Chihuahua from '../assets/Chihuahua.jpg'
import Husky from '../assets/Husky-Siberiano.jpg'
import Poodle from '../assets/Poodle.jpg'
import ShitZu from '../assets/Shit-Tzu.jpg'
import Pomerania from '../assets/Pomerania.jpg'
import '../styles/Products.css'



export default function Products(){
    const products = [
        {
          id: 1,
          name: "BEAGLE",
          description: "Perro mediano, amigable y enérgico. Destaca por su excelente olfato y curiosidad. Pelaje corto y orejas largas.",
          image: Beagle,
        },
        {
          id: 2,
          name: "CHIHUAHUA",
          description: "Pequeño pero valiente, muy leal. Puede tener pelaje corto o largo, con una distintiva cabeza en forma de manzana",
          image: Chihuahua,
        },
        {
          id: 3,
          name: "HUSKY SIBERIANO",
          description: "Raza resistente y hermosa, originaria de Siberia. Amigable, con ojos claros y pelaje denso, ideal para climas fríos",
          image: Husky,
        },
        {
          id: 4,
          name: "POODLE",
          description: "Elegante e inteligente, con pelaje rizado. Altamente entrenable y sociable, adaptable a diferentes estilos de vida.",
          image: Poodle,
        },
        {
          id: 5,
          name: "POMERANIA",
          description: "Pequeño y esponjoso, con apariencia de león en miniatura. Enérgico, curioso y leal.",
          image: Pomerania,
        },
        {
          id: 6,
          name: "SHIT TZU",
          description: "Pequeño y robusto, con pelaje largo y sedoso. Cariñoso y alegre, disfruta de la compañía humana.",
          image: ShitZu,
        },
        
      ];

    return (
    <section className="catalog">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );

}