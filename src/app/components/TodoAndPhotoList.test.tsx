import "@testing-library/jest-dom";
import { waitFor, render, screen } from "@testing-library/react";
import TodoAndPhotoList from "./TodoAndPhotoList";

//API mock
//Se guarda la referencia original a global.fetch para poder restaurarla después de cada prueba.
//  Esto es esencial para evitar que los mocks de una prueba afecten a otras.
const originalFetch = global.fetch;

describe("Testing TodoAndPhotoList component", () => {

    //Restauración de global.fetch después de cada test
    afterEach(() => {
        global.fetch = originalFetch;
    });

    //Se define un arreglo de objetos simulando la respuesta de la API
    it("should fect todos from API and update state", async () => {
        const mockTodos = [
            { id: 1, title: "Todo 1", completed: false },
            { id: 2, title: "Todo 2", completed: true },
        ];

        // Esto simula el comportamiento de fetch sin hacer llamadas a la API real, permitiendo controlar la respuesta
        //  que recibirá el componente.
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                status: 200,
                json: () => Promise.resolve(mockTodos),
            } as Response)
        );

        render(<TodoAndPhotoList />);

        await waitFor(() => {
            const todoItems = screen.getAllByRole("listitem");
            expect(todoItems.length).toBe(4);
            expect(todoItems[0].textContent).toContain("Todo 1 - Pending");
            expect(todoItems[1].textContent).toContain("Todo 2 - Completed");
        });

        // Se asegura que la función fetch haya sido llamada con el URL correcto
        expect(global.fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/todos");  
    })
    
    
    it("should fect photos from API and update state", async () => {
        const mockPhotos = [
            { id: 1, title: "Photo 1" },
            { id: 2, title: "Photo 2" },
        ];

       
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                status: 200,
                json: () => Promise.resolve(mockPhotos),
            } as Response)
        );

        render(<TodoAndPhotoList />);

        await waitFor(() => {
            const photoItems = screen.getAllByRole("listitem");
            expect(photoItems.length).toBe(4);
            expect(photoItems[0].textContent).toContain("Photo 1");
            expect(photoItems[1].textContent).toContain("Photo 2");
        });

        expect(global.fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/photos");

    })
    
})