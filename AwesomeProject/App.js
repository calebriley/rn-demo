import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import CustomButton from './CustomButton.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <CustomButton title="Hello" />
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
