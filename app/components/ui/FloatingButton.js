import styles from './floating-button.module.css';
import { Plus } from "../assets/svg";
import Link from 'next/link';

export default function FloatingButton() {
    return (
        <Link href='/' className={`${styles.floatingButton}`}>
            <Plus />
        </Link>
    )
}