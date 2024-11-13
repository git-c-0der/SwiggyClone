import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResMenu from "../components/ResMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { Provider } from "react-redux";
import Header from "../components/Header";
import appStore from "../redux/appStore";
import Cart from "../components/Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})


test("Should check the add to cart functionality of the restaurant menu page.", async () => {
        await act(async () => render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <ResMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        ));
        const drinkButton = screen.getByText("Drinks (10)");
        fireEvent.click(drinkButton);
        expect(screen.getAllByTestId("resCard").length).toBe(10);

        const addBtns = screen.getByRole("button", {name: "Add +"});
        console.log(addBtns.length);
        fireEvent.click(addBtns[0]);
        expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

        fireEvent.click(addBtns[1]);
        expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

        expect(screen.getAllByTestId("resCard").length).toBe(12);

        fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

        expect(screen.getAllByTestId("resCard").length).toBe(10);

        expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

});