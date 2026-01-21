import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ConfigurationInput from "./ConfigurationInput";

describe("ConfigurationInput Component", () => {
  const defaultProps = { jsonData: "", handleJsonChange: jest.fn(), error: "" };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render with jsonData", () => {
    const props = { ...defaultProps, jsonData: '{"name": "John"}' };
    render(<ConfigurationInput {...props} />);
    expect(screen.getByRole("textbox")).toHaveValue('{"name": "John"}');
  });

  it("should call handleJsonChange on change", () => {
    render(<ConfigurationInput {...defaultProps} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: '{"age": 30}' } });
    expect(defaultProps.handleJsonChange).toHaveBeenCalledTimes(1);
  });
});
