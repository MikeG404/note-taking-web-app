import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const useNoteStore = create(
    persist(
        immer(
            (set, get) => ({
                notes: [],
                archivedNotes: [],
                currentNote: null,

                addNote: (note) => {

                    const newNote = {
                        id: Date.now(),
                        title: note.title,
                        content: note.content,
                        tags: note.tags,
                        date: new Date().toLocaleDateString(),
                    }

                    set((state) => {
                        state.notes.push(newNote);
                    });
                },

                getNoteById: (id) => {
                    const state = get();
                    return state.notes.find(note => note.id === id);
                },

                updateNote: (id, updatedNote) => {
                    set((state) => {
                        const note = state.notes.find(note => note.id === id);
                        if (note) {
                            Object.assign(note, updatedNote);
                            note.date = new Date().toLocaleDateString();
                        }
                    });
                },

                deleteNote: (id) => {
                    set((state) => {
                        const noteIndex = state.notes.findIndex(note => note.id === id);
                        if (noteIndex !== -1) {
                            state.notes.splice(noteIndex, 1);
                        }
                    });
                },

                archiveNote: (id) => {
                    set((state) => {
                        const noteIndex = state.notes.findIndex(note => note.id === id);
                        if (noteIndex !== -1) {
                            const noteToArchive = state.notes[noteIndex];
                            noteToArchive.archivedAt = new Date().toLocaleDateString();
                            state.archivedNotes.push(noteToArchive);
                            state.notes.splice(noteIndex, 1);
                        }
                    });
                },

                deleteArchivedNote: (id) => {
                    set((state) => {
                        const noteIndex = state.archivedNotes.findIndex(note => note.id === id);
                        if (noteIndex !== -1) {
                            state.archivedNotes.splice(noteIndex, 1);
                        }
                    });
                },

                restoreNote: (id) => {
                    set((state) => {
                        const archivedIndex = state.archivedNotes.findIndex(note => note.id === id);
                        if (archivedIndex !== -1) {
                            const noteToRestore = state.archivedNotes[archivedIndex];
                            delete noteToRestore.archivedAt;
                            state.notes.push(noteToRestore);
                            state.archivedNotes.splice(archivedIndex, 1);
                        }
                    });
                },

                searchNotes: (query, options = { byTitle: true, byTags: true }) => {
                    const q = (query || '').trim().toLowerCase();
                    if (!q) return get().notes;

                    const { byTitle = true, byTags = true } = options || {};
                    return get().notes.filter(note => {
                        const titleMatch = byTitle && note.title.toLowerCase().includes(q);
                        const tagsMatch = byTags && note.tags.some(tag => tag.toLowerCase().includes(q));
                        return titleMatch || tagsMatch;
                    });
                },

                getTags: () => {
                    const state = get();
                    return state.notes.flatMap(note => note.tags);
                }
            })
        ),
        {
            name: 'notes-storage',
        }
    )
);
