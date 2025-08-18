import NoteList from "../components/notes/NoteList";
import Input from "../components/ui/Input";

export default function SearchNote() {
    return (
        <main>
            <NoteList title='Search' message='All notes matching "dev" are displayed below'>
                <Input />
            </NoteList>
        </main>
    )
}