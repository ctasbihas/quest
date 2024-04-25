import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { useUserContext } from '../context/UserContext';
import HomeScreen from './HomeScreen';
import Onboarding from './Onboarding';
import SignIn from './SignIn';
import SignUp from './SignUp';
import VerifyEmail from './VerifyEmail';

const Stack = createStackNavigator();

const Screens = () => {
	const { user, isLoading } = useUserContext();
	console.log(user.email, isLoading);

	if (!isLoading) {
		SplashScreen.hide();
	}

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName={user.email ? 'HomeScreen' : 'Onboarding'}>
				{user.email ? (
					<Stack.Screen
						name="HomeScreen"
						component={HomeScreen}
						options={{ headerShown: false }}
					/>
				) : (
					<>
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
						<Stack.Screen
							name="VerifyEmail"
							component={VerifyEmail}
							options={{
								headerTitle: 'OTP Verification',
								headerTitleAlign: 'center',
								headerShadowVisible: false,
								headerTitleStyle: { fontSize: 28 },
							}}
						/>
						<Stack.Screen
							name="SignIn"
							component={SignIn}
							options={{
								headerTitle: 'Sign In To Quest',
								headerTitleAlign: 'center',
								headerShadowVisible: false,
								headerTitleStyle: { fontSize: 28 },
							}}
						/>
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Screens;
