import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import Onboarding from './Screens/Onboarding';

const Stack = createStackNavigator();

const HomeScreen = () => {
	useEffect(() => {
		SplashScreen.hide();
	}, []);
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Onboarding"
					component={Onboarding}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default HomeScreen;
