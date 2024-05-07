/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, VStack } from 'native-base';
import React from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useUserContext } from '../context/UserContext';
import Calls from './Calls';
import Chats from './Chats';
import Contacts from './Contacts';
import Message from './Message';
import Onboarding from './Onboarding';
import Settings from './Settings';
import SignIn from './SignIn';
import SignUp from './SignUp';
import VerifyEmail from './VerifyEmail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					position: 'absolute',
					bottom: 10,
					left: 10,
					right: 10,
					borderRadius: 20,
					height: 70,
					backgroundColor: '#FFFFFF',
					shadowColor: '#000',
					shadowOffset: {
						width: 0,
						height: 2,
					},
					shadowOpacity: 0.25,
					shadowRadius: 3.84,
					elevation: 5,
				},
			}}>
			<Tab.Screen
				name="Chats"
				component={Chats}
				options={{
					headerShown: false,
					tabBarShowLabel: false,
					tabBarIcon: ({ focused }) => (
						<VStack alignItems={'center'}>
							<AntDesign
								name="message1"
								size={24}
								color={focused ? '#24786D' : '#797C7B'}
							/>
							<Text
								color={focused ? '#24786D' : '#797C7B'}
								fontSize={16}>
								Chats
							</Text>
						</VStack>
					),
				}}
			/>
			<Tab.Screen
				name="Calls"
				component={Calls}
				options={{
					headerShown: false,
					tabBarShowLabel: false,
					tabBarIcon: ({ focused }) => (
						<VStack alignItems={'center'}>
							<Feather
								name="phone-call"
								size={24}
								color={focused ? '#24786D' : '#797C7B'}
							/>
							<Text
								color={focused ? '#24786D' : '#797C7B'}
								fontSize={16}>
								Calls
							</Text>
						</VStack>
					),
				}}
			/>
			<Tab.Screen
				name="Contacts"
				component={Contacts}
				options={{
					headerShown: false,
					tabBarShowLabel: false,
					tabBarIcon: ({ focused }) => (
						<VStack alignItems={'center'}>
							<MaterialCommunityIcons
								name="account-circle-outline"
								size={24}
								color={focused ? '#24786D' : '#797C7B'}
							/>
							<Text
								color={focused ? '#24786D' : '#797C7B'}
								fontSize={16}>
								Contacts
							</Text>
						</VStack>
					),
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={Settings}
				options={{
					headerShown: false,
					tabBarShowLabel: false,
					tabBarIcon: ({ focused }) => (
						<VStack alignItems={'center'}>
							<Feather
								name="settings"
								size={24}
								color={focused ? '#24786D' : '#797C7B'}
							/>
							<Text
								color={focused ? '#24786D' : '#797C7B'}
								fontSize={16}>
								Settings
							</Text>
						</VStack>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const Screens = () => {
	const { user, isLoading } = useUserContext();

	React.useLayoutEffect(() => {
		if (!isLoading) {
			SplashScreen.hide();
		}
	}, [isLoading]);

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="TabNavigator">
				<Stack.Screen
					name="Message"
					component={Message}
					options={{ headerShown: false }}
				/>
				{!user.email && (
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
				<Stack.Screen
					name="TabNavigator"
					component={TabNavigator}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Screens;
