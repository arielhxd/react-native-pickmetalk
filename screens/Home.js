import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    width: '100%',
  },
  border: {
    width: 120,
    bottom: 35,
    padding: 14,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 25,
    backgroundColor: '#FF725E',
  },
  button: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
});

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/pickmetalk.png')}
        style={styles.image}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('Quiz')}
          style={styles.border}
        >
          <Text style={styles.button}>Start</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Home;
