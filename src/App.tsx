import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import Onboarding from './Screens/Onboarding';
import SignUp from './Screens/SignUp';

const Stack = createStackNavigator();

const HomeScreen = () => {
	useEffect(() => {
		SplashScreen.hide();
	}, []);
	return (
		<NativeBaseProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Onboarding"
						component={Onboarding}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="SignUp"
						component={SignUp}
						options={{
							headerTitle: 'Sign Up With Email',
							headerTitleAlign: 'center',
							headerShadowVisible: false,
							headerTitleStyle: { fontSize: 28 },
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</NativeBaseProvider>
	);
};

export default HomeScreen;
