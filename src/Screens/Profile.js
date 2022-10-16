import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { sampleProfileData } from "../Utilities/sampleProfileData";

let customFonts = {
  "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
};
const Profile = () => {
    const [person,setPerson]=useState("")
    const [addr,setAddr]=useState("")

    
  const [isLoaded] = useFonts(customFonts);
  useEffect(()=>{
setPerson(sampleProfileData[0])
setAddr(sampleProfileData[0].address)

  },[])


  if (isLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require("../../assets/images/sampleprofile.jpg")}
          style={{ height: 200, width: 200, borderRadius: 200 / 2 }}
        />
        <Text style={styles.fontstyle}>{person.name}</Text>
        <Text style={[styles.fontstyle, styles.email]}>
          {person.email}
        </Text>

     <View style={{
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
     }}>
     <Text style={[styles.address]}>
        {addr.street}
      </Text>
      <Text style={[styles.address]}>
        ,{addr.suite},
      </Text>
      <Text style={[styles.address]}>
        {addr.city}
      </Text>
     </View>
       
      </SafeAreaView>
    );
  }
};
const styles = StyleSheet.create({
    address:{
        color:"#787878"
    },
  container: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
  },
  fontstyle: {
    fontSize: 30,
    fontFamily: "Poppins-Regular",
  },
  email: {
    fontSize: 20,
    color:"#787878"
  },
});
export default Profile;
