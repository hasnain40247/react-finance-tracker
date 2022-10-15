import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
} from "react-native";
import DashboardCard from "./src/Components/DashboardCard";
import ExpenseContainer from "./src/Components/ExpenseContainer";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import AddExpense from "./src/Components/AddExpense";
import BottomSheet from "./src/Components/BottomSheet";
import { data } from "./src/Utilities/sampledata";
import { useCallback, useState } from "react";
let customFonts = {
  "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
};

export default function App() {
  const [isLoaded] = useFonts(customFonts);
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState("");

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffc404" }}>
      <View style={styles.appbar}>
        <Text style={styles.apptitle}>TrackIt</Text>
        <FontAwesome name="user-circle" size={25} color="white" />
      </View>
      <View style={styles.body}>
        <DashboardCard />
        <View style={styles.expenselist}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ExpenseContainer
                date={item.date}
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
}

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
    backgroundColor: "#f9f9f9",
    flex: 9,
    alignSelf: "stretch",
  },
});
