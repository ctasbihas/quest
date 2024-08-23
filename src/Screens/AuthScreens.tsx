import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Onboarding from './Onboarding';
import SignIn from './SignIn';
import SignUp from './SignUp';
import VerifyEmail from './VerifyEmail';

const AuthScreens = () => {
	const Stack = createStackNavigator();
	return (
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
		</Stack.Navigator>
	);
};

export default AuthScreens;
