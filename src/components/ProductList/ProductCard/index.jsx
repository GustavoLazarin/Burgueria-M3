import styles from "./style.module.scss"

export const ProductCard = ({ product }) => {
    return(
        <li className={styles.productCard}>
            <img src={product.img} alt={product.name} />
            <div>
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <span className="price">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="md">Adicionar</button>
            </div>
        </li>
    )
}