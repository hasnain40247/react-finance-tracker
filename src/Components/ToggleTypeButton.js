import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const financeType = ["Income", "Expense"];
const ToggleTypeButton = ({ handleToggle, isActive }) => {
  return (
    <View style={styles.buttoncontainer}>
      <TouchableOpacity
        onPress={() => handleToggle(financeType[0])}
        style={[
          styles.typebutton,
          {
            borderTopLeftRadius: 15,
            borderBottomLeftRadius: 15,
            backgroundColor: isActive === "Income" ? "#ffc404" : "#e9e9e9",
          },
        ]}
      >
        <Text style={styles.buttonlabel}>Income</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleToggle(financeType[1])}
        style={[
          styles.typebutton,
          {
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            backgroundColor: isActive === "Expense" ? "#ffc404" : "#e9e9e9",
          },
        ]}
      >
        <Text style={styles.buttonlabel}>Expense</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttoncontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonlabel: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
  },

  typebutton: {
    padding: 20,
  },

});
export default ToggleTypeButton;
