import { StyleSheet, Text, View,TextInput,Button, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import GoalsOutput from './components/goalsOutput';
import GoalsInput from './components/GoalsInput';
export default function App() {

 
  const [goalList, setGoalList] = useState([]); //array variable to store list of goals
 
  

  function buttonClicked(mytext){
    //console.log(mytext)
    setGoalList((currentGoals) => [...currentGoals, {text: mytext, id: Math.random().toString()}]) //add new goal
    //setGoalList([]);
    //The function receives the current state of goalList as currentGoals.
    //Using the spread operator, it creates a new array that contains all items from currentGoals, followed by mytext.
    //The new array is returned and setGoalList updates the state with this new array.
  }


  return (
    <View style={styles.appcontainer}>
      <GoalsInput handleClick={buttonClicked}/>
      <View style = {styles.bodycontainer}>
      <FlatList  data={goalList}  renderItem={(itemObject)=>{
       return <GoalsOutput item={itemObject.item.text}/>
        
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
 
});
