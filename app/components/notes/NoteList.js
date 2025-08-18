import styles from './note-list.module.css'
import Note from "./Note"
import FloatingButton from '../ui/FloatingButton'

export default function NoteList({notes, title, message, children}) {
    return (
        <section className={`grid-mobile ${styles.noteList}`}>
            <div className={styles.noteListText}>
                <h2 className="text-preset-1">{ title }</h2>
                { children }
                <p className='text-preset-5'>{ message }</p>
            </div>
            {notes && notes.map((note) => (
                <Note key={note.id} note={note} />
            ))}
                <FloatingButton />
        </section>
    )
}