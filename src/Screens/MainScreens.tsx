/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, VStack } from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Calls from './Calls';
import Chats from './Chats';
import Contacts from './Contacts';
import Settings from './Settings';

const MainScreens = () => {
	const Tab = createBottomTabNavigator();
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

export default MainScreens;
