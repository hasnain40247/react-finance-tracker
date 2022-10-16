import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const AddExpense = ({ handleShowComponent }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => handleShowComponent({ type: "input" })}
        style={styles.floatbutton}
      >
        <MaterialIcons name="add" size={24} color="white" />
      </TouchableOpacity>
      <LinearGradient
        colors={["transparent", "lightgray"]}
        style={styles.gradient}
      />
    </>
  );
};
const styles = StyleSheet.create({
  floatbutton: {
    alignItems: "center",
    zIndex: 20,
    justifyContent: "center",
    width: 80,
    alignSelf: "center",
    position: "absolute",
    bottom: 10,
    height: 80,
    backgroundColor: "#ffc404",
    borderRadius: 100,
  },
  gradient: {
    alignSelf: "stretch",
    position: "absolute",
    bottom: 0,
    height: 100,
    left: 0,
    right: 0,
    flex: 1,
  },
});
export default AddExpense;
