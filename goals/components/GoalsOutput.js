import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalsOutput( props ){
 return(
 
    <View style={styles.goalsStyle}>
             <Pressable onPress={props.handleDelete.bind(this,props.id)} android_ripple={{color:"#2B193D"}} style={({pressed})=>{pressed && styles.iosPress}}>
             <Text style={styles.goalText}> {props.item} </Text>
             </Pressable>
    </View>
    
 )
}


export default GoalsOutput;

const styles = StyleSheet.create({

    goalsStyle:{
        backgroundColor:'#D5C0F2',
        margin:8,
        
        borderRadius:6,
        
        
      },
      goalText:{
        padding: 8,
        color:'#4B0082',
      },
      iosPress:{
        opacity:0.5,
      }
})