import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PromptList from './components/PromptList';

export default function App() {
  return (
    <View style={styles.container}>

      <PromptList />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#637CAC',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
