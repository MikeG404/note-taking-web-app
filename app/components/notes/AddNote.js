'use client';
import { Clock, TagSvg, ChevronLeft } from '../assets/svg';
import styles from './add-note.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useNoteStore } from '@/store/useNoteStore';
import { useState } from 'react';

export default function CreateNote() {
    const router = useRouter();
    const addNote = useNoteStore((state) => state.addNote);
    const [note, setNote] = useState({
        title: '',
        content: '',
        tags: '',
    });

    const handleSave = () => {
        const noteWithArrayTags = {
            ...note,
            tags: note.tags ? note.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0) : []
        };
        addNote(noteWithArrayTags);
        router.push('/all-notes');
    }

    return (
        <section className='grid-mobile'>
            <div className={styles.addNoteHeader}>
                <Link href="/all-notes" style={{ display: 'flex', alignItems: 'center', gap: 'px' }}>
                    <ChevronLeft />
                    Go Back
                </Link>
                <div className={styles.addNoteHeaderLinks}>
                    <Link href="/all-notes">Cancel</Link>
                    <button onClick={handleSave}>Save</button>
                </div>
            </div>

            <div className={styles.addNoteContentHeader}>
                <input value={note.title} onChange={(e) => setNote({ ...note, title: e.target.value })} className='text-preset-2' type="text" placeholder="Enter Title..." />
                <div className={styles.addNoteTags}>
                    <div className={styles.addNoteItem}>
                        <TagSvg width={16} height={16} />
                        <span className='text-preset-6'>Tags</span>
                        <textarea value={note.tags} onChange={(e) => setNote({ ...note, tags: e.target.value })} className='text-preset-6' placeholder="Add tags separated by commas (e.g. Work, Planning)" />
                    </div>
                    <div className={styles.addNoteItem}>
                        <Clock />
                        <span className='text-preset-6'>Last edited</span>
                        <p className='text-preset-6'>Not yet saved</p>
                    </div>
                </div>
            </div>
            <div className={styles.addNoteContentBody}>
                <textarea value={note.content} onChange={(e) => setNote({ ...note, content: e.target.value })} placeholder="Enter Content" />
            </div>
        </section>
    )
}
