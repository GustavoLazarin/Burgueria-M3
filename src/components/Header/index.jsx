import styles from "./style.module.scss"
import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";

export const Header = ({ setFilter }) => {
   const [value, setValue] = useState("");

   const searchValue = (e) => {
      e.preventDefault();
      value !== "" ? setFilter(value) : null
      setValue("");
   }

   return (
      <header className={styles.header}>
         <div className="container">
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <div className={styles.inputsBox}>
               <button className={styles.cartButton}>
                  <MdShoppingCart size={27} />
                  <span className="strong">0</span>
               </button>
               <form onSubmit={searchValue}>
                  <input className="headline light"
                     type="text"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                     placeholder="Digitar Pesquisa"
                  />
                  <button className="buttonPrimary" type="submit">
                  <MdSearch size={21} />
                  </button>
               </form>
            </div>
         </div>
      </header>
   );
};
