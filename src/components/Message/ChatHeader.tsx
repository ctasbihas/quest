import { Avatar, HStack, Icon, Pressable, Text, VStack } from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChatHeader = ({ chatUser, navigation }: any) => {
	return (
		<HStack
			alignItems={'center'}
			justifyContent={'space-between'}
			padding={1}
			paddingRight={2}
			borderBottomWidth={1}
			borderBottomColor={'gray.500'}>
			<HStack alignItems={'center'} flexWrap={'wrap'}>
				<Pressable
					onPress={() => navigation.goBack()}
					_pressed={{ bgColor: 'gray.300' }}
					padding={1.5}
					rounded={'full'}
					flexDirection={'row'}
					android_disableSound
					alignItems={'center'}>
					<Icon
						as={AntDesign}
						name="arrowleft"
						size={8}
						color={'black'}
					/>
					<Avatar size={'md'} source={{ uri: chatUser.userImage }} />
				</Pressable>
				<VStack maxWidth={'2xs'}>
					<Text
						fontSize={'2xl'}
						fontWeight={'bold'}
						noOfLines={1}
						lineHeight={'xs'}>
						{chatUser.userName}
					</Text>
					<Text fontSize={'lg'} color={'gray.500'} lineHeight={'xs'}>
						Online
					</Text>
				</VStack>
			</HStack>
			<HStack space={4}>
				<Icon
					as={Ionicons}
					name="call-outline"
					color={'#000E08'}
					size={8}
				/>
				<Icon as={Feather} name="video" color={'#000E08'} size={8} />
			</HStack>
		</HStack>
	);
};

export default ChatHeader;
