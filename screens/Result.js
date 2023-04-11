import { AntDesign } from '@expo/vector-icons';
import { Text, View, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Result = ({ route, navigation }) => {
  const { answers, length } = route.params;

  return (
    <SafeAreaView style={{ margin: 10 }}>
      <View style={styles.container}>
        <Text>{'Your Results'}</Text>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text>{'Share'}</Text>
            <AntDesign
              style={{ marginLeft: 4 }}
              name='sharealt'
              size={18}
              color='black'
            />
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}
      >
        <Text>{'Questions Answered'}</Text>
        <Text>{`(${length}/${length})`}</Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          height: 220,
          borderRadius: 7,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: 'magenta',
            fontSize: 15,
            fontWeight: '500',
            textAlign: 'center',
            marginTop: 8,
          }}
        >
          {'Score Card'}
        </Text>
        <FlatList
          numColumns={2}
          data={answers}
          renderItem={({ item, i }) => (
            <View
              key={i}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                margin: 10,
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Text>{item.question}</Text>
              {item.answer === true ? (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name='checkcircle'
                  size={20}
                  color='green'
                />
              ) : (
                <AntDesign
                  style={{ marginLeft: 5 }}
                  name='closecircle'
                  size={20}
                  color='red'
                />
              )}
            </View>
          )}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('Quiz')}
          style={{ backgroundColor: 'green', padding: 8, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, borderRadius: 5 }}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>{'Home'}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Result;
