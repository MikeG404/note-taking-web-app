import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const useNoteStore = create(
    persist(
        immer(
            (set, get) => ({
                notes: [],
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
            })
        ),
        {
            name: 'notes-storage',
        }
    )
);
