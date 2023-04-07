import React from "react";
//import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View } from "react-native";

const ComName = () => {
  const Mfn = (fname,sname,lname) => {
  // const place ="kasur";
  return    `${fname}   ${sname}   ${lname} `;
  
  };
  const place = (
    <Text style={styles.txt}>
      {" "}
      Eat & Meet {Mfn("mohsan", "ali", "joyia")} @bypass{" "}
    </Text>
  );
  return (
    <View style={styles.container}>
     {place}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    
    
    backgroundColor: "#FF0000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 42,
    
  },
  txt: {
    color: "black",
    //font-weight: 2%,
  },
});

export default ComName;
