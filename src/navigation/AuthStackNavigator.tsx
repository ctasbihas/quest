import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Auth from '../Screens/Auth';
import Onboarding from '../Screens/Onboarding';
import VerifyEmail from '../Screens/VerifyEmail';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
	return (
		<AuthStack.Navigator>
			<AuthStack.Screen
				name="Onboarding"
				component={Onboarding}
				options={{ headerShown: false }}
			/>
			<AuthStack.Screen
				name="Auth"
				component={Auth}
				options={{ headerShown: false }}
			/>
			<AuthStack.Screen
				name="VerifyEmail"
				component={VerifyEmail}
				options={{
					headerTitle: 'OTP Verification',
					headerTitleAlign: 'center',
					headerShadowVisible: false,
					headerTitleStyle: { fontSize: 28 },
				}}
			/>
		</AuthStack.Navigator>
	);
};

export default AuthStackNavigator;
