import { StyleSheet,View,TextInput,Button } from "react-native";
import { useState } from "react";
function GoalsInput(props){
  const [mytext, setMyText] = useState(''); //variable for the text input
  function readText(enteredText){
    setMyText(enteredText)
    
  }
  function addGoalHandler(){
    props.handleClick(mytext);
    setMyText(' ');
  }
    return(
      
          <View style={styles.headcontainer}>
            <TextInput style={styles.input} placeholder='Your goals' onChangeText={readText} value={mytext}/>
            <Button title="Add goal" onPress={addGoalHandler}></Button>
          </View>
      
    )
}

export default GoalsInput;

const styles = StyleSheet.create({
  
    headcontainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems: 'center',
      marginBottom:24,
      borderBottomWidth:1,
      borderBottomColor:'#cccccc',
      flex:1,
    },
    input:{
      borderColor:'black',
      borderWidth:1,
      width: '70%',
      height:'30%',
      marginRight:3,
    },
    
   
  });
  