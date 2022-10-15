import { useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BottomSheet from "./BottomSheet";

const TypeTile = ({ type, label, amount, handleShowComponent, id, date }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => handleShowComponent({ type, label, amount, id, date })}
    >
      <View style={[styles.typetile, styles.elevation]}>
        <Text
          style={[
            styles.fontstyle,
            {
              fontWeight: type === "Expense" ? "600" : "bold",
            },
          ]}
        >
          {label}
        </Text>
        <Text
          style={[
            styles.fontstyle,
            {
              color: type === "Expense" ? "#8F284F" : "#288F68",
              fontWeight: type === "Expense" ? "600" : "bold",
            },
          ]}
        >
          ${amount}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  typetile: {
    backgroundColor: "white",
    marginBottom: 5,
    marginTop: 5,
    padding: 14,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 15,
    borderColor: "#e5e5e5",
    borderWidth: 1,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  elevation: {
    elevation: 10,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  fontstyle: {
    fontFamily: "Poppins-Regular",
    color: "#66665e",
    alignSelf: "center",
    fontSize: 20,
  },
});
export default TypeTile;
