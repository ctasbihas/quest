import { Avatar, FlatList, HStack, Icon, Text, VStack } from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import { useUserContext } from '../context/UserContext';
import { width } from '../utils';

const Settings = () => {
	const { user } = useUserContext();

	const settings = [
		{
			id: 1,
			title: 'Account',
			shortDesc: 'Privacy, Security, and Change Number',
			icon: (
				<Icon
					as={<Octicons name="key" />}
					size={10}
					color={'#000E08'}
					marginLeft={3}
				/>
			),
		},
		{
			id: 2,
			title: 'Chats',
			shortDesc: 'Chat Wallpaper, Chat History, Theme',
			icon: (
				<Icon
					as={<AntDesign name="message1" />}
					size={10}
					color={'#000E08'}
					marginLeft={3}
				/>
			),
		},
		{
			id: 3,
			title: 'Notifications',
			shortDesc: 'Message, Group, and Others',
			icon: (
				<Icon
					as={<Ionicons name="notificatiosn-outline" />}
					size={10}
					color={'#000E08'}
					marginLeft={3}
				/>
			),
		},
		{
			id: 4,
			title: 'Help',
			shortDesc: 'Help Center, Contact Us, Privacy Policy',
			icon: (
				<Icon
					as={<Feather name="help-circle" />}
					size={10}
					color={'#000E08'}
					marginLeft={3}
				/>
			),
		},
		{
			id: 5,
			title: 'Storage and Data',
			shortDesc: 'Network Usage, Storage Usage',
			icon: (
				<Icon
					as={<Ionicons name="swap-vertical" />}
					size={10}
					color={'#000E08'}
					marginLeft={3}
				/>
			),
		},
		{
			id: 6,
			title: 'Invite a Friend',
			shortDesc: 'Invite friends to join Quest',
			icon: (
				<Icon
					as={<Feather name="user-plus" />}
					size={10}
					color={'#000E08'}
					marginLeft={3}
				/>
			),
		},
	];
	return (
		<VStack backgroundColor={'#000E08'}>
			<Text
				fontSize={24}
				color={'white'}
				marginY={10}
				textAlign={'center'}>
				Settings
			</Text>
			<VStack
				backgroundColor={'white'}
				borderTopRadius={20}
				paddingTop={5}
				paddingX={3}>
				<HStack alignItems={'center'}>
					<Avatar
						width={20}
						height={20}
						source={{
							uri: user.profilePic as string,
						}}
					/>
					<VStack marginLeft={2}>
						<Text fontSize={24} color="black" fontWeight={'black'}>
							{user.name}
						</Text>
						<Text
							fontSize={16}
							color={'gray.500'}
							numberOfLines={1}
							maxWidth={width * 0.8}>
							{user.email}
						</Text>
					</VStack>
				</HStack>
				<FlatList
					data={settings}
					marginTop={2}
					keyExtractor={setting => setting.id.toString()}
					renderItem={({ item }) => (
						<HStack
							alignItems={'center'}
							marginTop={2}
							padding={2}
							borderWidth={0}>
							{item.icon}
							<VStack marginLeft={2}>
								<Text fontSize={22} color="black">
									{item.title}
								</Text>
								<Text
									fontSize={16}
									color={'gray.500'}
									numberOfLines={1}
									maxWidth={width * 0.8}>
									{item.shortDesc}
								</Text>
							</VStack>
						</HStack>
					)}
				/>
			</VStack>
		</VStack>
	);
};

export default Settings;
