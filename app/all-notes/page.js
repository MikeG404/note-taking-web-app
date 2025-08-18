'use client';
import NoteList from "../components/notes/NoteList";
import { useNoteStore } from "@/store/useNoteStore";

export default function AllNotes() {
    const notes = useNoteStore((state) => state.notes) || [];
    return (
        <main>
            <NoteList notes={notes} title='All Notes'/>
        </main>
    )
}