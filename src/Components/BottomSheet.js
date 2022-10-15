import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import InputTextField from "./InputText";
import { useCallback, useEffect, useRef, useState } from "react";
import ToggleTypeButton from "./ToggleTypeButton";
import ActionButton from "./ActionButton";
const BottomSheet = ({ handleShowComponent, detail }) => {
  console.log("FROM BOTTOM SHEET");
  console.log(detail);
  const [isActive, setActive] = useState("Income");
  const [close, setClose] = useState(false);
  const translation = useRef(new Animated.Value(0)).current;

  const handleToggle = (type) => {
    setActive(type);
  };

  const handleAnimation = () => {
    Animated.timing(translation, {
      toValue: Dimensions.get("screen").height,
      useNativeDriver: true,
      duration:700
    }).start();
  };
  useEffect(() => {
    console.log("HELLO from useEffect");
    setClose(false);

    Animated.timing(translation, {
      toValue: -Dimensions.get("screen").height,
      useNativeDriver: true,
      duration:700

    }).start();
  }, [detail]);
  return (
    <Animated.View
      style={[
        styles.elevation,
        styles.drawercontainer,
        { transform: [{ translateY: translation }] },
      ]}
    >
      <View style={styles.drawerview}>
        {detail["type"] === "input" ? (
          <>
            <View style={styles.titleheader}>
              <Text style={styles.labeltext}>Add Income/Expense</Text>

              <TouchableOpacity
                onPress={function () {
                  handleAnimation();
                }}
              >
                <Feather name="x" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <ToggleTypeButton handleToggle={handleToggle} isActive={isActive} />
            <InputTextField label={"Amount"} />
            <InputTextField label={"Description"} />
            <InputTextField label={"Date"} />
            <ActionButton label={"Save"} />
          </>
        ) : (
          <>
            <View style={styles.titleheader}>
              <Text style={styles.labeltext}>{detail && detail["type"]}</Text>

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
              ${detail && detail["amount"]}
            </Text>
            <View
              style={{
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <Text style={[styles.labeltext, { color: "#66665e" }]}>
                {detail && detail["label"]}
              </Text>
              <Text style={[styles.labeltext, { color: "#66665e" }]}>
                {detail && detail["date"]}
              </Text>
            </View>

            <ActionButton label={"Edit"} />
            <ActionButton label={"Delete"} />
          </>
        )}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawerview: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  elevation: {
    elevation: 10,
    shadowColor: "black",
    borderColor: "#e5e5e5",
    borderWidth: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 20,
    shadowOffset: { width: 0, height: 2000 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  drawercontainer: {
    backgroundColor: "white",
    position: "absolute",
    zIndex: 40,
    left: 0,
    right: 0,
    bottom: -Dimensions.get("screen").height,
    height: Dimensions.get("screen").height * 0.8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",

    alignItems: "center",
    padding: 20,
  },
  titleheader: {
    display: "flex",
    marginBottom: 20,

    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  labeltext: {
    fontSize: 20,
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "Poppins-Regular",
  },
});
export default BottomSheet;
