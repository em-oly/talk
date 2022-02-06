import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PromptScreen from './components/PromptList/index';
import HomeScreen from './components/Home/Home';
import TopicScreen from './components/Topic/Topic';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="Prompts" component={PromptScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Topic" component={TopicScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
