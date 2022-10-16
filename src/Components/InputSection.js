import { Feather } from "@expo/vector-icons";
import { useContext, useState } from "react";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ActionButton from "./ActionButton";
import InputTextField from "./InputText";
import ToggleTypeButton from "./ToggleTypeButton";
import DatePickerInput from "./DatePickerInput";
import { Context as ExpenseContext } from "../Utilities/Context/expenseContext";

const InputSection = ({ handleAnimation, handleToggle, isActive }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const { addEntry } = useContext(ExpenseContext);
  const { state } = useContext(ExpenseContext);

  console.log("STATE");
  console.log(state);

  return (
    <>
      <View style={styles.titleheader}>
        <View />
        <Text style={styles.labeltext}>Add Income/Expense</Text>

        <TouchableOpacity
          onPress={function () {
            handleAnimation();
          }}
        >
          <Feather name="x" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ToggleTypeButton handleToggle={handleToggle} isActive={isActive} />
      <InputTextField
        label={"Amount"}
        value={amount}
        handleOnChange={setAmount}
      />
      <InputTextField
        label={"Description"}
        value={description}
        handleOnChange={setDescription}
      />
      <DatePickerInput date={date} setDate={setDate} />
      <ActionButton
        label={"Save"}
        action={() => {
          addEntry({ amount, key: description, type: isActive }, date);
          setAmount("");
          setDescription("");
          setDate(new Date());
          handleAnimation();
          Keyboard.dismiss();
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  titleheader: {
    display: "flex",
    marginBottom: 20,

    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
  },
  labeltext: {
    fontSize: 20,

    fontWeight: "bold",
    fontFamily: "Poppins-Regular",
  },
});
export default InputSection;
