import { StyleSheet, View, Text } from "react-native";

function GoalsOutput( prop ){
 return(
    <View style={styles.goalsStyle}>
            <Text style={styles.goalText}> {prop.item} </Text>
    </View>
 )
}


export default GoalsOutput;

const styles = StyleSheet.create({

    goalsStyle:{
        backgroundColor:'#D5C0F2',
        margin:8,
        padding: 8,
        borderRadius:6,
        
        
      },
      goalText:{
        color:'#4B0082',
      },
})