import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context } from "../Utilities/Context/expenseContext";
import DashboardView from "./DashboardView";

const DashboardCard = () => {
  const {state}= useContext(Context)
  const [balance,setBalance]=useState(0)
  const [expense,setExpense]=useState(0)
  const [income,setIncome]=useState(0)

  useEffect(()=>{
    let insum=0
    let exsum=0
state.map((object)=>{
  object.expenseentries.map((entries)=>{
    if(entries.type==="Income"){
      insum+=entries.amount
    }else{
     exsum+=entries.amount
      
    }
  })

 if(state.length>0){
  setIncome(insum)
  setExpense(exsum)
  setBalance(insum-exsum)
 }
})
  },[state])
  return (
    <View style={styles.dashboard}>
      <View style={[styles.dashboardCard, styles.elevation]}>
        <DashboardView label="Balance" amount={balance} />
        <View style={styles.border} />
        <View style={styles.expenseview}>
          <DashboardView label="Income" amount={income} />
          <DashboardView label="Expense" amount={expense} />
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
