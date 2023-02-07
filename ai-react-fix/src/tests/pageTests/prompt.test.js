import Prompt from "pages/home/Prompt";
import store from "redux/store";
import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "tests/TestUtils";

describe("Prompt Component", () => {
    it("renders without crashing", () => {
        renderWithProviders(<Prompt />, store);
    });
});