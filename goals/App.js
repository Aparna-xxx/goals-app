import { StyleSheet, Text, View,TextInput,Button, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import GoalsOutput from './components/GoalsOutput';
import GoalsInput from './components/GoalsInput';
export default function App() {

 
  const [goalList, setGoalList] = useState([]); //array variable to store list of goals
  const [modalState,setModalState] = useState(false);

  function startAdding(){
    setModalState(true);
  }

  function stopAdding(){
    setModalState(false);
  }
 
  

  function buttonClicked(mytext){
    //console.log(mytext)
    setGoalList((currentGoals) => [...currentGoals, {text: mytext, id: Math.random().toString()}]) //add new goal
    //setGoalList([]);
    //The function receives the current state of goalList as currentGoals.
    //Using the spread operator, it creates a new array that contains all items from currentGoals, followed by mytext.
    //The new array is returned and setGoalList updates the state with this new array.
    stopAdding();
  }

  function goalClicked(id){
    //console.log("Deleted");
    setGoalList((currentGoals) =>{
      return currentGoals.filter((goal)=>goal.id !== id);
    } ) 
  }


  return (
    <>
    <StatusBar style='light'/> 
    <View style={styles.appcontainer}>
      <Button title = 'Add new goal' color='#4B0082' onPress={startAdding}/>
      <GoalsInput handleClick={buttonClicked}  visible={modalState} onCancel={stopAdding}/>
      <View style = {styles.bodycontainer}>
      <FlatList  data={goalList}  renderItem={(itemObject)=>{
       return <GoalsOutput item={itemObject.item.text} handleDelete={goalClicked} id={itemObject.item.id}/>
        
      }} keyExtractor={(item,index)=>{
        return item.id;
      }}/>
        {/* <ScrollView>
          {goalList.map((goal)=>(
            <View key={goal} style={styles.goalsStyle}>
            <Text style={styles.goalText}> {goal} </Text>
            </View>
            ))}
        </ScrollView> */}
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appcontainer:{
    paddingTop:50,
    paddingHorizontal:16,
    flex:1,
    
    backgroundColor:'#290133',
  },
  
  bodycontainer:{
    flex:5,
    //flexDirection:'row',
  },
 
});
