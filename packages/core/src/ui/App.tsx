import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface AppProps {}

const App: React.FC<AppProps> = ({ }) => {
  const [count, setCount] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text>hello</Text>
      <Button title="no purpose btn" onPress={() => {}} />
      <Text>{count}</Text>
      <Button title="increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});