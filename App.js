import { StatusBar } from 'expo-status-bar';

import { Button, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from './src/components/Title';

export default function App() {

  // const handleClick=()=>{
  //   alert("Hello everyone..")
  // };

  const Item=({title})=>(
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );  
  const renderItem=({item}) =><Item title={item.title}></Item>

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item)=>item.id}
      >
      
      </FlatList>
    </SafeAreaView>
    // <View style={styles.container}>
    //   <Title text={"React Native Heloooo I!m Asuu"}/>
    //   <Button title='Click Button' onPress={handleClick}></Button>
    // <TouchableOpacity onPress={handleClick} >
    //   <Text>Click to Here TouchableOpacity</Text>
    // </TouchableOpacity>
    
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  title:{
    fontSize:32,
  },

  item:{
    backgroundColor:"red",
    padding:20,
    marginVertical:8,
    marginHorizontal:16,

  }
});
