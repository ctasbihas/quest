import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Message from './Message';

const SharedScreens = () => {
	const Stack = createStackNavigator();
	return (
		<Stack.Screen
			name="Message"
			component={Message}
			options={{ headerShown: false }}
		/>
	);
};

export default SharedScreens;
