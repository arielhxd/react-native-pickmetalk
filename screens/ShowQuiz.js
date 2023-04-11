import axios from 'axios';
import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, Image, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  headline: {
    fontWeight: 'bold',
    fontSize: 28,
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

const ShowQuiz = ({ route, navigation }) => {
  const { category } = route.params;
  const [index, setIndex] = React.useState(0);
  const [results, setResults] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  const [resultStatus, setResultStatus] = React.useState(null);
  const [currentQuestion, setCurrentQuestion] = React.useState(null);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = React.useState(null);

  const progressPercentage = Math.floor((index / questions?.length) * 100);

  React.useEffect(() => {
    axios
      .get(`http://192.168.1.7:3000/api/quiz/category/${category}`)
      .then((response) => {
        if (response.data.status === 'success') {
          setQuestions(response.data.data);
          setCurrentQuestion(response.data.data[index]);
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  React.useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.answer) {
        setResultStatus(true);
        results.push({ question: index + 1, answer: true });
      } else {
        setResultStatus(false);
        results.push({ question: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);

  React.useEffect(() => {
    setSelectedAnswerIndex(null);
    setResultStatus(null);
    setCurrentQuestion(questions[index]);
  }, [index]);

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <ScrollView>
        <View
          style={{
            marginTop: 30,
            padding: 10,
            borderRadius: 6,
          }}
        >
          <Text style={styles.headline}>{currentQuestion?.question}</Text>

          <Image
            style={{ height: 270, width: '100%', resizeMode: 'contain' }}
            source={{ uri: currentQuestion?.image }}
          />

          <View style={{ marginTop: 12 }}>
            <TouchableOpacity
              onPress={() => selectedAnswerIndex === null && setSelectedAnswerIndex('a')}
              style={
                selectedAnswerIndex === 'a' && 'a' === currentQuestion.answer
                  ? {
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#00FFFF',
                      marginVertical: 10,
                      backgroundColor: 'green',
                      borderRadius: 20,
                    }
                  : selectedAnswerIndex != null && selectedAnswerIndex === 'a'
                  ? {
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#00FFFF',
                      marginVertical: 10,
                      backgroundColor: 'red',
                      borderRadius: 20,
                    }
                  : {
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#00FFFF',
                      backgroundColor: 'white',
                      marginVertical: 10,
                      borderRadius: 20,
                    }
              }
            >
              {selectedAnswerIndex === 'a' && 'a' === currentQuestion.answer ? (
                <AntDesign
                  style={{
                    borderColor: '#00FFFF',
                    textAlign: 'center',
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                  name='check'
                  size={20}
                  color='white'
                />
              ) : selectedAnswerIndex != null && selectedAnswerIndex === 'a' ? (
                <AntDesign
                  style={{
                    borderColor: '#00FFFF',
                    textAlign: 'center',
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,

                    padding: 10,
                    borderRadius: 20,
                  }}
                  name='closecircle'
                  size={20}
                  color='white'
                />
              ) : (
                <Text
                  style={{
                    borderColor: '#00FFFF',
                    textAlign: 'center',
                    borderWidth: 1.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                >
                  {'A'}
                </Text>
              )}

              <Text style={{ marginLeft: 10 }}>{currentQuestion?.a}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectedAnswerIndex === null && setSelectedAnswerIndex('b')}
              style={
                selectedAnswerIndex === 'b' && 'b' === currentQuestion.answer
                  ? {
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#00FFFF',
                      marginVertical: 10,
                      backgroundColor: 'green',
                      borderRadius: 20,
                    }
                  : selectedAnswerIndex != null && selectedAnswerIndex === 'b'
                  ? {
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#00FFFF',
                      marginVertical: 10,
                      backgroundColor: 'red',
                      borderRadius: 20,
                    }
                  : {
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#00FFFF',
                      backgroundColor: 'white',
                      marginVertical: 10,
                      borderRadius: 20,
                    }
              }
            >
              {selectedAnswerIndex === 'b' && 'b' === currentQuestion.answer ? (
                <AntDesign
                  style={{
                    borderColor: '#00FFFF',
                    textAlign: 'center',
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                  name='check'
                  size={20}
                  color='white'
                />
              ) : selectedAnswerIndex != null && selectedAnswerIndex === 'b' ? (
                <AntDesign
                  style={{
                    borderColor: '#00FFFF',
                    textAlign: 'center',
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,

                    padding: 10,
                    borderRadius: 20,
                  }}
                  name='closecircle'
                  size={20}
                  color='white'
                />
              ) : (
                <Text
                  style={{
                    borderColor: '#00FFFF',
                    textAlign: 'center',
                    borderWidth: 1.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                >
                  {'B'}
                </Text>
              )}

              <Text style={{ marginLeft: 10 }}>{currentQuestion?.b}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectedAnswerIndex === null && setSelectedAnswerIndex('c')}
              style={
                selectedAnswerIndex === 'c' && 'c' === currentQuestion.answer
                  ? {
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#00FFFF',
                      marginVertical: 10,
                      backgroundColor: 'green',
                      borderRadius: 20,
                    }
                  : selectedAnswerIndex != null && selectedAnswerIndex === 'c'
                  ? {
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#00FFFF',
                      marginVertical: 10,
                      backgroundColor: 'red',
                      borderRadius: 20,
                    }
                  : {
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#00FFFF',
                      backgroundColor: 'white',
                      marginVertical: 10,
                      borderRadius: 20,
                    }
              }
            >
              {selectedAnswerIndex === 'c' && 'c' === currentQuestion.answer ? (
                <AntDesign
                  style={{
                    borderColor: '#00FFFF',
                    textAlign: 'center',
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                  name='check'
                  size={20}
                  color='white'
                />
              ) : selectedAnswerIndex != null && selectedAnswerIndex === 'c' ? (
                <AntDesign
                  style={{
                    borderColor: '#00FFFF',
                    textAlign: 'center',
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,

                    padding: 10,
                    borderRadius: 20,
                  }}
                  name='closecircle'
                  size={20}
                  color='white'
                />
              ) : (
                <Text
                  style={{
                    borderColor: '#00FFFF',
                    textAlign: 'center',
                    borderWidth: 1.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                >
                  {'C'}
                </Text>
              )}

              <Text style={{ marginLeft: 10 }}>{currentQuestion?.c}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => selectedAnswerIndex === null && setSelectedAnswerIndex('d')}
              style={
                selectedAnswerIndex === 'd' && 'd' === currentQuestion.answer
                  ? {
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#00FFFF',
                      marginVertical: 10,
                      backgroundColor: 'green',
                      borderRadius: 20,
                    }
                  : selectedAnswerIndex != null && selectedAnswerIndex === 'd'
                  ? {
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#00FFFF',
                      marginVertical: 10,
                      backgroundColor: 'red',
                      borderRadius: 20,
                    }
                  : {
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#00FFFF',
                      backgroundColor: 'white',
                      marginVertical: 10,
                      borderRadius: 20,
                    }
              }
            >
              {selectedAnswerIndex === 'd' && 'd' === currentQuestion.answer ? (
                <AntDesign
                  style={{
                    borderColor: '#00FFFF',
                    textAlign: 'center',
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                  name='check'
                  size={20}
                  color='white'
                />
              ) : selectedAnswerIndex != null && selectedAnswerIndex === 'd' ? (
                <AntDesign
                  style={{
                    borderColor: '#00FFFF',
                    textAlign: 'center',
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,

                    padding: 10,
                    borderRadius: 20,
                  }}
                  name='closecircle'
                  size={20}
                  color='white'
                />
              ) : (
                <Text
                  style={{
                    borderColor: '#00FFFF',
                    textAlign: 'center',
                    borderWidth: 1.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                >
                  {'D'}
                </Text>
              )}

              <Text style={{ marginLeft: 10 }}>{currentQuestion?.d}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}
        >
          <Text>{'Your Progress'}</Text>
          <Text>{`(${index}/${questions.length}) questions answered`}</Text>
        </View>
        <View
          style={{
            backgroundColor: '#FFC0CB',
            width: '95%',
            flexDirection: 'row',
            alignItems: 'center',
            height: 10,
            borderRadius: 20,
            justifyContent: 'center',
            marginTop: 20,
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              backgroundColor: 'green',
              borderRadius: 12,
              position: 'absolute',
              left: 0,
              height: 10,
              right: 0,
              width: `${progressPercentage}%`,
              marginTop: 20,
            }}
          />
        </View>
        <View style={{ height: 44 }}></View>
        <View
          style={
            resultStatus === null
              ? null
              : {
                  marginTop: 45,
                  padding: 10,
                  borderRadius: 7,
                  height: 120,
                }
          }
        >
          {resultStatus === null ? null : <Text style={resultStatus == null ? null : { fontSize: 17, textAlign: 'center', fontWeight: 'bold' }}>{!!resultStatus ? 'Correct Answer' : 'Wrong Answer'}</Text>}

          {index + 1 >= questions.length && resultStatus ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Result', {
                  answers: results,
                  length: questions.length,
                })
              }
              style={{
                backgroundColor: 'green',
                padding: 10,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 20,
                borderRadius: 6,
              }}
            >
              <Text style={{ color: 'white' }}>{'Done'}</Text>
            </TouchableOpacity>
          ) : resultStatus === null ? null : (
            <TouchableOpacity
              onPress={() => setIndex(index + 1)}
              style={{
                backgroundColor: 'green',
                padding: 10,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 20,
                borderRadius: 6,
              }}
            >
              <Text style={{ color: 'white' }}>{'Next Question'}</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShowQuiz;
