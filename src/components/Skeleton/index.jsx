import styles from "./style.module.scss"

export  const Skeleton = () => {
    return (
        <div className="container">
            <ul className={styles.skeletonList}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </ul>
        </div>
    )
}