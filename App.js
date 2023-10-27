import { StatusBar } from 'expo-status-bar';
import { useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const [number1, setNumber1] = useState(0)
  const addToNumber = () => {
    setNumber1(number1 +1)
  }
  
  return (
    <View style={styles.container}>
      
      
 

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
