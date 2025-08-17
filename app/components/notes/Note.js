import styles from './note.module.css';

export default function Note() {
    return (
        <div className={styles.note}>
            <p className="text-preset-3">React Performance Optimization</p>
            <div className={styles.tag}>
                <span className='text-preset-6 radius-4'>Dev</span>
                <span className='text-preset-6 radius-4'>React</span>
            </div>
            <p className="text-preset-6">29 Oct 2024</p>
        </div>
    )
}