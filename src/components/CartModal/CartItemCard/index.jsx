import styles from "./style.module.scss"
import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product, removeItem }) => {
   return (
      <li className={styles.cardContainer}>
         <div className={styles.cardContent}>
            <img src={product.img} alt={product.name} />
            <h3 className="title3">{product.name}</h3>
         </div>
         <button className={styles.deleteButton} aria-label="delete" title="Remover item" onClick={() => removeItem(product.id)}>
            <MdDelete size={21} />
         </button>
      </li>
   );
};
