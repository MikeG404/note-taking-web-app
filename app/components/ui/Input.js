import { Search } from '../assets/svg';
import styles from './input.module.css';

export default function Input({ placeholder = "Rechercher...", value, onChange, ...props }) {
    return (
        <div className={styles.input}>
            <Search />
            <input 
                type="text" 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...props}
            />
        </div>
    )
}