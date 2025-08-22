'use client';
import { TagSvg } from '../assets/svg';
import { useRouter } from 'next/navigation';
import styles from './tag.module.css';

export default function Tag({ tag }) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/tagged-notes/${encodeURIComponent(tag.name)}`);
    };

    return (
        <div className={styles.tag} onClick={handleClick} style={{ cursor: 'pointer' }}>
            <TagSvg />
            <p>{tag.name}</p>
        </div>
    );
}
