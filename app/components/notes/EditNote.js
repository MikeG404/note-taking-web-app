'use client';
import { Clock, TagSvg, ChevronLeft, Trash, Archive } from '../assets/svg';
import styles from './add-note.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useNoteStore } from '@/store/useNoteStore';
import { useState, useEffect, Fragment } from 'react';
import ValidationModal from '../ui/ValidationModal';

export default function EditNote({ noteId }) {
    const router = useRouter();
    const getNoteById = useNoteStore((state) => state.getNoteById);
    const updateNote = useNoteStore((state) => state.updateNote);
    const deleteArchivedNote = useNoteStore((state) => state.deleteArchivedNote);
    const archiveNote = useNoteStore((state) => state.archiveNote);
    const [note, setNote] = useState({
        title: '',
        content: '',
        tags: '',
    });
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showArchiveModal, setShowArchiveModal] = useState(false);

    useEffect(() => {
        if (noteId) {
            const existingNote = getNoteById(parseInt(noteId));
            if (existingNote) {
                setNote({
                    title: existingNote.title,
                    content: existingNote.content,
                    tags: existingNote.tags.join(', '),
                });
            }
        }
    }, [noteId, getNoteById]);

    const handleSave = () => {
        const noteWithArrayTags = {
            title: note.title,
            content: note.content,
            tags: note.tags ? note.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0) : []
        };
        updateNote(parseInt(noteId), noteWithArrayTags);
        router.push('/archived-notes');
    }

    const handleDelete = () => {
        deleteArchivedNote(parseInt(noteId));
        setShowDeleteModal(false);
        router.push('/archived-notes');
    }

    const handleArchive = () => {
        archiveNote(parseInt(noteId));
        setShowArchiveModal(false);
        router.push('/archived-notes');
    }

    return (
        <Fragment>
            <section className='grid-mobile'>
                <div className={styles.addNoteHeader}>
                    <Link href="/archived-notes" style={{ display: 'flex', alignItems: 'center', gap: 'px' }}>
                        <ChevronLeft />
                        Go Back
                    </Link>
                    <div className={styles.addNoteHeaderLinks}>
                        <button onClick={() => setShowDeleteModal(true)}>
                            <Trash />
                        </button>
                        <button onClick={() => setShowArchiveModal(true)}>
                            <Archive />
                        </button>
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

            {showDeleteModal && (
                <ValidationModal
                    type="delete"
                    onCancel={() => setShowDeleteModal(false)}
                    onConfirm={handleDelete}
                />
            )}

            {showArchiveModal && (
                <ValidationModal
                    type="archive"
                    onCancel={() => setShowArchiveModal(false)}
                    onConfirm={handleArchive}
                />
            )}
        </Fragment>
    )
}
