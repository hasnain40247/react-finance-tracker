import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home, { AppBarTitle } from "./src/Screens/Home";
import { Provider as ExpenseProvider } from "./src/Utilities/Context/expenseContext";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Profile from "./src/Screens/Profile";
import ProfileButton from "./src/Components/ProfileButton";

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: "#ffc404",
            },
            headerTitleAlign: "center",

            headerTitle: (props) => (
              <AppBarTitle title={"TrackIt."} {...props} />
            ),
            headerRight: (props) => <ProfileButton {...props} />,
          }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerStyle: {
              backgroundColor: "#ffc404",
            },
            headerTitleAlign: "center",
            headerTintColor: "white",

            headerTitle: (props) => (
              <AppBarTitle {...props} title={"TrackIt"} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <ExpenseProvider>
      <Root />
    </ExpenseProvider>
  );
};
