
/* eslint-disable prettier/prettier */
import React from 'react';
import { BottomTabsNavigator } from './src/screens/BottomTabs.navigator';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './src/App.provider';
import { Platform, UIManager } from 'react-native';


if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator/>
      </NavigationContainer>
    </AppProvider>
  );
}



