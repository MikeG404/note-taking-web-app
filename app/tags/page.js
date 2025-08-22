'use client';

import { useMemo } from 'react';
import TagList from '../components/tags/TagList';
import { useNoteStore } from '@/store/useNoteStore';

export default function TagsPage() {
    const notes = useNoteStore((state) => state.notes);

    const tags = useMemo(() => {
        const allTags = notes.flatMap(note => note.tags || []);
        const uniqueTags = [...new Set(allTags)];

        return uniqueTags.map((tagName, index) => ({
            id: index + 1,
            name: tagName
        }));
    }, [notes]);

    return (
        <main>
            <TagList tags={tags} title="Tags" />
        </main>
    );
}
