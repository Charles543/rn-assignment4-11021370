import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/loginScreen';
import HomeScreen from './Screens/homeScreen';


const Stack = createStackNavigator();

function App (){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;