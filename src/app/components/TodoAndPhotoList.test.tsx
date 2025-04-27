import "@testing-library/jest-dom";
import { waitFor, render, screen } from "@testing-library/react";
import TodoAndPhotoList from "./TodoAndPhotoList";

const originalFetch = global.fetch;

describe("Testing TodoAndPhotoList component", () => {

    afterEach(() => {
        global.fetch = originalFetch;
    });

    it("should fect todos from API and update state", async () => {
        const mockTodos = [
            { id: 1, title: "Todo 1", completed: false },
            { id: 2, title: "Todo 2", completed: true },
        ];

        
        // global.fetch = jest.fn(() =>
        //     Promise.resolve({
        //         json: () => Promise.resolve(mockTodos),
        //     })
        // );

        render(<TodoAndPhotoList />);

        await waitFor(() => {
            const todoItems = screen.getAllByRole("listitem");
            expect(todoItems.length).toBe(4);
            expect(todoItems[0].textContent).toContain("Todo 1 - Pending");
            expect(todoItems[1].textContent).toContain("Todo 2 - Completed");
        });

        expect(global.fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/todos");


        
    })
    
    it("should fect photos from API and update state", async () => {
        const mockPhotos = [
            { id: 1, title: "Photo 1" },
            { id: 2, title: "Photo 2" },
        ];

        // @ts-ignore
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockPhotos),
            })
        );

        render(<TodoAndPhotoList />);

        await waitFor(() => {
            const photoItems = screen.getAllByRole("listitem");
            expect(photoItems.length).toBe(2);
            expect(photoItems[0].textContent).toContain("Photo 1");
            expect(photoItems[1].textContent).toContain("Photo 2");
        });

        expect(global.fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/photos");

    })
    
})