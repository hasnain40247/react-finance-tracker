import { Feather } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Context } from "../Utilities/Context/expenseContext";
import ActionButton from "./ActionButton";

const DetailSection = ({ handleAnimation, detail, setEdit }) => {
  const { deleteEntry } = useContext(Context);

  return (
    <>
      <View style={styles.titleheader}>
        <View />
        <Text style={styles.labeltext}>{detail && detail.item.type}</Text>

        <TouchableOpacity
          onPress={function () {
            handleAnimation();
          }}
        >
          <Feather name="x" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text
        style={[
          styles.labeltext,
          {
            fontSize: 60,
            marginTop: 60,
            marginBottom: 60,
            fontWeight: "bold",
            color: detail["type"] === "Expense" ? "#8F284F" : "#288F68",
          },
        ]}
      >
        ${detail && detail.item.amount.toString()}
      </Text>
      <View
        style={{
          marginTop: 10,
          marginBottom: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={[styles.labeltext, { color: "#66665e" }]}>
          {detail && detail.item.key}
        </Text>
        <Text style={[styles.labeltext, { color: "#66665e" }]}>
          {detail && detail.date}
        </Text>
      </View>

      <ActionButton label={"Edit"} action={setEdit} />
      <ActionButton
        label={"Delete"}
        action={() => {
          deleteEntry(detail.item.id, detail.id);
          handleAnimation();
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
export default DetailSection;
