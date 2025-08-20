import EditNote from '../../components/notes/EditNote';

export default function EditNotePage({ params }) {
    return <EditNote noteId={params.id} />;
}
