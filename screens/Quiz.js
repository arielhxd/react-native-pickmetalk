import axios from 'axios';
import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    color: '#FF725E',
    fontSize: 25,
    marginTop: 25,
    fontWeight: '600',
  },
  boxChoice: {
    width: 350,
    height: 250,
    padding: 20,
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

const Quiz = ({ navigation }) => {
  const [category, setCategory] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('http://192.168.1.7:3000/api/category')
      .then((response) => {
        if (response.data.status === 'success') {
          setCategory(response.data.data);
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{'CHOOSE CATEGORY'}</Text>
          {category && category.length > 0
            ? category.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.boxChoice}
                  onPress={() => navigation.navigate('ShowQuiz', { category: item.id })}
                >
                  <Image
                    style={{ height: 180, width: 300 }}
                    source={{ uri: item.image }}
                  />
                </TouchableOpacity>
              ))
            : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Quiz;
