import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.appcontainer}>
      <View style={styles.headcontainer}>
        <TextInput style={styles.input} placeholder='Your goals'/>
        <Button title="Add goal"></Button>
      </View>
      <View style = {styles.bodycontainer}>
        <Text>List of items</Text>
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
  }
});
