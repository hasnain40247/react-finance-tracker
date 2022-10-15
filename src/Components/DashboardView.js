import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

const DashboardView=({label,amount,reverse})=>{
    const [labelcolor,setColor]=useState("#284F8F")
    useState(()=>{
if(label==="Income"){
setColor("#288F68")
}else if(label==="Expense"){
setColor("#8F284F")
}
    },[label])

return(
    <View style={[styles.columnview,
    {
        flexDirection: reverse? "column-reverse":"column"
        }]}>
    <Text style={styles.labeltext}>{label}</Text>
    <Text style={[styles.text,{
        color: labelcolor
    }]}>${amount}</Text>
  </View>
)
}

const styles=StyleSheet.create({
    columnview: {
        justifyContent: "center",
        alignItems: "center",
        display:"flex",
        flex: 5,
        alignSelf: "stretch",
      },
      expenseview: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 5,
        alignSelf: "stretch",
        justifyContent: "space-around",
      },
      labeltext:{
        color:"#626058"
    
      },
      text:{
      fontSize: 30,
      fontWeight:"700", 
      color:"#626058"
      },
})





export default DashboardView
