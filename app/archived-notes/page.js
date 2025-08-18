import NoteList from "../components/notes/NoteList"

export default function ArchivedNote() {
    return (
        <main>
            <NoteList title='Archived Notes' message='All your archived notes are store here. You can restore or delete them anytime.'/>
        </main>
    )
}