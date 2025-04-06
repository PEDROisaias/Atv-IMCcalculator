import Title from './src/componenets/Title';
import FormIMC from './src/componenets/FormIMC';
import FormClassificação from './src/componenets/FormClassificação';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title />
      <FormIMC/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'center',
  },
});
