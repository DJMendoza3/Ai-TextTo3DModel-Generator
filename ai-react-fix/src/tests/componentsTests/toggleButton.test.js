import ToggleButton from "components/ToggleButton";
import store from "redux/store";
import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "tests/TestUtils";

describe("Toggle Button Component", () => {
    it("renders without crashing", () => {
        renderWithProviders(<ToggleButton />, store);
    });
    
});