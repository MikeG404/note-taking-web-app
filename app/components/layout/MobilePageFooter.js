import styles from './mobile-page-footer.module.css';
import Link from 'next/link';

import { Home, Search, Inbox, Tag, Setting } from '../assets/svg';


export default function MobilePageFooter() {
    return (
        <nav className={styles.mobilePageFooter}>
            <Link href='/all-notes'>
                <Home />
            </Link>
            <Link href='/search-notes'>
                <Search />
            </Link>
            <Link href='/inbox'>
                <Inbox />
            </Link>
            <Link href='/tags'>
                <Tag />
            </Link>
            <Link href='/settings'>
                <Setting />
            </Link>
        </nav>
    )
}