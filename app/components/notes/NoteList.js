import styles from './note-list.module.css'
import Note from "./Note"
import FloatingButton from '../ui/FloatingButton'

export default function NoteList() {
    return (
        <section className={`grid-mobile ${styles.noteList}`}>
            <h2 className="text-preset-1">All Notes</h2>
                <Note />
                <Note />
                <Note />
                <FloatingButton />
        </section>
    )
}