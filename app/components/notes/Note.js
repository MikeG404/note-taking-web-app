import styles from './note.module.css';
import { useRouter } from 'next/navigation';

export default function Note({ note }) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/edit-note/${note.id}`);
    };

    return (
        <div className={styles.note} onClick={handleClick} style={{ cursor: 'pointer' }}>
            <p className="text-preset-3">{note.title}</p>
            <div className={styles.tag}>
                {note.tags.map((tag) => (
                    <span key={tag} className='text-preset-6 radius-4'>{tag}</span>
                ))}
            </div>
            <p className="text-preset-6">{note.date}</p>
        </div>
    )
}
