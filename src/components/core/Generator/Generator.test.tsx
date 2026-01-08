import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Generator from "./Generator";

describe("Generator Component", () => {
  const defaultProps = {
    jsonData: "",
    handleJsonChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render with jsonData", () => {
    const props = {
      ...defaultProps,
      jsonData: '{"name": "John"}',
    };

    render(<Generator {...props} />);
    expect(screen.getByRole("textbox")).toHaveValue('{"name": "John"}');
  });

  it("should call handleJsonChange on change", () => {
    render(<Generator {...defaultProps} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: '{"age": 30}' } });
    expect(defaultProps.handleJsonChange).toHaveBeenCalledTimes(1);
  });
});
