import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { JournalScreen } from './screens/journalScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_right',
                }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Journal" component={JournalScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
