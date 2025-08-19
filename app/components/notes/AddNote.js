import { Clock, TagSvg, ChevronLeft } from '../assets/svg';
import styles from './add-note.module.css';
import Link from 'next/link';

export default function CreateNote() {
    return (
        <section className='grid-mobile'>
            <div className={styles.addNoteHeader}>
                <Link href="/all-notes" style={{ display: 'flex', alignItems: 'center', gap: 'px' }}>
                    <ChevronLeft />
                    Go Back
                </Link>
                <div className={styles.addNoteHeaderLinks}>
                    <Link href="/all-notes">Cancel</Link>
                    <Link href="/all-notes">Save</Link>
                </div>
            </div>

            <div className={styles.addNoteContentHeader}>
                <input className='text-preset-2' type="text" placeholder="Enter Title..." />
                <div className={styles.addNoteTags}>
                    <div className={styles.addNoteItem}>
                        <TagSvg width={16} height={16} />
                        <span className='text-preset-6'>Tags</span>
                        <textarea className='text-preset-6' placeholder="Add tags separated by commas (e.g. Work, Planning)" />
                    </div>
                    <div className={styles.addNoteItem}>
                        <Clock />
                        <span className='text-preset-6'>Last edited</span>
                        <p className='text-preset-6'>Not yet saved</p>
                    </div>
                </div>
            </div>
            <div className={styles.addNoteContentBody}>
                <textarea placeholder="Enter Content" />
            </div>
        </section>
    )
}
