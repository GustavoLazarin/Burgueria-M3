import styles from "./style.module.scss"
import { ProductCard } from "./ProductCard";
import { MdDelete } from "react-icons/md";

export const ProductList = ({ productList, filter, cleanFilter }) => {
   return (
      <div className="container">
         {filter? (
            <div className="flex">
               <span>Exibindo resultado de busca por:</span>
               <button className="filter-button" onClick={cleanFilter}>{filter}<MdDelete size={16}/></button>
            </div>
         ) : null}

         {productList.length > 0 ? 
         (<ul className={styles.productList}>
            {productList.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
         </ul>) : (<p>Nenhum resultado encontrado...</p>) }
         
      </div>
   );
};
