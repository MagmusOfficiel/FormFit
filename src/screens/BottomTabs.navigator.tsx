/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Home.screen';
import { History } from './History.screen';
import { Analytics } from './Analytics.screen';
import { AnalyticsIcon, HistoryIcon, HomeIcon } from '../components/Icons';
import { theme } from '../theme';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
    return (
            <BottomTabs.Navigator 
            screenOptions={({route}) => ({ 
                headerStyle: {
                    backgroundColor: 'black',
                },
                tabBarStyle: {
                    backgroundColor: 'black',
                },
                headerTitleStyle:{
                    fontFamily: theme.fontFamilyRegular,
                    color: theme.colorWhite,
                },
                tabBarActiveTintColor: 'orange',
                tabBarInactiveTintColor: theme.colorGrey,
                tabBarIcon: ({color,size}) => {
                    if (route.name === 'Home'){
                        return <HomeIcon color={color} size={size} />;
                    }
                    if (route.name === 'History'){
                        return <HistoryIcon color={color} size={size} />;
                    }
                    if (route.name === 'Analytics'){
                        return <AnalyticsIcon color={color} size={size} />;
                    }
                    return null;
                },
            })}>
            <BottomTabs.Screen name="Home" component={Home} options={{title: "Formulaire "}}  />
            <BottomTabs.Screen name="History" component={History} options={{title: "Historique "}} />
            <BottomTabs.Screen name="Analytics" component={Analytics} options={{title: "Statistique "}} />
        </BottomTabs.Navigator>
    );
};
