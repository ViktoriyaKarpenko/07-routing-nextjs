import { fetchNoteById } from '@/lib/api';
import NotePreviewClient from './NotePreview.client';

interface NotePreviewPageProps {
  params: Promise<{ id: string }>;
}

export default async function NotePreviewPage({
  params,
}: NotePreviewPageProps) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return <NotePreviewClient note={note} />;
}
