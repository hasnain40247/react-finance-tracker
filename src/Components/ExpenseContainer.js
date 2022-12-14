import { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import TypeTile from "./TypeTile";
import "intl";
import "intl/locale-data/jsonp/en-ZA";

const ExpenseContainer = ({
  date,
  expenseentries,
  handleShowComponent,
  objectid,
}) => {
  const [formated, setFormat] = useState(
    new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(date)
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
        extraData={expenseentries}
        scrollEnabled={false}
        data={expenseentries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TypeTile
            object={{
              item,
              date: formated,
              dateObj: date,
              id: objectid,
              type: item.type,
            }}
            handleShowComponent={handleShowComponent}
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
    padding: 8,
  },
  fontstyle: {
    fontFamily: "Poppins-Regular",
    color: "#66665e",
    alignSelf: "center",
    fontSize: 20,
  },
});

export default ExpenseContainer;
