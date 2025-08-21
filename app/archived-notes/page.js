'use client';
import NoteList from "../components/notes/NoteList"
import { useNoteStore } from "@/store/useNoteStore"

export default function ArchivedNote() {
    const archivedNotes = useNoteStore((state) => state.archivedNotes);

    return (
        <main>
            <NoteList notes={archivedNotes} title='Archived Notes' message='All your archived notes are store here. You can restore or delete them anytime.' />
        </main>
    )
}
