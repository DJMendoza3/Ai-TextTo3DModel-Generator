import Navbar from "layout/navbar/Navbar";
import Header from "features/Header";
import store from "redux/store";
import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "tests/TestUtils";

describe("Navbar Component", () => {
    it("renders without crashing", () => {
        renderWithProviders(<Navbar />, store);
    });
});