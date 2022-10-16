import { useState } from "react";
import { NumericFormat } from 'react-number-format';

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

const TypeTile = ({ object, handleShowComponent }) => {
  console.log(object);
  return (
    <TouchableWithoutFeedback onPress={() => handleShowComponent(object)}>
      <View style={[styles.typetile, styles.elevation]}>
        <Text
          style={[
            styles.fontstyle,
            {
              fontWeight: object.item.type === "Expense" ? "600" : "bold",
            },
          ]}
        >
          {object.item.key}
        </Text>

        <NumericFormat
          value={object.item.amount}
          displayType="text"
          thousandSeparator
          prefix="$"
          renderText={(value) => (
            <Text
              style={[
                styles.fontstyle,
                {
                  color: object.item.type === "Expense" ? "#8F284F" : "#288F68",
                  fontWeight: object.item.type === "Expense" ? "600" : "bold",
                },
              ]}
            >
              {value}
            </Text>
          )}
        />
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
    elevation: 4,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
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
