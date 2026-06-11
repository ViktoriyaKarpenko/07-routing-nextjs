'use client';

import { useRouter } from 'next/navigation';
import type { Note } from '@/types/note';
import NotePreview from '@/components/NotePreview/NotePreview';
import Modal from '@/components/Modal/Modal';

interface NotePreviewClientProps {
  note: Note;
}

export default function NotePreviewClient({ note }: NotePreviewClientProps) {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <NotePreview note={note} />
    </Modal>
  );
}
