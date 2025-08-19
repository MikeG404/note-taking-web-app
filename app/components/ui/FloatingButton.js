import styles from './floating-button.module.css';
import { Plus } from "../assets/svg";
import Link from 'next/link';

export default function FloatingButton({ href }) {
    return (
        <Link href={href} className={`${styles.floatingButton}`}>
            <Plus />
        </Link>
    )
}
