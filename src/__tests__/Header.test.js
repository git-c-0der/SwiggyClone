import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import appStore from "../redux/appStore";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should render Header and check for the login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});
    expect(loginButton).toBeInTheDocument();
});

it("Should render change login to logout on click.", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name: "LogOut"});
    expect(logoutButton).toBeInTheDocument();
});


it("Should check for the cart link and cart item should be zero initially.", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartLink = screen.getByText(/Cart/);
    expect(cartLink).toBeInTheDocument();

    const cartItems = screen.getByText("Cart - (0 items)")
    expect(cartItems).toBeInTheDocument();
});