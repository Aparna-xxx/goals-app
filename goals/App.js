import { StyleSheet, Text, View,TextInput,Button, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [mytext, setMyText] = useState(''); //variable for the text input
  const [goalList, setGoalList] = useState([]); //array variable to store list of goals
 
  function readText(enteredText){
    setMyText(enteredText)
    
  }

  function buttonClicked(){
    //console.log(mytext)
    setGoalList((currentGoals) => [...currentGoals, mytext]) //add new goal
    //setGoalList([]);
    //The function receives the current state of goalList as currentGoals.
    //Using the spread operator, it creates a new array that contains all items from currentGoals, followed by mytext.
    //The new array is returned and setGoalList updates the state with this new array.
  }


  return (
    <View style={styles.appcontainer}>
      <View style={styles.headcontainer}>
        <TextInput style={styles.input} placeholder='Your goals' onChangeText={readText}/>
        <Button title="Add goal" onPress={buttonClicked}></Button>
      </View>
      <View style = {styles.bodycontainer}>
        <ScrollView>
          {goalList.map((goal)=>(
            <View key={goal} style={styles.goalsStyle}>
            <Text style={styles.goalText}> {goal} </Text>
            </View>
            ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer:{
    paddingTop:50,
    paddingHorizontal:16,
    flex:1,
  },
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
  bodycontainer:{
    flex:5,
    //flexDirection:'row',
  },
  goalsStyle:{
    backgroundColor:'#D5C0F2',
    margin:8,
    padding: 8,
    borderRadius:6,
    
    
  },
  goalText:{
    color:'#4B0082',
  }
});
