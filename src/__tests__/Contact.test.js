import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import '@testing-library/jest-dom'

test("Should check for the button in our cantact page.", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});


test("Should check for the heading in our cantact page.", () => {
    render(<Contact />);
    const heading = screen.getAllByRole("heading");
    // console.log(heading);
    expect(heading.length).toBe(2);
});


test("Should check for the placeholder in our cantact page.", () => {
    render(<Contact />);
    const placeHolderText = screen.getByPlaceholderText("Name");
    expect(placeHolderText).toBeInTheDocument();
});


test("Should check for the piece of text in our cantact page.", () => {
    render(<Contact />);
    const text = screen.getByText("Submit");
    expect(text).toBeInTheDocument();
});


