import { TagSvg } from '../assets/svg';
import styles from './tag.module.css';

export default function Tag() {
    return (
        <div className={styles.tag}>
            <TagSvg />
            <p>React</p>
        </div>    
    )
}