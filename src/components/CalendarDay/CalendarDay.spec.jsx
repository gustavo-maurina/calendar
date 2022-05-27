import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import moment from "moment";

import { CalendarDay } from ".";
import { RemindersProvider } from "../../context/RemindersContext";

describe("Calendar day click", () => {
  it("should render day cell and open modal on click", async () => {
    const todayDate = moment().clone();
    const { getByTestId, findByTestId } = render(
      <RemindersProvider>
        <CalendarDay dayInstance={todayDate} />,
      </RemindersProvider>
    );

    const calendarDay = getByTestId("calendarDay");
    userEvent.click(calendarDay);
    expect(await findByTestId("addReminderModal")).toBeInTheDocument();
  });
});
