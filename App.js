import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>I love CODING!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    display: 'flex',
    flex: 1,
    justifyContent: 'cente',
    alignItems: 'center'
  }
})