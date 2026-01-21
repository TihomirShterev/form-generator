import "@testing-library/jest-dom";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Option } from "@/types/types";
import Generator from "./Generator";
import { MOCK_FIELDS } from "./Generator.mock";

describe("Generator Component", () => {
  it("should generate fields correctly", () => {
    render(<Generator fields={MOCK_FIELDS} />);

    expect(screen.getByLabelText("Name")).toHaveAttribute(
      "placeholder",
      "Enter your name"
    );

    expect(screen.getByLabelText("Agree to Terms")).toBeInTheDocument();

    MOCK_FIELDS[2].options?.forEach((option: Option) => {
      const radioField = screen.getByLabelText(option.label);
      expect(radioField).toBeInTheDocument();
    });
  });

  it("should validate required fields correctly", async () => {
    render(<Generator fields={MOCK_FIELDS} />);
    fireEvent.click(screen.getByText("Submit"));
    expect(await screen.findByText("Name is required")).toBeInTheDocument();
  });

  it("should validate custom alphabetic fields correctly", async () => {
    render(<Generator fields={MOCK_FIELDS} />);

    fireEvent.input(screen.getByLabelText("Name"), {
      target: { value: "123" },
    });

    fireEvent.click(screen.getByText("Submit"));

    expect(
      await screen.findByText("Please enter letters and space only")
    ).toBeInTheDocument();
  });

  it("should generate dynamic field groups correctly", async () => {
    render(<Generator fields={MOCK_FIELDS} />);
    expect(screen.queryByLabelText(/Company Data/i)).not.toBeInTheDocument();
    const dropdownTrigger = screen.getByLabelText(/Entity/i);
    fireEvent.mouseDown(dropdownTrigger);
    const option = await screen.findByText("BUSINESS");
    fireEvent.click(option);

    await waitFor(() => {
      expect(screen.getByText(/Company Data/i)).toBeInTheDocument();
    });
  });

  it("should auto-fill city and state based on zip code", async () => {
    render(<Generator fields={MOCK_FIELDS} />);
    const dropdownTrigger = screen.getByLabelText(/Entity/i);
    fireEvent.mouseDown(dropdownTrigger);
    const option = await screen.findByText("INDIVIDUAL");
    fireEvent.click(option);

    fireEvent.change(screen.getByLabelText("Zip Code (Try 10001 for New York)"), {
      target: { value: "90010" },
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue("Los Angeles")).toBeInTheDocument();
      expect(screen.getByDisplayValue("California")).toBeInTheDocument();
    });
  });

  it("should handle form submission with valid data", async () => {
    render(<Generator fields={MOCK_FIELDS} />);
    fireEvent.mouseDown(screen.getByLabelText("Entity"));
    const options = await screen.findAllByRole("option");
    fireEvent.click(options[0]); // Select "BUSINESS"
    fireEvent.click(screen.getByLabelText("Agree to Terms"));

    fireEvent.input(screen.getByLabelText("Name"), {
      target: { value: "JohnDoe" },
    });

    await act(async () => {
      fireEvent.click(screen.getByText("Submit"));
    });

    expect(
      await screen.queryByText("Name is required")
    ).not.toBeInTheDocument();

    expect(screen.queryByText("Select an option")).not.toBeInTheDocument();

    expect(
      screen.queryByText("You must accept the terms")
    ).not.toBeInTheDocument();
  });
});
