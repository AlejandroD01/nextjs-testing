"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";

interface NotesFormProps {
    addNote: (note: string) => void;
}

const NotesForm: React.FC<NotesFormProps> = ({ addNote }) => {
    const [note, setNote] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (note.trim()) {
            addNote(note);
            setNote("");
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className="flex space-x-2 mb-4" data-testid="form">
            <input
                type="text"
                value={note}
                onChange={handleChange}
                placeholder="Enter your note"
                className="border p-2 rounded w-full mb-2"
            />
            <button type="submit" disabled={note===""} className="bg-blue-500 text-white p-2 rounded" >
                Add Note
            </button>
        </form>
    );

}

interface NotesListProps {
    notes: string[];
}

const NotesList: React.FC<NotesListProps> = ({ notes }) => {
    return (
        <ul className="space-y-2" data-testid="noteslist">
            {notes.map((note, index) => (
                <li key={index} className="bg-gray-100 p-2 rounded shadow-md">
                    {note}
                </li>
            ))}
        </ul>
    );
}

const NotesApp: React.FC = () => {
    const [notes, setNotes] = useState<string[]>([]);

    const addNote = (note: string) => {
        setNotes((prevNotes) => [...prevNotes, note]);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-4">Notes App</h1>
            <p data-testid="desc"> Add new notes in the list</p>
            <NotesForm addNote={addNote} />
            <NotesList notes={notes} />
        </div>
    );
}

export default NotesApp;