import { Calendar } from "../components/Calendar";
import { CalendarProvider } from "../context/CalendarContext";
import { RemindersProvider } from "../context/RemindersContext";

function CalendarPage(props) {
  return (
    <CalendarProvider>
      <RemindersProvider>
        <Calendar />;
      </RemindersProvider>
    </CalendarProvider>
  );
}

export default CalendarPage;
