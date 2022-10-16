import { TouchableOpacity } from "react-native";
import InputTextField from "./InputText";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";

const DatePickerInput = ({ date, setDate }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={{ alignSelf: "stretch" }}
        onPress={() => setDatePickerVisibility(true)}
      >
        <InputTextField
          label={"Date"}
          value={new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(date)}
        />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={(date) => {
          setDate(date);
          setDatePickerVisibility(false);
        }}
        onCancel={() => setDatePickerVisibility(false)}
      />
    </>
  );
};

export default DatePickerInput;
