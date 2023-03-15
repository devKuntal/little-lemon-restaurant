import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

describe("BookingForm", () => {
  test("submitting the form calls the onSubmit prop with the correct values", () => {
    const onSubmit = jest.fn();
    render(<BookingForm onSubmit={onSubmit} />);

    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const dateInput = screen.getByLabelText("Select Date");
    const timeSelect = screen.getByLabelText("Select Time");
    const numberOfGuestsInput = screen.getByLabelText("Number of People");
    const occasionSelect = screen.getByLabelText("Occasion");
    const submitButton = screen.getByText("Confirm Reservation");

    fireEvent.change(nameInput, { target: { value: "Jane Muller" } });
    fireEvent.change(emailInput, { target: { value: "jane@gmail.com" } });
    fireEvent.change(dateInput, { target: { value: "2023-03-15" } });
    fireEvent.change(timeSelect, { target: { value: "18:30" } });
    fireEvent.change(numberOfGuestsInput, { target: { value: "5" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith({
      name: "Jane Muller",
      email: "jane@gmail.com",
      date: "2023-03-15",
      time: "18:30",
      numberOfGuests: "5",
      occasion: "Birthday",
    });
  });
});
