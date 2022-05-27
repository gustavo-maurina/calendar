import { render } from "@testing-library/react";
import moment from "moment";

import { RemindersProvider } from "../../context/RemindersContext";
import { AddReminderModal } from "./AddReminderModal";

describe("Add new reminder to Calendar", () => {
  const todayDate = moment().clone();
  const { getByTestId, findByTestId } = render(
    <RemindersProvider>
      <AddReminderModal isOpen={true} closeModal={() => {}} day={todayDate} />
    </RemindersProvider>
  );

  it("should ");
});
