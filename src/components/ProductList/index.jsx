import styles from "./style.module.scss"
import { ProductCard } from "./ProductCard";
import { MdDelete } from "react-icons/md";

export const ProductList = ({ productList, filter, cleanFilter, addItemToCart }) => {
   return (
      <div className="container">
         {filter? (
            <div className="flex">
               <span>Exibindo resultado de busca por:</span>
               <button className="filter-button" title="Remover filtro" onClick={cleanFilter}>{filter}<MdDelete size={16}/></button>
            </div>
         ) : null}

         {productList.length > 0 ? 
         (<ul className={styles.productList}>
            {productList.map((product) => (
               <ProductCard key={product.id} product={product} addToCart={addItemToCart} />
            ))}
         </ul>) : (<p>Nenhum resultado encontrado...</p>) }
         
      </div>
   );
};
