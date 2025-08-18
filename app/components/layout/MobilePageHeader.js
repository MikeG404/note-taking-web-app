import styles from './mobile-page-header.module.css';
import Image from "next/image";

export default function MobilePageHeader() {
    return (
        <header className={styles.mobilePageHeader}>
            <Image 
                src="/logo.png"
                alt="Logo de l'application"
                width={28}
                height={28}
                priority
            />
            <h1>Notes</h1>
        </header>
    )
}