import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";


const TypeTile = ({ type, label, amount }) => {
    return (
      <View style={[styles.typetile, styles.elevation]}>
        <Text style={styles.fontstyle}>{label}</Text>
        <Text
          style={[
            styles.fontstyle,
            {
              color: type === "Expense" ? "#8F284F" : "#288F68",
              fontWeight: "600",
            },
          ]}
        >
          ${amount}
        </Text>
      </View>
    );
  };
const styles=StyleSheet.create({
    typetile: {
        backgroundColor: "white",
        marginBottom: "5px",
        marginTop: "5px",
        padding: "4%",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      elevation: {
        elevation: 10,
        shadowColor: "#171717",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      fontstyle: {
        fontFamily: "Poppins",
        color: "#66665e",
        alignSelf: "center",
      },
})
  export default TypeTile