import Main from "layout/Main";
import store from "redux/store";
import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "tests/TestUtils";

describe("Main Component", () => {
    it("renders without crashing", () => {
        renderWithProviders(<Main />, store);
    });
});