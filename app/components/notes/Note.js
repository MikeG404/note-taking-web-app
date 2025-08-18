import styles from './note.module.css';

export default function Note({note}) {
    return (
        <div className={styles.note}>
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