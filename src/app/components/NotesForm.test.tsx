import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import NotesApp from "./NotesForm";

// FireEvent is a utility function that simulates user events like clicks, typing, etc. in the DOM.

describe("Testinf NotesApp component", () => {
    beforeEach(() => {
        render(<NotesApp />);
    })

    it("renders a title", () => {
        const title = screen.getByText(/Notes App/i);
        expect(title).toBeInTheDocument();
    })
    it("renders a description", () => {
        const desc = screen.getByTestId("desc");
        expect(desc).toBeInTheDocument();
    })
    it("renders input textbox", () => {
        const input = screen.getByPlaceholderText(/Enter your note/i);
        expect(input).toBeInTheDocument();
    })
    it("renders add note button", () => {
        const addNotebutton = screen.getByRole("button");
        expect(addNotebutton).toBeDisabled();
    })
    it("Fill the input and check if the button is enabled", () => {
        const input = screen.getByPlaceholderText(/Enter your note/i);
        const addNotebutton = screen.getByRole("button");
        fireEvent.change(input, { target: { value: "Test Note" } });
        expect(addNotebutton).toBeEnabled();
    })
    it("Test notes list", () => {
        const textInput = screen.getByPlaceholderText(/Enter your note/i);
        const notesList = screen.getByTestId("noteslist");
        const addNotebutton = screen.getByRole("button");

        expect(notesList.querySelectorAll("li").length).toBe(0);
       
        fireEvent.change(textInput, { target: { value: "Test Note 1" } });
        fireEvent.click(addNotebutton);
        fireEvent.change(textInput, { target: { value: "Test Note 2" } });
        fireEvent.click(addNotebutton);
        expect(notesList.querySelectorAll("li").length).toBe(2);
        

    })
}) 