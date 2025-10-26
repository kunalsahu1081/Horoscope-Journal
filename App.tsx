/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigator from './src/AppNavigator.tsx';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './src/store/store.ts';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        </SafeAreaProvider>
    );
}

export default App;
