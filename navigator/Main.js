import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import Result from '../screens/Result';
import ShowQuiz from '../screens/ShowQuiz';
import { createStackNavigator } from '@react-navigation/stack';

const Main = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false, animationEnabled: true }}
    >
      <Stack.Screen
        name='Home'
        component={Home}
      />
      <Stack.Screen
        name='Quiz'
        component={Quiz}
      />
      <Stack.Screen
        name='Result'
        component={Result}
      />
      <Stack.Screen
        name='ShowQuiz'
        component={ShowQuiz}
      />
    </Stack.Navigator>
  );
};

export default Main;
