import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { HiUserCircle } from "react-icons/hi2";
import { useFonts } from "expo-font";
import DashboardView from "./src/Components/DashboardView";
import DashboardCard from "./src/Components/DashboardCard";
import ExpenseContainer from "./src/Components/ExpenseContainer";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
  });
  return (
    <>
      <View style={styles.appbar}>
        <Text style={styles.apptitle}>TrackIt</Text>
        <HiUserCircle />
      </View>
      <View style={styles.body}>
        <DashboardCard />
        <View style={styles.expenselist}>
          <FlatList
            data={[
              {
                date: new Date("2022-10-15"),
                expenseentries: [
                  { key: "Car tyre change", amount: 329, type: "Expense" },
                  { key: "Car tyre change", amount: 329, type: "Income" },
                  { key: "Car tyre change", amount: 329, type: "Expense" },

                  { key: "Car tyre change", amount: 329, type: "Income" },
                ],
              },
              {
                date: new Date("2022-10-14"),
                expenseentries: [
                  { key: "Car tyre change", amount: 329, type: "Expense" },
                  { key: "Car tyre change", amount: 329, type: "Income" },
                  { key: "Car tyre change", amount: 329, type: "Expense" },

                  { key: "Car tyre change", amount: 329, type: "Income" },
                ],
              },
              {
                date: new Date("2022-10-13"),
                expenseentries: [
                  { key: "Car tyre change", amount: 329, type: "Expense" },
                  { key: "Car tyre change", amount: 329, type: "Income" },
                  { key: "Car tyre change", amount: 329, type: "Expense" },

                  { key: "Car tyre change", amount: 329, type: "Income" },
                ],
              },
            ]}
            keyExtractor={(item) => item.date}
            renderItem={({ item }) => (
              <ExpenseContainer
                date={item.date}
                expenseentries={item.expenseentries}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appbar: {
    flex: 1,
    backgroundColor: "#ffc404",
    display: "flex",
    flexDirection: "row",
    padding: "1%",
    justifyContent: "flex-end",
    alignItems: "center",
    color: "white",
    fontSize: "1.8rem",
  },
  apptitle: {
    marginLeft: "auto",
    fontFamily: "Poppins",
    fontWeight: "bold",
    marginRight: "auto",
    color: "white",
    fontSize: "1.8rem",
  },
  body: {
    flex: 9,
    backgroundColor: "#fffcfc",
    alignItems: "center",
    justifyContent: "center",
  },
  expenselist: {
    backgroundColor: "#f9f9f9",
    flex: 10,
    alignSelf: "stretch",
  },
});
