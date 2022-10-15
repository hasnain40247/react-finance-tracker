import { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import TypeTile from "./TypeTile";

const ExpenseContainer = ({ date, expenseentries }) => {
  const [formated, setFormat] = useState(
    new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(new Date())
  );
  useEffect(() => {
    let todaysDate = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (todaysDate.toDateString() === date.toDateString()) {
      setFormat("Today");
    } else if (yesterday.toDateString() === date.toDateString()) {
      setFormat("Yesterday");
    }
  });
  return (
    <View style={styles.expensecontainer}>
      <Text style={styles.fontstyle}>{formated}</Text>
      <FlatList
        data={expenseentries}
        renderItem={({ item }) => (
          <TypeTile
            type={item.type}
            label={item.key}
            amount={item.amount.toString()}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  expensecontainer: {
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "2%",
  },
  fontstyle: {
    fontFamily: "Poppins",
    color: "#66665e",
    alignSelf: "center",
  },
});

export default ExpenseContainer;
