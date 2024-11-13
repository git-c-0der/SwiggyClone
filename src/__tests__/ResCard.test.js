import "@testing-library/jest-dom";
import ResCard from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { render, screen } from "@testing-library/react";

test("Should look for the restaurants name in the loaded card.", () => {
    render(<ResCard resData={MOCK_DATA} />);
    const name = screen.getByText("Theobroma");
    expect(name).toBeInTheDocument();
});