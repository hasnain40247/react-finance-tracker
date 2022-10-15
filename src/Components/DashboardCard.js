import { StyleSheet, Text, View } from "react-native";
import DashboardView from "./DashboardView";

const DashboardCard = () => {
  return (
    <View style={styles.dashboard}>
      <View style={[styles.dashboardCard, styles.elevation]}>
        <DashboardView label="Balance" amount="3,000" />
        <View style={styles.border} />
        <View style={styles.expenseview}>
          <DashboardView label="Income" amount="7,329" />
          <DashboardView label="Expense" amount="4,329" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    backgroundColor: "#fcfcfc",
    alignSelf: "stretch",
    flex: 3,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  dashboardCard: {
    borderColor: "#e5e5e5",
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 15,
    alignSelf: "stretch",
    padding: 8,
    flex:1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  elevation: {
    elevation: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  border: {
    alignSelf:"stretch",
    borderLeftWidth: 2,
    borderColor: "#e5e5e5",
  },

  expenseview: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 5,
    alignSelf: "stretch",
    justifyContent: "space-around",
  },
});

export default DashboardCard;
