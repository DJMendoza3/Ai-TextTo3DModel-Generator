import FlexRow from "layout/FlexRow";
import store from "redux/store";
import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "tests/TestUtils";

describe("Flex Row Component", () => {
    it("renders without crashing", () => {
        renderWithProviders(<FlexRow />, store);
    });
});