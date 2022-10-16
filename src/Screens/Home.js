import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DashboardCard from "../Components/DashboardCard";
import ExpenseContainer from "../Components/ExpenseContainer";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AddExpense from "../Components/AddExpense";
import BottomSheet from "../Components/BottomSheet";
import { data } from "../Utilities/sampledata";
import { useCallback, useContext, useState } from "react";
import { Context } from "../Utilities/Context/expenseContext";

let customFonts = {
  "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
};
export const AppBarTitle = ({ title }) => {
  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) {
    <Text style={{ color: "white", fontWeight: "bold" }}>TrackIt</Text>;
  } else {
    return <Text style={styles.apptitle}>{title}</Text>;
  }
};
const Home = () => {
  const [isLoaded] = useFonts(customFonts);
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState("");
  const { state } = useContext(Context);

  const handleShowComponent = useCallback((details) => {
    setShow(!show);
    setDetail(details);
  }, []);

  if (!isLoaded) {
    return (
      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="#ffc404" />
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.body}>
        <DashboardCard />
        <View style={styles.expenselist}>
          <FlatList
            extraData={state}
            data={state.sort(function (a, b) {
              return (
                new Date(b.date.toDateString()) -
                new Date(a.date.toDateString())
              );
            })}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ExpenseContainer
                date={item.date}
                objectid={item.id}
                expenseentries={item.expenseentries}
                handleShowComponent={handleShowComponent}
              />
            )}
          />
        </View>
      </View>
      <AddExpense handleShowComponent={handleShowComponent} />
      {show && (
        <BottomSheet
          detail={detail}
          handleShowComponent={handleShowComponent}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appbar: {
    flex: 1,
    backgroundColor: "#ffc404",
    display: "flex",
    flexDirection: "row",
    padding: 11,
    justifyContent: "flex-end",
    alignItems: "center",
    color: "white",
    fontSize: 25,
  },
  apptitle: {
    marginLeft: "auto",
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
    marginRight: "auto",
    color: "white",
    fontSize: 25,
  },
  body: {
    flex: 10,
    backgroundColor: "#fffcfc",
    alignItems: "center",
    justifyContent: "center",
  },
  expenselist: {
    flex: 9,
    alignSelf: "stretch",
  },
});

export default Home;
