import { Avatar, Box, FlatList, HStack, Text, VStack } from 'native-base';
import React from 'react';
import { chats } from '../../utils/fakeData';

import { NavigationProp } from '@react-navigation/native';

const Conversations = ({ navigation }: { navigation: NavigationProp<any> }) => {
	return (
		<FlatList
			backgroundColor={'#FFFFFF'}
			borderTopRadius={20}
			// eslint-disable-next-line react-native/no-inline-styles
			contentContainerStyle={{ paddingBottom: 95, paddingTop: 10 }}
			data={chats}
			renderItem={({ item }) => (
				<HStack
					justifyContent={'space-between'}
					alignItems={'center'}
					onTouchEnd={() => navigation.navigate('Message', item)}
					paddingY={'2.5'}
					paddingX={'3'}>
					<HStack alignItems={'center'}>
						<Avatar
							width={16}
							height={16}
							source={{
								uri: item.userImage,
							}}>
							<Avatar.Badge
								bg={item.id === 2 ? 'red.500' : 'green.500'}
							/>
						</Avatar>
						<VStack marginLeft={2}>
							<Text lineHeight={'xs'} fontSize={24}>
								{item.userName}
							</Text>
							<Text color={'gray.500'}>{item.message}</Text>
						</VStack>
					</HStack>
					<VStack space={3}>
						<Text>{item.lastMessaged}</Text>
						{item.unreadMessages > 0 && (
							<Box
								backgroundColor={'#FF0000'}
								borderRadius={'full'}
								padding={1}
								width={7}
								height={7}
								alignSelf={'flex-end'}>
								<Text textAlign={'center'} color={'white'}>
									{item.unreadMessages > 9
										? '9+'
										: item.unreadMessages}
								</Text>
							</Box>
						)}
					</VStack>
				</HStack>
			)}
		/>
	);
};

export default Conversations;
