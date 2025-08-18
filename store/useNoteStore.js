import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const useNoteStore = create(
    persist(
        immer(
            (set) => ({
                notes: [{
                    id: 1,
                    title: 'Note 1',
                    content: 'This is the first note',
                    tags: ['Dev', 'React'],
                    date: '29 Oct 2024',
                },
                {
                    id: 2,
                    title: 'Note 2',
                    content: 'This is the second note',
                    tags: ['non-dev', 'React'],
                    date: '29 Oct 2024',
                }],
                currentNote: null,

                addNote: (note) => {
                    set((state) => {
                        state.notes.push(note);
                    });
                },
            })
        ),
        {
            name: 'notes-storage',
        }
    )
);