'use client';
import NoteList from "../components/notes/NoteList";
import Input from "../components/ui/Input";
import { useNoteStore } from "@/store/useNoteStore";
import { useState } from "react";

export default function SearchNote() {
    const searchNotes = useNoteStore((state) => state.searchNotes);
    const [query, setQuery] = useState('');

    const filteredNotes = searchNotes(query, { byTitle: true, byContent: true, byTags: true });

    const message = query
        ? `All notes matching "${query}" are displayed below`
        : 'All notes are displayed below';

    return (
        <main>
            <NoteList
                notes={filteredNotes}
                title='Search'
                message={message}
            >
                <Input
                    placeholder='Search notes...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoFocus
                />

            </NoteList>
        </main>
    )
}
