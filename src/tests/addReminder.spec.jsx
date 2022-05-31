import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import moment from "moment";

import { CalendarDay } from "../components/CalendarDay";
import { RemindersProvider } from "../context/RemindersContext";

describe("Add reminder operation", () => {
  it("should open Add Reminder modal upon click, then close modal after proper input, and add reminder to respective calendar day", async () => {
    const todayDate = moment().clone();
    const { getByTestId, queryByTestId, getByLabelText, getByText } = render(
      <RemindersProvider>
        <CalendarDay dayInstance={todayDate} />
      </RemindersProvider>
    );

    const calendarDay = getByTestId("calendarDay");

    // should open modal to add reminder
    userEvent.click(calendarDay);
    expect(queryByTestId("addReminderModal")).toBeInTheDocument();

    // should find all inputs and submit button
    const reminderInput = getByLabelText("Reminder text");
    const timeInput = getByLabelText("Time");
    const cityInput = getByLabelText("City");
    const submitButton = getByText("Add");

    // should close modal after submitting form with proper input
    userEvent.type(reminderInput, "Test reminder");
    userEvent.type(timeInput, "07:30");
    userEvent.type(cityInput, "New York");
    userEvent.click(submitButton);
    expect(queryByTestId("addReminderModal")).not.toBeInTheDocument();

    // should add reminder to respective day and: have right text and onclick
    const reminder = queryByTestId("reminder");
    expect(reminder).toBeInTheDocument();
    expect(reminder).toHaveTextContent("Test reminder");
    expect(reminder).toHaveProperty("onclick");
  });
});
