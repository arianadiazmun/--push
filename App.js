import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RestList from './app/RestList';
import Tray from './app/Tray';


export default function App() {

  const [selectRestaurant, setselectRestaurant] = useState(null);
  return (
    <>
    <View style={styles.container}>
      <Text style= {styles.header}>Lunch Spot 🌮
      </Text>
      <RestList/>
      <StatusBar style="auto" />
    </View>
    <Tray setselectRestaurant={setselectRestaurant}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 65,
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    color: 'white',
    fontSize: 36

  }


});
