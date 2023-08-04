import styles from "./style.module.scss"
import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";

export const CartModal = ({ cartList, setCartList, removeItem, handleModal }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div className={styles.modalOverlay} role="dialog">
         <div className={styles.modalContainer}>
            <div className={styles.modalHeader}>
               <h2 className="title3">Carrinho de compras</h2>
               <button aria-label="close" title="Fechar" onClick={() => handleModal(false)}>
                  <MdClose size={21}/>
               </button>
            </div>
            <div className={styles.modalContent}>
               <div>
                  <ul>
                     {cartList.length < 1 ? <p>Você ainda não possui itens no carrinho.</p>
                      : cartList.map((product) => (<CartItemCard key={product.id} product={product} removeItem={removeItem}/>))
                      }
                     
                  </ul>
               </div>
               <div className={styles.modalFooter}>
                  <div className={styles.priceAmount}>
                     <span className="headline dark">Total</span>
                     <span className="headline price">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                  </div>
                  <button onClick={() => setCartList([])} disabled={cartList.length < 1 ? true : false}>Remover todos</button>
               </div>
            </div>
         </div>
      </div>
   );
};
