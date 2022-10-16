import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import InputTextField from "./InputText";
import { useEffect, useRef, useState } from "react";
import ToggleTypeButton from "./ToggleTypeButton";
import ActionButton from "./ActionButton";
import InputSection from "./InputSection";
import DetailSection from "./DetailSection";
const BottomSheet = ({ detail }) => {
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
    }).start();
  };
  useEffect(() => {
    console.log("HELLO from useEffect");
    setClose(false);

    Animated.timing(translation, {
      toValue: -Dimensions.get("screen").height,
      useNativeDriver: true,
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
          <InputSection
            handleAnimation={handleAnimation}
            handleToggle={handleToggle}
            isActive={isActive}
          />
        ) : (
          <DetailSection handleAnimation={handleAnimation} detail={detail} />
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
    justifyContent: "space-between",
  },
  labeltext: {
    fontSize: 20,

    fontWeight: "bold",
    fontFamily: "Poppins-Regular",
  },
});
export default BottomSheet;
