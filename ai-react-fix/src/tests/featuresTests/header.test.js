import Header from "features/Header";
import store from "redux/store";
import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "tests/TestUtils";

describe("Header Component", () => {
    it("renders without crashing", () => {
        renderWithProviders(<Header />, store);
    });
});