import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const useNoteStore = create(
    persist(
        immer(
            (set) => ({
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
            })
        ),
        {
            name: 'notes-storage',
        }
    )
);
