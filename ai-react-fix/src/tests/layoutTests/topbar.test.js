import Topbar from "layout/Topbar";
import store from "redux/store";
import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "tests/TestUtils";

describe("Topbar Component", () => {
    it("renders without crashing", () => {
        renderWithProviders(<Topbar />, store);
    });
});