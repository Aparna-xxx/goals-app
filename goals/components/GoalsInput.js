import { StyleSheet,View,TextInput,Button, Modal,Image} from "react-native";
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
              <View style={styles.imageContainer}>
                <Image source={require("../assets/images/goal.png")} style={styles.imgStyle}/>
                </View>
                <TextInput style={styles.input} placeholder='Your goals' onChangeText={readText} value={mytext}/>
              
              <View style={styles.buttoncontainer}>
                <Button title="Add goal" onPress={addGoalHandler} color='#4B0082'></Button>
                <Button title="Cancel" color='#ff4d5c' onPress={props.onCancel}></Button>
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
      flex:1,
     backgroundColor:'#290133',
     padding: 15
      
      
    },
    input:{
      borderColor:'black',
      borderWidth:1,
      width: '100%',
      height:'8%',
      marginRight:3,
      backgroundColor:'#E6E6FA',
      borderRadius:10,
      marginBottom:20,
    },
    buttoncontainer:{
      
      flexDirection:'row',
      justifyContent:'space-between',
      width:'60%',
      borderColor:'black'
      
    },
    imgStyle:{
      width: 100,
      height:100,
      marginBottom:30,
    },
    imageContainer:{
      
      width:'100%',
      alignItems:'center'
    }
    
   
  });
  