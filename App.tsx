import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)


  return (
    <View style={styles.container}>
      <View>
        <Text style={{color: "white", fontWeight: "bold", fontSize: 32, textAlign:"center"}}>Contador de Pessoas</Text>
      </View>
      <View style={styles.counter}>
        <Text style={{color: "black", fontWeight: "bold", fontSize: 32, textAlign:"center"}}>{count}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
        <View>
          <Text style={{color: "white", textAlign:"center", fontSize: 24}}>+</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
        <View>
          <Text style={{color: "white", textAlign:"center", fontSize: 24}}>-</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#525fc5',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 42,
  },
  button: {
    backgroundColor: '#301c59',
    width: "50%",
    height: "10%",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  counter: {
    backgroundColor: "white",
    width: "45%",
    height: "10%",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center"
  }
});
