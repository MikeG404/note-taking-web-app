'use client';
import { useParams, useRouter } from 'next/navigation';
import { useNoteStore } from '@/store/useNoteStore';
import NoteList from '../../components/notes/NoteList';
import { ChevronLeft } from '../../components/assets/svg';
import styles from './page.module.css';

export default function TaggedNotesPage() {
    const params = useParams();
    const router = useRouter();
    const tagName = decodeURIComponent(params.tag);

    const notes = useNoteStore((state) => state.notes);

    // Filtrer les notes qui contiennent le tag
    const filteredNotes = notes.filter(note =>
        note.tags.includes(tagName)
    );

    const handleGoBack = () => {
        router.back();
    };

    return (
        <main>
            <div className={styles.goBackButton} onClick={handleGoBack}>
                <ChevronLeft />
                <span className={styles.goBackText}>Go Back</span>
            </div>

            <NoteList
                notes={filteredNotes}
                title={`Notes Tagged: ${tagName}`}
                message={`All notes with the "${tagName}" tag are shown here.`}
            />
        </main>
    );
}
