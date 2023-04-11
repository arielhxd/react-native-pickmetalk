import Main from './navigator/Main';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Main />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#823032',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
