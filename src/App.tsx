/* eslint-disable prettier/prettier */
import React from 'react';
import { BottomTabsNavigator } from './screens/BottomTabs.navigator';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './App.provider';

import { Platform, UIManager } from 'react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator/>
      </NavigationContainer>
    </AppProvider>
  );
};
