'use client';
import { useMemo } from "react";
import { useNoteStore } from "@/store/useNoteStore";
import TagList from "../tags/TagList";
import NoteList from "../notes/NoteList";
import EditNote from "../notes/EditNote";

export default function DesktopLayout() {
    const notes = useNoteStore(state => state.notes);
    const currentNote = useNoteStore(state => state.currentNote);

    // Utiliser useMemo pour éviter les re-renders inutiles
    const tags = useMemo(() => {
        const allTags = notes.flatMap(note => note.tags || []);
        // Supprimer les doublons et créer des objets avec id
        const uniqueTags = [...new Set(allTags)];
        return uniqueTags.map((tag, index) => ({
            id: `tag-${index}`,
            name: tag
        }));
    }, [notes]);

    return (
        <div className="desktop-container">
            {/* Sidebar */}
            <aside className="desktop-sidebar">
                <nav className="desktop-nav">
                    <div className="nav-item">All Notes</div>
                    <div className="nav-item">Archived Notes</div>
                </nav>
                <TagList tags={tags} title="Tags" />
            </aside>

            {/* Main Content */}
            <main className="desktop-main desktop-content">
                <header>
                    {/* Personalize the header */}
                </header>
                <div style={{ display: 'flex', gap: '20px' }}>
                    {/* Main content */}
                    <NoteList notes={notes} />
                    <div style={{ flex: 1 }}>
                        <EditNote currentNote={currentNote} />
                    </div>
                </div>
            </main>
        </div>
    )
}
