import styles from "./style.module.scss"
import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList }) => {
   return (
      <div className="container">
         <ul className={styles.productList}>
            {productList.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
         </ul>
      </div>
   );
};
