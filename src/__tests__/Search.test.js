import { fireEvent, getAllByTestId, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Body from "../components/Body";
import { act } from "react";

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

test("Should test the filtering functionality of the search button.", async () => {
        await act(async () => render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const cardsBeforeClick = screen.getByTestId("resCard");
    expect(cardsBeforeClick.length).toBe(20);

    const searchButton = screen.getByRole("button", {name: "Search"});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target: {value: "burger"}});
    fireEvent.click(searchButton);
    const cards = getAllByTestId("resCard");
    expect(cards.length).toBe(4);
});