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

const InputSection = ({ handleAnimation, setEdit, editable, detail }) => {
  const [isActive, setActive] = useState(
    editable ? detail["item"]["type"] : "Income"
  );

  const [title, setTitle] = useState(editable ? "Edit" : "Add");
  const [amount, setAmount] = useState(
    editable ? detail["item"]["amount"].toString() : ""
  );
  const [description, setDescription] = useState(
    editable ? detail["item"]["key"].toString() : ""
  );
  const [date, setDate] = useState(editable ? detail["dateObj"] : new Date());
  const { addEntry, editEntry } = useContext(ExpenseContext);
  const { state } = useContext(ExpenseContext);

  return (
    <>
      <View style={styles.titleheader}>
        <View />
        <Text style={styles.labeltext}>{title} Income/Expense</Text>

        <TouchableOpacity
          onPress={function () {
            handleAnimation();
            setAmount("");
            setDescription("");
            setDate(new Date());
            if (editable) {
              setEdit();
            }
            Keyboard.dismiss();
          }}
        >
          <Feather name="x" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ToggleTypeButton
        handleToggle={(type) => setActive(type)}
        isActive={isActive}
      />
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
          if (editable) {
            editEntry(
              {
                amount,
                key: description,
                type: isActive,
                id: detail["item"]["id"],
              },
              date
            );
            setEdit();
          } else {
            addEntry({ amount, key: description, type: isActive }, date);
          }
          handleAnimation();

          setAmount("");
          setDescription("");
          setDate(new Date());
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
