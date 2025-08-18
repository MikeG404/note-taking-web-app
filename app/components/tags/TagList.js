import styles from './tag-list.module.css';
import Tag from "./Tag";

export default function TagList({title}) {
    return (
        <section className={`grid-mobile ${styles.tagList}`}>
        <div className={styles.tagListText}>
            <h2 className="text-preset-1">{ title }</h2>
        </div>
            <Tag />
            <Tag />
            <Tag />
    </section>    
    )
}