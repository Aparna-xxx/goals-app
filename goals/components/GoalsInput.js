import { StyleSheet,View,TextInput,Button, Modal } from "react-native";
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
          <Modal visible={props.visible} animationType="slide">
            <View style={styles.headcontainer}>
              <TextInput style={styles.input} placeholder='Your goals' onChangeText={readText} value={mytext}/>
              <View style={styles.buttoncontainer}>
                <Button title="Add goal" onPress={addGoalHandler} color='#4B0082'></Button>
                <Button title="Cancel" color='#4B0082' onPress={props.onCancel}></Button>
              </View>
            </View>
            
          </Modal>
      
    )
}

export default GoalsInput;

const styles = StyleSheet.create({
  
    headcontainer:{
      justifyContent:'center',
      alignItems: 'center',
      marginBottom:24,
      borderBottomWidth:1,
      borderBottomColor:'#cccccc',
      flex:1,
      padding:20,
    },
    input:{
      borderColor:'black',
      borderWidth:1,
      width: '100%',
      marginRight:3,
    },
    buttoncontainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      width:'60%',
      marginTop:20,
    }
    
   
  });
  