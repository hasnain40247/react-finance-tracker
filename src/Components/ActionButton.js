import { StyleSheet, TouchableOpacity, Text } from "react-native"

const ActionButton=({label, action})=>{
    return (
        <TouchableOpacity onPress={()=>action()}>
        <Text style={styles.savebuttontext}>{label}</Text>
      </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    savebuttontext: {
        fontSize: 20,
        color: "#ffc404",
        fontWeight: "800",
      },
})

export default ActionButton