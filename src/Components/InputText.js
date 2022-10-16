import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const InputTextField = ({ label, value, handleOnChange }) => {
  const [onfocus, setFocus] = useState(false);
  return (
    <TextInput
      value={value}
      keyboardType={label === "Amount" ? "numeric" : "default"}
      selectTextOnFocus={label === "Date" ? false : true}
      editable={label === "Date" ? false : true}
      onChangeText={handleOnChange}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      cursorColor={"#ffc404"}
      placeholderTextColor={"#c4c4c4"}
      placeholder={label}
      style={[
        styles.inputstyle,
        {
          borderColor: onfocus ? "#ffc404" : "#e5e5e5",
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  inputstyle: {
    borderWidth: 1.5,
    alignSelf: "stretch",
    padding: 14,
    borderRadius: 15,
    borderColor: "#e5e5e5",
    fontSize: 20,
    marginTop: 8,
    marginBottom: 8,
  },
});
export default InputTextField;
