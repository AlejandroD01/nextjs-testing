import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./Home";
import { useRouter } from "next/navigation";


jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));

test("Test navigation to another route", () => {
    const mockPush = jest.fn();

    
    (useRouter as jest.Mock).mockReturnValue({
        push: mockPush,
    });

    render(<Home />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockPush).toHaveBeenCalledWith("myroute");
})



test("should navigate to myroute when button is clicked", () => {
    const pushMock = jest.fn();
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const useRouterMock = jest.spyOn(require("next/navigation"), "useRouter").mockReturnValue({
        push: pushMock,
    });
    const { getByText } = render(<Home />);
    fireEvent.click(getByText("Navigate to myroute"));
    expect(pushMock).toHaveBeenCalledWith("myroute");
    useRouterMock.mockRestore();
})



// function suma(a: number, b: number): number {
//     return a + b;
// }



// async function getResponse() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello World")
//         }, 1000)
//     })
// }



// describe("Home", () => {

//     test("adds 2+3 should be equal to 5", () => {
//         expect(suma(2, 3)).toBe(5);
//     })

//     test("getResponse should return Hello World", async () => {
//         const response = await getResponse()
//         expect(response).toBe("Hello World")
//     })

// })

// describe("Home component", () => {
//     beforeEach(() => {
//         render(<Home />);
//     })

//     it("should render the Home component", () => {
//         const heading = screen.getByText(/Home/i);
//         expect(heading).toBeInTheDocument();
//     })

//     it("should render a heading inside h1", () => {
//         const heading = screen.getByRole("heading",{ level: 1 });
//         expect(heading).toBeInTheDocument();
//     })
// })