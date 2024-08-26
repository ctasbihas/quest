import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { useUserContext } from '../context/UserContext';
import AuthStackNavigator from '../navigation/AuthStackNavigator';
import MainTabNavigator from '../navigation/MainTabNavigator';
import Message from './Message';

const RootStack = createNativeStackNavigator();

const Screens = () => {
	const { user, isLoading } = useUserContext();

	React.useLayoutEffect(() => {
		if (!isLoading && !!user) {
			SplashScreen.hide();
		}
	}, [isLoading, user]);

	if (!isLoading && !user?.email) {
		return (
			<NavigationContainer>
				<RootStack.Navigator screenOptions={{ headerShown: false }}>
					<RootStack.Screen
						name="AuthStack"
						component={AuthStackNavigator}
					/>
				</RootStack.Navigator>
			</NavigationContainer>
		);
	} else {
		return (
			<NavigationContainer>
				<RootStack.Navigator screenOptions={{ headerShown: false }}>
					<RootStack.Screen
						name="MainTabs"
						component={MainTabNavigator}
					/>
					<RootStack.Screen name="Message" component={Message} />
				</RootStack.Navigator>
			</NavigationContainer>
		);
	}
};

export default Screens;
