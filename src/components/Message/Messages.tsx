import { FlatList, HStack, Icon, Text, VStack } from 'native-base';
import React from 'react';
import { ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useUserContext } from '../../context/UserContext';
import { messages } from '../../utils/fakeData';

const Messages = ({ chatUser }: any) => {
	const { user } = useUserContext();

	if (!user) {
		return null;
	}

	const convertToTime = (timestamp: string) => {
		const date = new Date(timestamp);
		const hour = date.getHours();
		const minute = date.getMinutes();
		return `${hour}:${minute}`;
	};

	return (
		<ImageBackground
			resizeMode="cover"
			style={{ flex: 1 }}
			source={{
				uri: 'https://i.pinimg.com/236x/e5/b4/e3/e5b4e3f0d1d62f7d3820768b5795e6d5.jpg',
			}}>
			<FlatList
				data={messages}
				paddingX={5}
				renderItem={({ item, index }) => (
					<VStack
						bgColor={
							item.senderId === user.id ? '#20A090' : '#FFFFF0'
						}
						padding={2}
						marginTop={
							messages[index - 1]?.senderId === item.senderId
								? '1'
								: '4'
						}
						rounded={'lg'}
						alignSelf={
							item.senderId === user.id
								? 'flex-end'
								: 'flex-start'
						}
						maxWidth={'4/5'}>
						<Text
							fontSize={16}
							color={
								item.senderId === user.id
									? '#FFFFF0'
									: '#000E80'
							}>
							{item.message}
						</Text>
						<HStack
							space={2}
							alignItems={'center'}
							justifyContent={'flex-end'}>
							<Text
								fontSize={12}
								color={
									item.senderId === user.id
										? '#FFFFF0'
										: '#000E80'
								}>
								{convertToTime(item.timestamp)}
							</Text>
							<Text textAlign={'right'}>
								{item.senderId === user.id && (
									<Icon
										as={Ionicons}
										name={
											item.messageStatus === 'Read'
												? 'checkmark-done-sharp'
												: item.messageStatus ===
												  'Delivered'
												? 'checkmark-done-sharp'
												: item.messageStatus === 'Sent'
												? 'checkmark-sharp'
												: 'time-outline'
										}
										size={5}
										color={
											item.messageStatus === 'Read'
												? 'blue.800'
												: ''
										}
									/>
								)}
							</Text>
						</HStack>
					</VStack>
				)}
			/>
		</ImageBackground>
	);
};

export default Messages;
